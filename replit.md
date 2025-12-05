# AI Chroney - AI Chatbot Widget Platform

## Overview

AI Chroney is a minimal, professional chatbot widget platform for businesses. The platform provides an embeddable AI chat widget for sales, support, and lead generation. Currently featuring a clean, conversion-focused landing page with pricing tiers and simple implementation. Built as a full-stack web application with focus on minimalism and whitespace-heavy design.

**Product Focus**: AI chatbot widget for e-commerce, SaaS, service firms, and internal teams. Key capabilities include product recommendations, FAQ answering, and lead capture through conversational interfaces.

## User Preferences

Preferred communication style: Simple, everyday language.
Design preference: Modern, minimalistic, and classy with lots of white space and compact spacing.

## Recent Changes

**December 4, 2025 (Latest)**: Successfully re-imported GitHub project to Replit environment
- Fresh clone setup and configured for Replit deployment
- Installed all npm dependencies (626 packages)
- Fixed image import paths in home.tsx to use stock_images directory
- Vite dev server already configured with allowedHosts: true and host: 0.0.0.0 for Replit proxy support (no changes needed)
- Set up development workflow "Start application" running Express + Vite integration on port 5000
- Configured deployment settings for autoscale with npm build/start commands
- Created .gitignore file with Node.js, build outputs, environment files, and upload_assets exclusion
- Verified application is fully functional with frontend loading correctly
- Application architecture: Full-stack TypeScript with Express backend, React frontend, and in-memory storage

**November 5, 2025**: Successfully imported GitHub project to Replit environment
- Fresh clone setup and configured for Replit deployment
- Installed all npm dependencies (626 packages)
- Configured Vite dev server with allowedHosts: true and host: 0.0.0.0 for Replit proxy support
- Set up development workflow running Express + Vite integration on port 5000
- Configured deployment settings for autoscale with npm build/start
- Created .gitignore file with Node.js, build outputs, and environment files
- Verified application is fully functional with frontend and backend integration
- Application architecture: Full-stack TypeScript with Express backend, React frontend, and in-memory storage

**October 27, 2025**: Removed database from project
- Removed PostgreSQL database - no longer needed for simple landing page
- Simplified storage to use in-memory only (contact form submissions stored in memory)
- Removed database-related packages: drizzle-orm, drizzle-kit, pg, connect-pg-simple, @neondatabase/serverless
- Deleted database configuration files: drizzle.config.ts, shared/schema.ts, server/db.ts
- Contact form validation now defined locally in contact.tsx
- Removed db:push script from package.json
- Significantly simplified codebase - pure Node.js/Express/React stack

**October 26, 2025**: Created interactive Widget Playground page
- **New Playground page** (`/playground`) for widget customization experimentation
- **Client-side only** - no database persistence, just for fun and exploration
- **Features**:
  - Gradient color picker (start and end colors with live preview)
  - Chat header text customization (30 character limit)
  - Inactive button style selection: Circular, Rounded, Pill, Minimal
  - Button animation options: Pulse, Bounce, Glow, None
  - Real-time live preview showing both inactive and active chat states
  - Toggle between floating button view and opened chat window
- **Navigation**: Replaced "Chroney AI" scroll link with "Playground" page link
- All customizations update instantly in the preview panel

**October 26, 2025**: Built new minimal AI Chroney chatbot product landing page
- Complete redesign of home page to focus on AI chatbot widget product
- Replaced school ERP content with clean, minimal chatbot marketing page
- **New page structure:**
  1. Hero Section: "Chat with your business — anywhere." with gradient messaging
  2. Features/Benefits: 3-card row (Sell more, Support 24/7, Generate leads)
  3. How It Works: 3-step process (Customize, Embed, Engage)
  4. Use Cases: Compact text section for e-commerce, SaaS, service firms
  5. Pricing: 2-tier pricing (Starter $19/mo, Pro $49/mo)
  6. FAQ: Accordion-style Q&A section
  7. Footer: Minimal copyright and links
- Maintained design system: Deep blue (#0C1445) + gradient accents (#FF4D4D → #9333EA)
- Preserved whitespace-heavy, professional aesthetic
- Full mobile responsiveness with Tailwind breakpoints
- Contact page remains unchanged for lead capture

**October 26, 2025**: Successfully imported GitHub project to Replit environment
- Installed all npm dependencies (682 packages)
- Created PostgreSQL database and configured environment variables
- Ran database migrations using `npm run db:push` (contact_submissions, blog_posts tables)
- Fixed TypeScript type errors in server code for production-ready deployment
- Set up development workflow running Express + Vite on port 5000
- Configured deployment settings for autoscale with npm build/start
- Created .gitignore file with Node.js best practices
- Verified application is fully functional with frontend and backend integration

**October 19, 2025**: Successfully re-imported and redesigned landing page with full mobile responsiveness
- Installed all npm dependencies (682 packages)
- Restored PostgreSQL database from backup (contact_submissions, blog_posts tables with existing data)
- Migrated from Neon HTTP driver to node-postgres driver for Replit PostgreSQL compatibility
- Configured Vite dev server with allowedHosts: true for Replit proxy support (already configured)
- Set up development workflow running Express + Vite integration on port 5000
- Configured deployment settings for autoscale with npm build/start
- Redesigned landing page with modern, minimalistic design:
  - Updated color scheme to deep blue (#0C1445) primary with red-purple gradient (#FF4D4D → #9333EA) accents
  - New hero section with "ERP is boring. Not anymore." headline and gradient text effects
  - **Moved Chroney AI section to appear right after hero section** for better user flow and to highlight AI capabilities
  - Redesigned "Smarter Schools. Simplified." features section with updated subheading: "Run your school smarter - powered by intelligent automation."
  - **Redesigned "All-in-One School Management Suite" cards with light, classy gradient backgrounds:**
    - Light pastel gradient backgrounds for each card (blue-100 to cyan-100, purple-100 to pink-100, etc.)
    - Vibrant gradient icon boxes that pop against light backgrounds
    - Matching colored text for each theme
    - Elegant borders and refined hover effects
    - Individual gradient colors for all 12 features
  - Modernized Chroney AI chat demo section with clean styling
  - **Optimized blog preview section for compact design:**
    - Reduced vertical spacing (py-8/10 instead of py-12/16)
    - Shows only 1 blog post instead of 3 for minimal space usage
    - Centered single card layout with smaller dimensions
    - Tighter spacing throughout all elements
  - Updated CTA section with gradient buttons and new messaging
  - Refreshed footer with "Where AI Runs the School" tagline
- **Landing page section order (optimized for conversion):**
  1. Hero Section - "ERP is boring. Not anymore."
  2. Chroney AI Assistant - Interactive AI chat demo
  3. Features Section - "Smarter Schools. Simplified."
  4. Blog Preview - Latest insights
  5. CTA Section - Call to action
- Verified application is running correctly with full functionality and database connectivity
- **Enhanced mobile responsiveness across entire website:**
  - Optimized all text sizes for mobile (using sm:, md:, lg:, xl: breakpoints)
  - Responsive chat bubbles in Chroney AI section (max-w-[85%] on mobile)
  - Mobile-optimized feature cards with appropriate padding and spacing
  - Responsive grid layouts (grid-cols-1 to grid-cols-4)
  - Full-width buttons on mobile, auto-width on desktop
  - Responsive logo sizing and spacing
  - Optimized padding and margins for all screen sizes
  - Touch-friendly button sizes on mobile devices
  - Responsive typography throughout (text-sm to text-7xl)
- **Comprehensive SEO optimization (2025 best practices):**
  - Updated title to "AI Chrona – World's First AI Chat-Based School Management System"
  - Optimized meta description (157 characters, action-oriented with CTA)
  - Added canonical tag to prevent duplicate content issues
  - Enhanced robots meta tag (max-image-preview:large, max-snippet:-1, max-video-preview:-1)
  - Complete Open Graph tags with image dimensions and alt text
  - Twitter Card meta tags for social media sharing
  - Organization schema with contact info, address, and social media links
  - Enhanced SoftwareApplication schema with feature list
  - WebSite schema for search box functionality
  - Article schema for blog posts (dynamic, added via useEffect)
  - Mobile-optimized meta tags (theme-color, mobile-web-app-capable)
  - Proper heading hierarchy (H1 > H2 > H3)
  - Alt text on all images (descriptive for content, empty for decorative)

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui design system for accessible, customizable components
- **Styling**: Tailwind CSS with CSS variables for theming and responsive design
- **State Management**: TanStack Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety across the full stack
- **API Design**: RESTful API structure with `/api` prefix for all endpoints
- **Development Server**: Custom Vite integration for hot module replacement during development
- **Static Serving**: Express serves the built React application in production

### Data Storage Solutions
- **Storage**: In-memory storage only (no database)
- **Contact Forms**: Contact form submissions stored in memory during runtime
- **Session Management**: Not currently implemented (can add if needed)

### Authentication and Authorization
- **Admin Access**: Simple bearer token authentication for admin endpoints
- **Security**: Rate limiting for contact form submissions to prevent abuse

### External Dependencies
- **UI Library**: Radix UI for accessible component primitives
- **Styling**: Tailwind CSS for utility-first styling
- **Query Management**: TanStack Query for API state management
- **Form Handling**: React Hook Form with Zod validation
- **Development Tools**: Replit-specific plugins for development environment integration
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date manipulation and formatting
- **Email**: Nodemailer for contact form email notifications (configured for development)

### Design Patterns
- **Monorepo Structure**: Shared types and utilities between client and server
- **Component-Based Architecture**: Modular React components with clear separation of concerns
- **Type Safety**: End-to-end TypeScript with shared schema definitions
- **Progressive Enhancement**: Server-side rendering ready with client-side hydration
- **Mobile-First Design**: Responsive design patterns with mobile breakpoints
- **Theme System**: CSS custom properties for consistent theming and dark mode support

### Key Features Architecture
- **Landing Page**: Marketing-focused homepage with feature showcases and testimonials
- **AI Integration**: Chroney AI assistant positioned as core product differentiator
- **Modular Components**: Reusable UI components for features, testimonials, and CTAs
- **SEO Optimization**: Structured data and meta tags for search engine visibility
- **Performance**: Optimized builds with code splitting and lazy loading capabilities
