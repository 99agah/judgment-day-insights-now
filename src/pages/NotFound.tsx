
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background islamic-pattern p-4">
      <Card className="max-w-md w-full p-6 islamic-card glass-card hover-lift animate-pulse-soft">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gradient">404</h1>
          <p className="arabic-text text-xl mb-4">صفحة غير موجودة</p>
          <p className="text-xl text-muted-foreground mb-6">Page not found</p>
          <Button 
            onClick={() => navigate('/')} 
            className="bg-islamic-teal hover:bg-islamic-green text-white"
          >
            Return to Home
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;
