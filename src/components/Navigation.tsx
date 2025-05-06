
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon, Vote, MessageCircle, ChartBar } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Navigation = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);
  
  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  const navItems = [
    { path: "/", icon: HomeIcon, label: "Home" },
    { path: "/voting", icon: Vote, label: "Vote" },
    { path: "/discussions", icon: MessageCircle, label: "Discuss" },
    { path: "/analytics", icon: ChartBar, label: "Analytics" }
  ];
  
  return (
    <motion.div 
      className="fixed bottom-0 left-0 w-full border-t border-border bg-background p-2 md:top-0 md:left-0 md:h-full md:w-20 md:border-r md:border-t-0 md:p-4 z-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-around md:flex-col md:space-y-8 md:pt-8">
        <TooltipProvider>
          {navItems.map((item) => (
            <Tooltip key={item.path}>
              <TooltipTrigger asChild>
                <Link 
                  to={item.path} 
                  className={cn(
                    "nav-item group relative",
                    activePath === item.path && "active"
                  )}
                  onClick={() => setActivePath(item.path)}
                >
                  <motion.div
                    whileHover={{ scale: activePath === item.path ? 1 : 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon className={cn(
                      "h-6 w-6 transition-all duration-300",
                      activePath !== item.path && "group-hover:text-islamic-green"
                    )} />
                    
                    {activePath === item.path && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 h-1 w-1 rounded-full bg-white"
                        layoutId="nav-indicator"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        style={{ translateX: "-50%" }}
                      />
                    )}
                  </motion.div>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" align="center" className="bg-islamic-green text-white border-none">
                {item.label}
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </motion.div>
  );
};

export default Navigation;
