import { Helmet } from "react-helmet-async";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>FAQ – Common Questions About AI Chroney Chatbot Widget</title>
        <meta name="description" content="Find answers to frequently asked questions about AI Chroney. Learn about customization, integrations, pricing, security, LLM support, and how our AI chatbot works for your business." />
        <link rel="canonical" href="https://aichroney.com/faq" />
      </Helmet>
      <Navigation />
      
      <main className="relative overflow-hidden">
        {/* Background gradients */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-br from-purple-100 to-pink-100 opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-blue-100 to-purple-100 opacity-30 blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1445] mb-6">
              FAQ
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to commonly asked questions about AI Chroney.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-white border rounded-lg px-6 py-2 shadow-sm">
              <AccordionTrigger className="text-base sm:text-lg font-semibold text-[#0C1445] hover:no-underline">
                What is AI Chroney?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600">
                AI Chroney is an intelligent chat-based platform that helps businesses and institutions interact with customers, showcase products or services, and answer queries in real-time - all through an AI-powered conversation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white border rounded-lg px-6 py-2 shadow-sm">
              <AccordionTrigger className="text-base sm:text-lg font-semibold text-[#0C1445] hover:no-underline">
                How does AI Chroney work?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600">
                Chroney combines conversational AI, API integrations, and custom data syncing to deliver dynamic, human-like chat experiences tailored to your business needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white border rounded-lg px-6 py-2 shadow-sm">
              <AccordionTrigger className="text-base sm:text-lg font-semibold text-[#0C1445] hover:no-underline">
                Who can use AI Chroney?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600">
                Chroney is designed for organisations across industries- ecommerce, retail, healthcare, fintech, hospitality, education and more - looking to automate customer support and engagement.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white border rounded-lg px-6 py-2 shadow-sm">
              <AccordionTrigger className="text-base sm:text-lg font-semibold text-[#0C1445] hover:no-underline">
                Can AI Chroney be customised for my business?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600">
                Yes! You can fully customise Chroney's appearance, tone, FAQs, and chat flow. You can even connect your APIs to fetch or push real-time data.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white border rounded-lg px-6 py-2 shadow-sm">
              <AccordionTrigger className="text-base sm:text-lg font-semibold text-[#0C1445] hover:no-underline">
                Does Chroney support multiple data sources?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600">
                Absolutely. Chroney can pull data from your CRM, ERP, website, or any API-enabled system- ensuring the chatbot gives accurate, up-to-date answers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white border rounded-lg px-6 py-2 shadow-sm">
              <AccordionTrigger className="text-base sm:text-lg font-semibold text-[#0C1445] hover:no-underline">
                Can I add my products or services to the chat interface?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600">
                Yes- you can easily upload product information, FAQs, and media so customers can explore and buy directly through the chat.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white border rounded-lg px-6 py-2 shadow-sm">
              <AccordionTrigger className="text-base sm:text-lg font-semibold text-[#0C1445] hover:no-underline">
                Does Chroney handle multiple languages?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600">
                Yes, Chroney supports multilingual chats so you can serve customers in their preferred language.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-white border rounded-lg px-6 py-2 shadow-sm">
              <AccordionTrigger className="text-base sm:text-lg font-semibold text-[#0C1445] hover:no-underline">
                Can Chroney show product images, videos, or documents in chat?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600">
                Yes! You can enrich your chat experience with visuals, brochures, or explainer videos directly inside the conversation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-white border rounded-lg px-6 py-2 shadow-sm">
              <AccordionTrigger className="text-base sm:text-lg font-semibold text-[#0C1445] hover:no-underline">
                Can AI Chroney connect with my existing systems?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600">
                Yes- you can integrate with APIs, CRMs, or ERPs (like Salesforce, Zoho, or custom systems) to exchange data in real time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="bg-white border rounded-lg px-6 py-2 shadow-sm">
              <AccordionTrigger className="text-base sm:text-lg font-semibold text-[#0C1445] hover:no-underline">
                How easy is it to install Chroney on my website?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600">
                It's as simple as adding one line of script. You'll get a widget that can be launched as a floating chat or embedded section.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11" className="bg-white border rounded-lg px-6 py-2 shadow-sm">
              <AccordionTrigger className="text-base sm:text-lg font-semibold text-[#0C1445] hover:no-underline">
                Is Chroney powered by ChatGPT or another AI model?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600">
                Chroney is built on advanced large language models (LLMs) like GPT-4 and other top AI engines, fine-tuned for your business data.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12" className="bg-white border rounded-lg px-6 py-2 shadow-sm">
              <AccordionTrigger className="text-base sm:text-lg font-semibold text-[#0C1445] hover:no-underline">
                Will my data be safe and private?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600">
                Yes, your data is encrypted and securely stored. Chroney never uses your data to train public models.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-13" className="bg-white border rounded-lg px-6 py-2 shadow-sm">
              <AccordionTrigger className="text-base sm:text-lg font-semibold text-[#0C1445] hover:no-underline">
                Can I train Chroney on my own data?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600">
                Yes- you can upload documents, FAQs, and company content to make Chroney fully knowledgeable about your brand.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-14" className="bg-white border rounded-lg px-6 py-2 shadow-sm">
              <AccordionTrigger className="text-base sm:text-lg font-semibold text-[#0C1445] hover:no-underline">
                How often does Chroney update its knowledge?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600">
                It automatically syncs updates from your data sources or APIs, ensuring real-time accuracy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-15" className="bg-white border rounded-lg px-6 py-2 shadow-sm">
              <AccordionTrigger className="text-base sm:text-lg font-semibold text-[#0C1445] hover:no-underline">
                Is there a free trial?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600">
                Yes, you can explore Chroney with a free trial to see how it fits your business before upgrading to a paid plan.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-16" className="bg-white border rounded-lg px-6 py-2 shadow-sm">
              <AccordionTrigger className="text-base sm:text-lg font-semibold text-[#0C1445] hover:no-underline">
                Do you provide onboarding support?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600">
                Yes, our team helps you set up your chatbot, connect APIs, and train Chroney on your content.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-17" className="bg-white border rounded-lg px-6 py-2 shadow-sm">
              <AccordionTrigger className="text-base sm:text-lg font-semibold text-[#0C1445] hover:no-underline">
                What industries benefit most from AI Chroney?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600">
                Education, retail, healthcare, finance, real estate, hospitality, and service-based businesses — anywhere real-time customer engagement matters.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
