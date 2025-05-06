
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Vote } from "lucide-react";
import { Sign } from '../types';
import { cn } from '@/lib/utils';

interface SignCardProps {
  sign: Sign;
  onVoteClick: (signId: string) => void;
  onDiscussClick: (signId: string) => void;
}

const SignCard = ({ sign, onVoteClick, onDiscussClick }: SignCardProps) => {
  const [voteCount, setVoteCount] = useState(sign.votes);
  const [isVoteAnimating, setIsVoteAnimating] = useState(false);
  
  const handleVoteClick = () => {
    onVoteClick(sign.id);
    setVoteCount(prevCount => prevCount + 1);
    setIsVoteAnimating(true);
    setTimeout(() => setIsVoteAnimating(false), 300);
  };

  return (
    <Card className={cn("islamic-card", "h-full flex flex-col")}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <Badge variant={sign.category === 'major' ? 'destructive' : 'secondary'} className="mb-2">
            {sign.category === 'major' ? 'Major Sign' : 'Minor Sign'}
          </Badge>
          {sign.hasOccurred && (
            <Badge variant="default" className="bg-islamic-green">
              Manifesting
            </Badge>
          )}
        </div>
        <CardTitle className="text-lg font-bold">{sign.title}</CardTitle>
        {sign.arabicTitle && (
          <div className="arabic-text text-lg mt-1 text-islamic-dark-blue dark:text-islamic-light-gold">
            {sign.arabicTitle}
          </div>
        )}
        <CardDescription className="text-xs mt-1">
          Reference: {sign.reference}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-sm">{sign.description}</p>
      </CardContent>
      
      <CardFooter className="pt-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm"
            className="flex items-center gap-1"
            onClick={handleVoteClick}
          >
            <Vote className="h-4 w-4 text-islamic-green" />
            <span>Vote</span>
          </Button>
          
          <span className={cn(
            "font-semibold",
            isVoteAnimating && "vote-count-animate"
          )}>
            {voteCount}
          </span>
        </div>
        
        <Button 
          variant="ghost" 
          size="sm"
          className="text-islamic-dark-blue hover:text-islamic-green dark:text-islamic-light-gold dark:hover:text-islamic-gold"
          onClick={() => onDiscussClick(sign.id)}
        >
          Discuss
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SignCard;
