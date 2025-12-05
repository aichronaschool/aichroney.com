import { randomUUID } from "crypto";

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  message: string;
  submittedAt: Date;
}

export interface InsertContact {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

export interface IStorage {
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

export class MemStorage implements IStorage {
  private contactSubmissions: Map<string, ContactSubmission>;

  constructor() {
    this.contactSubmissions = new Map();
  }

  async createContactSubmission(insertContact: InsertContact): Promise<ContactSubmission> {
    const id = randomUUID();
    const contactSubmission: ContactSubmission = {
      ...insertContact,
      id,
      submittedAt: new Date(),
      company: insertContact.company || null,
      phone: insertContact.phone || null,
    };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values()).sort(
      (a, b) => b.submittedAt.getTime() - a.submittedAt.getTime()
    );
  }
}

export const storage = new MemStorage();
