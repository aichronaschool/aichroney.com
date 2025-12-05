import { Sparkles } from "lucide-react";

export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} rounded-full bg-gradient-to-r from-[#E95C7B] to-[#9333EA] flex items-center justify-center`}>
      <Sparkles className="w-[60%] h-[60%] text-white" strokeWidth={2.5} />
    </div>
  );
}
