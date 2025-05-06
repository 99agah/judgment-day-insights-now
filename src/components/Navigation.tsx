
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon, VoteIcon, MessageCircle, ChartBar } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);
  
  return (
    <div className="fixed bottom-0 left-0 w-full border-t border-border bg-background p-2 md:top-0 md:left-0 md:h-full md:w-20 md:border-r md:border-t-0 md:p-4 z-10">
      <div className="flex justify-around md:flex-col md:space-y-8 md:pt-8">
        {/* Home */}
        <Link 
          to="/" 
          className={cn(
            "nav-item",
            activePath === "/" && "active"
          )}
          onClick={() => setActivePath("/")}
        >
          <HomeIcon className="h-6 w-6" />
        </Link>
        
        {/* Voting */}
        <Link 
          to="/voting" 
          className={cn(
            "nav-item",
            activePath === "/voting" && "active"
          )}
          onClick={() => setActivePath("/voting")}
        >
          <VoteIcon className="h-6 w-6" />
        </Link>
        
        {/* Discussions */}
        <Link 
          to="/discussions" 
          className={cn(
            "nav-item",
            activePath === "/discussions" && "active"
          )}
          onClick={() => setActivePath("/discussions")}
        >
          <MessageCircle className="h-6 w-6" />
        </Link>
        
        {/* Analytics */}
        <Link 
          to="/analytics" 
          className={cn(
            "nav-item",
            activePath === "/analytics" && "active"
          )}
          onClick={() => setActivePath("/analytics")}
        >
          <ChartBar className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
