import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BASE_PRICE_INR = 4999;

const CURRENCIES = [
  { code: "INR", symbol: "₹", name: "Indian Rupee" },
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "AUD", symbol: "A$", name: "Australian Dollar" },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
  { code: "SGD", symbol: "S$", name: "Singapore Dollar" },
  { code: "AED", symbol: "AED", name: "UAE Dirham" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen" },
];

export default function Pricing() {
  const [selectedCurrency, setSelectedCurrency] = useState("INR");
  const [convertedPrice, setConvertedPrice] = useState(BASE_PRICE_INR);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const convertCurrency = async () => {
      if (selectedCurrency === "INR") {
        setConvertedPrice(BASE_PRICE_INR);
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.frankfurter.app/latest?amount=${BASE_PRICE_INR}&from=INR&to=${selectedCurrency}`
        );
        const data = await response.json();
        
        if (data.rates && data.rates[selectedCurrency]) {
          setConvertedPrice(Math.round(data.rates[selectedCurrency]));
        }
      } catch (error) {
        console.error("Currency conversion failed:", error);
        setConvertedPrice(BASE_PRICE_INR);
      } finally {
        setIsLoading(false);
      }
    };

    convertCurrency();
  }, [selectedCurrency]);

  const currentCurrency = CURRENCIES.find((c) => c.code === selectedCurrency);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0C1445] text-center mb-8">
              Pricing
            </h1>
            
            {/* Currency Selector */}
            <div className="flex justify-center mb-8">
              <div className="w-full max-w-xs">
                <label className="block text-sm font-medium text-gray-700 mb-2 text-center">
                  Select Currency
                </label>
                <Select value={selectedCurrency} onValueChange={setSelectedCurrency}>
                  <SelectTrigger className="w-full border-2 border-gray-200 hover:border-[#9333EA] transition-colors">
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    {CURRENCIES.map((currency) => (
                      <SelectItem key={currency.code} value={currency.code}>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{currency.symbol}</span>
                          <span>{currency.code}</span>
                          <span className="text-gray-500 text-sm">- {currency.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-center">
              <Card className="border-2 border-[#9333EA] hover:shadow-xl transition-all duration-300 relative overflow-hidden w-full max-w-md">
                <div className="absolute top-0 right-0 bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 rounded-bl-lg">
                  Popular
                </div>
                <CardContent className="p-8 sm:p-10">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0C1445] mb-2">Pro</h3>
                  <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">1 Business Account</p>
                  <div className="mb-6 sm:mb-8">
                    {isLoading ? (
                      <span className="text-4xl sm:text-5xl font-bold text-gray-400">
                        Loading...
                      </span>
                    ) : (
                      <>
                        <span className="text-4xl sm:text-5xl font-bold text-[#0C1445]">
                          {currentCurrency?.symbol}{convertedPrice.toLocaleString()}
                        </span>
                        <span className="text-gray-600 text-base sm:text-lg">/mo</span>
                      </>
                    )}
                  </div>
                  
                  <div className="mb-6 sm:mb-8 space-y-3">
                    <h4 className="text-sm font-semibold text-[#0C1445] mb-3">Core Features:</h4>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">AI-powered chatbot for sales & support</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">24/7 automated customer assistance</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Lead capture & qualification</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Customizable widget design & branding</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Easy website integration</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Analytics & conversation insights</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] hover:opacity-90 text-white py-5 sm:py-6 rounded-full text-sm sm:text-base"
                  >
                    Start Free
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
