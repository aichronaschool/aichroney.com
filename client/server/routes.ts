import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import nodemailer from "nodemailer";

const contactRateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 3;

const insertContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = contactRateLimit.get(ip);
  
  if (!userLimit || now > userLimit.resetTime) {
    contactRateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (userLimit.count >= RATE_LIMIT_MAX) {
    return false;
  }
  
  userLimit.count++;
  return true;
}

export async function registerRoutes(app: Express): Promise<Server> {
  const adminAuth = (req: any, res: any, next: any) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || authHeader !== "Bearer Abhk#8shm3") {
      return res.status(401).json({ message: "Admin access required" });
    }
    next();
  };

  app.post("/api/contact", async (req, res) => {
    const clientIp = req.ip || req.connection.remoteAddress || 'unknown';
    
    if (!checkRateLimit(clientIp)) {
      return res.status(429).json({ 
        success: false, 
        message: "Too many contact form submissions. Please try again in 15 minutes." 
      });
    }
    try {
      const contactData = insertContactSchema.parse(req.body);
      
      const submission = await storage.createContactSubmission(contactData);
      
      try {
        const transporter = nodemailer.createTransport({
          host: "smtp.ethereal.email",
          port: 587,
          secure: false,
          auth: {
            user: "test@example.com",
            pass: "password123"
          }
        });

        const escapeHtml = (text: string) => {
          return text.replace(/[<>&"']/g, (match) => {
            switch (match) {
              case '<': return '&lt;';
              case '>': return '&gt;';
              case '&': return '&amp;';
              case '"': return '&quot;';
              case "'": return '&#39;';
              default: return match;
            }
          });
        };

        const escapedName = escapeHtml(contactData.name);
        const escapedEmail = escapeHtml(contactData.email);
        const escapedCompany = contactData.company ? escapeHtml(contactData.company) : '';
        const escapedPhone = contactData.phone ? escapeHtml(contactData.phone) : '';
        const escapedMessage = escapeHtml(contactData.message).replace(/\n/g, '<br>');

        await transporter.sendMail({
          from: '"AI Chroney Contact Form" <noreply@aichroney.com>',
          to: "hello@aichroney.com",
          subject: `New Contact Form Submission from ${escapedName}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${escapedName}</p>
            <p><strong>Email:</strong> ${escapedEmail}</p>
            ${escapedCompany ? `<p><strong>Company:</strong> ${escapedCompany}</p>` : ''}
            ${escapedPhone ? `<p><strong>Phone:</strong> ${escapedPhone}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p>${escapedMessage}</p>
          `
        });
      } catch (emailError) {
        console.log("Email sending failed (expected in development):", emailError);
      }
      
      res.status(201).json({ 
        success: true, 
        message: "Thank you for your message! We'll get back to you soon.",
        id: submission.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please check your form data", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Something went wrong. Please try again later." 
        });
      }
    }
  });

  app.get("/api/admin/contact", adminAuth, async (req, res) => {
    try {
      const messages = await storage.getContactSubmissions();
      const sortedMessages = messages.sort((a, b) => 
        new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
      );
      res.json(sortedMessages);
    } catch (error) {
      console.error("Error fetching admin contact messages:", error);
      res.status(500).json({ message: "Failed to fetch contact messages" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
