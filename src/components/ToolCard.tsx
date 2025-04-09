
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface ToolCardProps {
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
}

const ToolCard = ({ title, description, url, icon }: ToolCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <div className="bg-legal-light p-2 rounded-full">
            {icon}
          </div>
          <CardTitle className="text-lg font-serif">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-legal-gray">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          className="w-full border-legal-navy text-legal-navy hover:bg-legal-light"
          onClick={() => window.open(url, '_blank')}
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          Visit Tool
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ToolCard;
