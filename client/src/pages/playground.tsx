import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle, Sparkles, Send } from "lucide-react";

export default function Playground() {
  const [startColor, setStartColor] = useState("#221c1b");
  const [endColor, setEndColor] = useState("#3b82f6");
  const [headerText, setHeaderText] = useState("Chroney");

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Widget Playground – Customize Your AI Chroney Chatbot Design</title>
        <meta name="description" content="Try AI Chroney's interactive playground. Customize chat widget colors, gradient styles, and header text. See live preview of how your chatbot will look on your website." />
        <link rel="canonical" href="https://aichroney.com/playground" />
      </Helmet>
      <Navigation />
      <main className="flex-1 py-12 px-6 sm:px-8 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <MessageCircle className="w-6 h-6 text-primary" />
              <h1 className="text-xl sm:text-2xl font-bold text-[#0C1445]">Widget Preview</h1>
            </div>
            <p className="text-gray-600">See how your chatbot will look on your website - try different colors!</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Customization Panel */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-4">
                  <h2 className="text-base font-bold text-[#0C1445] mb-3">Chat Header Text</h2>
                  <Input
                    type="text"
                    value={headerText}
                    onChange={(e) => setHeaderText(e.target.value.slice(0, 30))}
                    placeholder="Your company name"
                    maxLength={30}
                    className="mb-2"
                  />
                  <p className="text-xs text-gray-500">{headerText.length}/30 characters - This appears at the top of the chat window</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h2 className="text-base font-bold text-[#0C1445] mb-4">Gradient Colors</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="startColor" className="text-sm font-medium text-gray-700 mb-2 block">
                        Start Color
                      </Label>
                      <div className="flex gap-3 items-center">
                        <div 
                          className="w-14 h-14 rounded-lg border-2 border-gray-200 cursor-pointer hover:border-gray-400 transition-colors"
                          style={{ backgroundColor: startColor }}
                          onClick={() => document.getElementById('startColor')?.click()}
                        />
                        <Input
                          id="startColor"
                          type="color"
                          value={startColor}
                          onChange={(e) => setStartColor(e.target.value)}
                          className="w-0 h-0 invisible absolute"
                        />
                        <Input
                          type="text"
                          value={startColor}
                          onChange={(e) => setStartColor(e.target.value)}
                          className="flex-1 font-mono"
                          placeholder="#221c1b"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="endColor" className="text-sm font-medium text-gray-700 mb-2 block">
                        End Color
                      </Label>
                      <div className="flex gap-3 items-center">
                        <div 
                          className="w-14 h-14 rounded-lg border-2 border-gray-200 cursor-pointer hover:border-gray-400 transition-colors"
                          style={{ backgroundColor: endColor }}
                          onClick={() => document.getElementById('endColor')?.click()}
                        />
                        <Input
                          id="endColor"
                          type="color"
                          value={endColor}
                          onChange={(e) => setEndColor(e.target.value)}
                          className="w-0 h-0 invisible absolute"
                        />
                        <Input
                          type="text"
                          value={endColor}
                          onChange={(e) => setEndColor(e.target.value)}
                          className="flex-1 font-mono"
                          placeholder="#3b82f6"
                        />
                      </div>
                    </div>

                    <div 
                      className="h-16 rounded-lg"
                      style={{
                        background: `linear-gradient(to right, ${startColor}, ${endColor})`
                      }}
                    />
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Create a beautiful gradient that matches your brand
                    </p>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Preview Panel */}
            <div className="lg:sticky lg:top-24 h-fit">
              <Card>
                <CardContent className="p-4">
                  <h2 className="text-lg font-bold text-[#0C1445] mb-4">Live Preview</h2>
                  
                  <div className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
                    {/* Chat Header */}
                    <div 
                      className="p-4 text-white"
                      style={{
                        background: `linear-gradient(to right, ${startColor}, ${endColor})`
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-bold text-lg">{headerText}</div>
                          <div className="text-xs flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            Online
                          </div>
                        </div>
                        <div className="text-white rounded-lg p-1">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="p-4 h-80 overflow-y-auto bg-white">
                      <div className="flex gap-2 mb-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                          <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-gray-100 rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                          <p className="text-sm">Hi! How can I help you today?</p>
                          <p className="text-xs text-gray-500 mt-1">Just now</p>
                        </div>
                      </div>

                      <div className="flex gap-2 mb-4 justify-end">
                        <div 
                          className="text-white rounded-2xl rounded-tr-none p-3 max-w-[80%]"
                          style={{
                            background: `linear-gradient(to right, ${startColor}, ${endColor})`
                          }}
                        >
                          <p className="text-sm">Tell me about your products</p>
                          <p className="text-xs opacity-75 mt-1">Just now</p>
                        </div>
                      </div>
                    </div>

                    {/* Chat Input */}
                    <div className="p-4 border-t border-gray-200 bg-white">
                      <div className="flex gap-2 items-center">
                        <input
                          type="text"
                          placeholder="Type a message..."
                          className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-gray-400"
                        />
                        <button 
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0"
                          style={{
                            background: `linear-gradient(to right, ${startColor}, ${endColor})`
                          }}
                        >
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
