
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon, VoteIcon, MessageCircle, ChartBar } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Navigation = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);
  
  return (
    <div className="fixed bottom-0 left-0 w-full border-t border-border bg-background p-2 md:top-0 md:left-0 md:h-full md:w-20 md:border-r md:border-t-0 md:p-4 z-10">
      <TooltipProvider>
        <div className="flex justify-around md:flex-col md:space-y-8 md:pt-8">
          {/* Home */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link 
                to="/" 
                className={cn(
                  "nav-item",
                  activePath === "/" ? "active bg-islamic-teal" : ""
                )}
                onClick={() => setActivePath("/")}
              >
                <HomeIcon className="h-6 w-6" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" className="md:block hidden">
              Home
            </TooltipContent>
          </Tooltip>
          
          {/* Voting */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link 
                to="/voting" 
                className={cn(
                  "nav-item",
                  activePath === "/voting" ? "active bg-islamic-teal" : ""
                )}
                onClick={() => setActivePath("/voting")}
              >
                <VoteIcon className="h-6 w-6" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" className="md:block hidden">
              Voting
            </TooltipContent>
          </Tooltip>
          
          {/* Discussions */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link 
                to="/discussions" 
                className={cn(
                  "nav-item",
                  activePath === "/discussions" ? "active bg-islamic-teal" : ""
                )}
                onClick={() => setActivePath("/discussions")}
              >
                <MessageCircle className="h-6 w-6" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" className="md:block hidden">
              Discussions
            </TooltipContent>
          </Tooltip>
          
          {/* Analytics */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link 
                to="/analytics" 
                className={cn(
                  "nav-item",
                  activePath === "/analytics" ? "active bg-islamic-teal" : ""
                )}
                onClick={() => setActivePath("/analytics")}
              >
                <ChartBar className="h-6 w-6" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" className="md:block hidden">
              Analytics
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  );
};

export default Navigation;
