import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { MessageCircle, Zap, Users, Settings, Code, Sparkles, RefreshCw, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import nikeAirMaxImage from "@assets/stock_images/nike_air_max_90_snea_6823c7b1.jpg";
import shopifyLogo from "@assets/image_1764857510021.png";

function SequentialTypingText({ texts, speed = 30 }: { texts: string[]; speed?: number }) {
  const [displayedTexts, setDisplayedTexts] = useState<string[]>([]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    setDisplayedTexts([]);
    setCurrentTextIndex(0);
    setCurrentCharIndex(0);
  }, [texts]);

  useEffect(() => {
    if (currentTextIndex < texts.length) {
      const currentText = texts[currentTextIndex];
      
      if (currentCharIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedTexts(prev => {
            const newTexts = [...prev];
            if (!newTexts[currentTextIndex]) {
              newTexts[currentTextIndex] = "";
            }
            newTexts[currentTextIndex] = currentText.substring(0, currentCharIndex + 1);
            return newTexts;
          });
          setCurrentCharIndex(prev => prev + 1);
        }, speed);

        return () => clearTimeout(timeout);
      } else {
        setCurrentTextIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }
    }
  }, [currentTextIndex, currentCharIndex, texts, speed]);

  return (
    <>
      {displayedTexts.map((text, index) => (
        <p key={index} className="text-gray-800 text-sm sm:text-base mt-3 first:mt-0">
          {text}
        </p>
      ))}
    </>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("sales");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const tabs = ["sales", "support", "lead", "faq", "upsell"];
    const interval = setInterval(() => {
      setActiveTab(currentTab => {
        const currentIndex = tabs.indexOf(currentTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 7000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setIsAutoPlaying(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>AI Chroney – AI Chatbot Widget for Sales, Support & Lead Generation</title>
        <meta name="description" content="Embeddable AI chatbot widget that automates sales, provides 24/7 support, and captures leads. Powered by GPT, Claude & Gemini. See live chat examples and try free demo." />
        <link rel="canonical" href="https://aichroney.com/" />
      </Helmet>
      <Navigation />
      <main>
        <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#FF4D4D] to-[#9333EA] mb-6 sm:mb-8">
              <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0C1445] mb-4 sm:mb-6">
              AI that talks <span className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] bg-clip-text text-transparent">business</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
              AI Chroney helps brands boost conversions and automate customer support — all through intelligent, human-like conversations.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] hover:opacity-90 text-white text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Grow My Business
              </Button>
            </Link>
          </div>
        </section>

        {/* AI Assistant Demo Section */}
        <section className="py-16 sm:py-20 px-4 bg-purple-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1445] mb-3 sm:mb-4">
                See how <span className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] bg-clip-text text-transparent">Chroney</span> chats.
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Always here to help
              </p>
            </div>

            {/* Tabbed Chat Examples - Apple Inspired */}
            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mb-10 h-auto gap-3 bg-transparent p-0">
                <TabsTrigger 
                  value="sales" 
                  className="text-sm sm:text-base py-3.5 px-4 rounded-full font-semibold transition-all duration-300 data-[state=active]:shadow-xl data-[state=inactive]:bg-white/80 data-[state=inactive]:backdrop-blur-sm data-[state=inactive]:text-[#4a4a4a] data-[state=inactive]:hover:bg-white data-[state=inactive]:hover:shadow-md border border-transparent data-[state=inactive]:border-gray-200"
                  style={{
                    background: activeTab === 'sales' ? 'linear-gradient(135deg, #ffffff 0%, #fff5f9 50%, #f8f5ff 100%)' : undefined,
                    color: activeTab === 'sales' ? '#1d1d1f' : undefined
                  }}
                >
                  Sales
                </TabsTrigger>
                <TabsTrigger 
                  value="support" 
                  className="text-sm sm:text-base py-3.5 px-4 rounded-full font-semibold transition-all duration-300 data-[state=active]:shadow-xl data-[state=inactive]:bg-white/80 data-[state=inactive]:backdrop-blur-sm data-[state=inactive]:text-[#4a4a4a] data-[state=inactive]:hover:bg-white data-[state=inactive]:hover:shadow-md border border-transparent data-[state=inactive]:border-gray-200"
                  style={{
                    background: activeTab === 'support' ? 'linear-gradient(135deg, #ffffff 0%, #fff5f9 50%, #f8f5ff 100%)' : undefined,
                    color: activeTab === 'support' ? '#1d1d1f' : undefined
                  }}
                >
                  Support
                </TabsTrigger>
                <TabsTrigger 
                  value="lead" 
                  className="text-sm sm:text-base py-3.5 px-4 rounded-full font-semibold transition-all duration-300 data-[state=active]:shadow-xl data-[state=inactive]:bg-white/80 data-[state=inactive]:backdrop-blur-sm data-[state=inactive]:text-[#4a4a4a] data-[state=inactive]:hover:bg-white data-[state=inactive]:hover:shadow-md border border-transparent data-[state=inactive]:border-gray-200"
                  style={{
                    background: activeTab === 'lead' ? 'linear-gradient(135deg, #ffffff 0%, #fff5f9 50%, #f8f5ff 100%)' : undefined,
                    color: activeTab === 'lead' ? '#1d1d1f' : undefined
                  }}
                >
                  Lead Capture
                </TabsTrigger>
                <TabsTrigger 
                  value="faq" 
                  className="text-sm sm:text-base py-3.5 px-4 rounded-full font-semibold transition-all duration-300 data-[state=active]:shadow-xl data-[state=inactive]:bg-white/80 data-[state=inactive]:backdrop-blur-sm data-[state=inactive]:text-[#4a4a4a] data-[state=inactive]:hover:bg-white data-[state=inactive]:hover:shadow-md border border-transparent data-[state=inactive]:border-gray-200"
                  style={{
                    background: activeTab === 'faq' ? 'linear-gradient(135deg, #ffffff 0%, #fff5f9 50%, #f8f5ff 100%)' : undefined,
                    color: activeTab === 'faq' ? '#1d1d1f' : undefined
                  }}
                >
                  FAQ
                </TabsTrigger>
                <TabsTrigger 
                  value="upsell" 
                  className="text-sm sm:text-base py-3.5 px-4 rounded-full font-semibold transition-all duration-300 data-[state=active]:shadow-xl data-[state=inactive]:bg-white/80 data-[state=inactive]:backdrop-blur-sm data-[state=inactive]:text-[#4a4a4a] data-[state=inactive]:hover:bg-white data-[state=inactive]:hover:shadow-md border border-transparent data-[state=inactive]:border-gray-200"
                  style={{
                    background: activeTab === 'upsell' ? 'linear-gradient(135deg, #ffffff 0%, #fff5f9 50%, #f8f5ff 100%)' : undefined,
                    color: activeTab === 'upsell' ? '#1d1d1f' : undefined
                  }}
                >
                  Upsell
                </TabsTrigger>
              </TabsList>

              {/* Sales Example */}
              <TabsContent value="sales">
                <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 border border-gray-100 min-h-[350px] sm:min-h-[380px]">
                  <div className="space-y-6">
                    <div className="flex justify-end">
                      <div className="max-w-[80%] bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-3xl rounded-tr-lg px-6 py-4 shadow-md">
                        <p className="text-sm sm:text-base">Do you have Nike Air Max 90 in stock?</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#E95C7B] to-[#9333EA] flex items-center justify-center shadow-md">
                          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-[#0C1445] text-sm sm:text-base">Chroney</span>
                        </div>
                        <div className="bg-gray-50 rounded-3xl rounded-tl-lg px-6 py-4 shadow-sm">
                          <div className="flex gap-4 items-start">
                            <img 
                              src={nikeAirMaxImage} 
                              alt="Nike Air Max 90" 
                              className="rounded-2xl max-w-[120px] shadow-md flex-shrink-0"
                            />
                            <div className="flex-1 flex flex-col gap-3">
                              <SequentialTypingText texts={[
                                "Yes! Nike Air Max 90 is available in sizes 7–11.",
                                "Would you like to see the color options or add it to your cart?"
                              ]} />
                              <motion.button
                                className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] text-white text-sm font-semibold px-4 py-2 rounded-xl hover:opacity-90 transition-opacity shadow-md self-start"
                                initial={{ scale: 1 }}
                                animate={{
                                  scale: [1, 0.95, 1],
                                }}
                                transition={{
                                  duration: 0.3,
                                  repeat: Infinity,
                                  repeatDelay: 3,
                                  delay: 2
                                }}
                              >
                                Add to cart
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Support Example */}
              <TabsContent value="support">
                <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 border border-gray-100 min-h-[350px] sm:min-h-[380px]">
                  <div className="space-y-6">
                    <div className="flex justify-end">
                      <div className="max-w-[80%] bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-3xl rounded-tr-lg px-6 py-4 shadow-md">
                        <p className="text-sm sm:text-base">Where's my recent order?</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#E95C7B] to-[#9333EA] flex items-center justify-center shadow-md">
                          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-[#0C1445] text-sm sm:text-base">Chroney</span>
                        </div>
                        <div className="bg-gray-50 rounded-3xl rounded-tl-lg px-6 py-4 shadow-sm">
                          <SequentialTypingText texts={[
                            "I can help with that.",
                            "Please share your order ID, or check your order status here."
                          ]} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Lead Capture Example */}
              <TabsContent value="lead">
                <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 border border-gray-100 min-h-[350px] sm:min-h-[380px]">
                  <div className="space-y-6">
                    <div className="flex justify-end">
                      <div className="max-w-[80%] bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-3xl rounded-tr-lg px-6 py-4 shadow-md">
                        <p className="text-sm sm:text-base">I'm interested in adding this chatbot to my website.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#E95C7B] to-[#9333EA] flex items-center justify-center shadow-md">
                          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-[#0C1445] text-sm sm:text-base">Chroney</span>
                        </div>
                        <div className="bg-gray-50 rounded-3xl rounded-tl-lg px-6 py-4 shadow-sm">
                          <SequentialTypingText texts={[
                            "That's great! Could you share your email or contact number so our team can help you set up Chroney?"
                          ]} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* FAQ Example */}
              <TabsContent value="faq">
                <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 border border-gray-100 min-h-[350px] sm:min-h-[380px]">
                  <div className="space-y-6">
                    <div className="flex justify-end">
                      <div className="max-w-[80%] bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-3xl rounded-tr-lg px-6 py-4 shadow-md">
                        <p className="text-sm sm:text-base">What can Chroney do for my business?</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#E95C7B] to-[#9333EA] flex items-center justify-center shadow-md">
                          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-[#0C1445] text-sm sm:text-base">Chroney</span>
                        </div>
                        <div className="bg-gray-50 rounded-3xl rounded-tl-lg px-6 py-4 shadow-sm">
                          <SequentialTypingText texts={[
                            "Chroney automates product inquiries, customer support, and lead capture — all through chat.",
                            "Want to see a quick demo of how it works?"
                          ]} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Upsell Example */}
              <TabsContent value="upsell">
                <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 border border-gray-100 min-h-[350px] sm:min-h-[380px]">
                  <div className="space-y-6">
                    <div className="flex justify-end">
                      <div className="max-w-[80%] bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-3xl rounded-tr-lg px-6 py-4 shadow-md">
                        <p className="text-sm sm:text-base">Tell me more about the React Infinity shoes.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#E95C7B] to-[#9333EA] flex items-center justify-center shadow-md">
                          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-[#0C1445] text-sm sm:text-base">Chroney</span>
                        </div>
                        <div className="bg-gray-50 rounded-3xl rounded-tl-lg px-6 py-4 shadow-sm">
                          <SequentialTypingText texts={[
                            "The Nike React Infinity features lightweight foam for extra comfort.",
                            "Customers who bought this also liked the Air Max 90. Want me to show it?"
                          ]} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-12 sm:py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <Card className="border-none shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-8 sm:p-10 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 mb-4 sm:mb-6">
                    <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0C1445] mb-3 sm:mb-4">Sell more via chat.</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Recommend products and close deals directly in the conversation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-8 sm:p-10 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 mb-4 sm:mb-6">
                    <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-purple-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0C1445] mb-3 sm:mb-4">Support instantly, 24/7.</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Answer questions and resolve issues anytime, without delays.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-8 sm:p-10 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 mb-4 sm:mb-6">
                    <Users className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0C1445] mb-3 sm:mb-4">Turn conversations into leads.</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Capture contact info and qualify prospects automatically.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Shopify Integration Section - Apple Inspired */}
        <section className="relative overflow-hidden bg-purple-50" style={{ padding: 'clamp(120px, 12vw, 160px) 1rem' }}>
          <div className="max-w-[960px] mx-auto text-center">
            {/* Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[clamp(2.5rem,5vw,3.5rem)] font-semibold text-[#1d1d1f] mb-6 tracking-tight leading-[1.1]"
              style={{ letterSpacing: '-0.01em' }}
            >
              Seamlessly integrated with <span className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] bg-clip-text text-transparent">Shopify</span>.
            </motion.h2>
            
            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[clamp(1.125rem,2vw,1.5rem)] font-normal text-[#6e6e73] mb-12 max-w-[720px] mx-auto leading-relaxed"
              style={{ letterSpacing: '0.02em' }}
            >
              Connect AI Chroney to Shopify — sync products, track orders, and chat with customers instantly.
            </motion.p>
            
            {/* Logo Connection Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex items-center justify-center gap-12 sm:gap-20 mb-16 mt-20"
            >
              {/* Shopify Logo */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="flex-shrink-0"
              >
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl backdrop-blur-xl bg-white/70 shadow-2xl flex items-center justify-center p-5 border border-white/20">
                  <img src={shopifyLogo} alt="Shopify" className="w-full h-full object-contain" />
                </div>
              </motion.div>
              
              {/* Connection Line with Shimmer */}
              <div className="flex items-center gap-3 relative">
                <motion.div 
                  className="w-16 sm:w-24 h-0.5 rounded-full overflow-hidden"
                  style={{ background: 'linear-gradient(90deg, #7A7AFF 0%, #4F4FFF 100%)' }}
                >
                  <motion.div
                    className="h-full w-full"
                    style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)' }}
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#7A7AFF]" />
                <motion.div 
                  className="w-16 sm:w-24 h-0.5 rounded-full overflow-hidden"
                  style={{ background: 'linear-gradient(90deg, #7A7AFF 0%, #4F4FFF 100%)' }}
                >
                  <motion.div
                    className="h-full w-full"
                    style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)' }}
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 3 }}
                  />
                </motion.div>
              </div>
              
              {/* Chroney Logo */}
              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                className="flex-shrink-0"
              >
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-[#E95C7B] to-[#9333EA] shadow-2xl flex items-center justify-center backdrop-blur-xl">
                  <Sparkles className="w-14 h-14 sm:w-18 sm:h-18 text-white" />
                </div>
              </motion.div>
            </motion.div>
            
            {/* Tagline */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base text-[#86868b] tracking-wide"
              style={{ letterSpacing: '0.04em' }}
            >
              Built for D2C brands. 100% Shopify compatible.
            </motion.p>
          </div>
        </section>

        <section className="py-16 sm:py-24 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1445] mb-6 sm:mb-8">
              Powered by <span className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] bg-clip-text text-transparent">Leading AI</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 sm:mb-12 max-w-3xl mx-auto">
              It supports all leading LLMs like OpenAI GPT, Claude, Gemini and Meta Llama
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-2">
                  GPT
                </div>
                <p className="text-xs sm:text-sm text-gray-600">OpenAI</p>
              </div>
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent mb-2">
                  Claude
                </div>
                <p className="text-xs sm:text-sm text-gray-600">Anthropic</p>
              </div>
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent mb-2">
                  Gemini
                </div>
                <p className="text-xs sm:text-sm text-gray-600">Google</p>
              </div>
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent mb-2">
                  Llama
                </div>
                <p className="text-xs sm:text-sm text-gray-600">Meta</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
