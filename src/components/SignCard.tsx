
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Vote, MessageCircle } from "lucide-react";
import { Sign } from '../types';
import { cn } from '@/lib/utils';
import { motion } from "framer-motion";

interface SignCardProps {
  sign: Sign;
  onVoteClick: (signId: string) => void;
  onDiscussClick: (signId: string) => void;
}

const SignCard = ({ sign, onVoteClick, onDiscussClick }: SignCardProps) => {
  const [voteCount, setVoteCount] = useState(sign.votes);
  const [isVoteAnimating, setIsVoteAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const handleVoteClick = () => {
    onVoteClick(sign.id);
    setVoteCount(prevCount => prevCount + 1);
    setIsVoteAnimating(true);
    setTimeout(() => setIsVoteAnimating(false), 300);
  };

  return (
    <motion.div
      className="h-full"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className={cn("islamic-card", "h-full flex flex-col relative overflow-hidden transition-all duration-300", 
        isHovered && "shadow-md border-islamic-light-green/50"
      )}>
        {sign.hasOccurred && (
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-islamic-green"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}
        
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <Badge 
              variant={sign.category === 'major' ? 'destructive' : 'secondary'} 
              className={cn("mb-2 transition-all", 
                sign.category === 'major' ? "bg-red-600 hover:bg-red-700" : "bg-islamic-light-green hover:bg-islamic-light-green/90"
              )}
            >
              {sign.category === 'major' ? 'Major Sign' : 'Minor Sign'}
            </Badge>
            {sign.hasOccurred && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 10 }}
              >
                <Badge variant="default" className="bg-islamic-green">
                  Manifesting
                </Badge>
              </motion.div>
            )}
          </div>
          
          <CardTitle className="text-lg font-bold">{sign.title}</CardTitle>
          
          {sign.arabicTitle && (
            <motion.div 
              className="arabic-text text-lg mt-1 text-islamic-dark-blue dark:text-islamic-light-gold"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {sign.arabicTitle}
            </motion.div>
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
            <motion.div whileTap={{ scale: 0.9 }}>
              <Button 
                variant="outline" 
                size="sm"
                className={cn(
                  "flex items-center gap-1 transition-colors duration-300",
                  isHovered && "border-islamic-green text-islamic-green"
                )}
                onClick={handleVoteClick}
              >
                <Vote className="h-4 w-4 text-islamic-green" />
                <span>Vote</span>
              </Button>
            </motion.div>
            
            <motion.span 
              className={cn(
                "font-semibold",
                isVoteAnimating && "vote-count-animate"
              )}
              animate={isVoteAnimating ? { scale: [1, 1.5, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              {voteCount}
            </motion.span>
          </div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="ghost" 
              size="sm"
              className={cn(
                "text-islamic-dark-blue hover:text-islamic-green dark:text-islamic-light-gold dark:hover:text-islamic-gold transition-colors duration-300",
                isHovered && "bg-muted"
              )}
              onClick={() => onDiscussClick(sign.id)}
            >
              <MessageCircle className="h-4 w-4 mr-1" />
              Discuss
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default SignCard;
