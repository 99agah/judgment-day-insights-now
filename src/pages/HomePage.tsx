
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Book } from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center islamic-pattern p-4 animate-page-transition">
      <Card className="max-w-lg w-full mx-auto islamic-card hover-lift relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-islamic-teal via-islamic-green to-islamic-gold"></div>
        <CardContent className="pt-8 pb-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 text-gradient">Signs of the Day of Judgment</h1>
            <p className="arabic-text text-xl mb-4 text-islamic-indigo dark:text-islamic-light-gold">علامات يوم القيامة</p>
            <p className="text-sm text-muted-foreground mb-6">
              Explore, discuss, and track the signs foretold by Islamic tradition that precede the Day of Judgment.
            </p>
            
            <div className="quran-text text-center my-6 text-lg px-4 py-3 bg-muted rounded-lg animate-pulse-soft">
              "Do the people think that they will be left to say, 'We believe' and they will not be tried?" <span className="block mt-1 text-sm text-muted-foreground">— Surah Al-'Ankabut 29:2</span>
            </div>
            
            <div className="flex flex-col space-y-3 mt-8">
              <Button 
                onClick={() => navigate('/voting')} 
                className="bg-islamic-teal hover:bg-islamic-green text-white"
              >
                Explore Signs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/analytics')}
                className="border-islamic-teal/50 hover:bg-islamic-teal/10"
              >
                View Analytics
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-8 text-center max-w-md">
        <h2 className="font-semibold text-lg mb-3 flex items-center justify-center">
          <Book className="mr-2 h-4 w-4 text-islamic-coral" />
          <span>Hadith of the Day</span>
        </h2>
        <Card className="p-4 islamic-card glass-card animate-float">
          <p className="text-sm italic">
            "When honesty is lost, then wait for the Hour (Doomsday)." It was asked, "How will honesty be lost, O Allah's Apostle?" He said, "When authority is given to those who do not deserve it, then wait for the Hour."
          </p>
          <p className="text-xs mt-2 text-muted-foreground">— Sahih Al-Bukhari</p>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
