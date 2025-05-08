
import React from "react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/5ec673fe-c472-420a-8384-5382b2aac627.png" 
        alt="PRIMUS ONE Logo" 
        className="h-10 w-10" 
      />
      <div className="ml-2">
        <h1 className="font-semibold text-lg text-primus-brown-dark leading-none">PRIMUS ONE</h1>
        <p className="text-xs text-primus-brown">Entity Resolution</p>
      </div>
    </div>
  );
}
