
import React from 'react';
import ToolCard from './ToolCard';
import { FileCode, FileText, Plugin, Sun, SunMedium, Wrench } from 'lucide-react';

const OtherTools = () => {
  const tools = [
    {
      title: "Format Your Code",
      description: "A simple, elegant tool to format HTML, CSS, JavaScript and Python code",
      url: "https://codeformatter.pro/",
      icon: <FileCode className="h-5 w-5 text-legal-navy" />
    },
    {
      title: "AI-Powered Legal Document Generator",
      description: "Create professional legal agreements, contracts, and affidavits in minutes with our AI-powered document generator. Simple, accurate, and legally sound.",
      url: "https://docucreatorpro.online/",
      icon: <FileText className="h-5 w-5 text-legal-navy" />
    },
    {
      title: "Build WordPress Plugins with AI",
      description: "Create powerful WordPress plugins without writing a single line of code. Our AI-powered platform makes plugin development accessible to everyone.",
      url: "https://pluginpal.xyz/",
      icon: <Plugin className="h-5 w-5 text-legal-navy" />
    },
    {
      title: "AI Content for Small Businesses",
      description: "Generate social media captions, business bios, and festival content in multiple Indian languages with our AI-powered tools tailored for local businesses.",
      url: "https://desiaicontent.online/",
      icon: <Sun className="h-5 w-5 text-legal-navy" />
    },
    {
      title: "Solar Savings Calculator",
      description: "Calculate your return on investment for solar panel installation",
      url: "https://solarsavingscalculator.site/",
      icon: <SunMedium className="h-5 w-5 text-legal-navy" />
    },
    {
      title: "WordPress AI Fixer Buddy",
      description: "Instantly fix WordPress errors with AI-powered solutions",
      url: "https://www.wordpressaifixerbuddy.online/",
      icon: <Wrench className="h-5 w-5 text-legal-navy" />
    }
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-legal-navy mb-4">
            Other Tools You Might Like
          </h2>
          <p className="text-lg text-legal-gray max-w-3xl mx-auto">
            Explore our collection of AI-powered tools designed to make your work easier and more efficient
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <ToolCard 
              key={index}
              title={tool.title}
              description={tool.description}
              url={tool.url}
              icon={tool.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherTools;
