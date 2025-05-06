
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Book, TrendingUp, Vote } from "lucide-react";
import { motion } from "framer-motion";

const HomePage = () => {
  const navigate = useNavigate();
  const [currentHadith, setCurrentHadith] = useState(0);
  const [isCardHovered, setIsCardHovered] = useState(false);

  const hadiths = [
    {
      text: "When honesty is lost, then wait for the Hour (Doomsday). It was asked, How will honesty be lost, O Allah's Apostle? He said, When authority is given to those who do not deserve it, then wait for the Hour.",
      source: "Sahih Al-Bukhari"
    },
    {
      text: "The Hour will not be established until the fire comes out from the land of Hijaz that illuminates the necks of camels in Busra.",
      source: "Sahih Al-Bukhari"
    },
    {
      text: "The Hour will not begin until knowledge is taken away, earthquakes increase, time passes quickly, trials appear, and killing increases.",
      source: "Sahih Al-Bukhari"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHadith(prev => (prev + 1) % hadiths.length);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    normal: { scale: 1, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" },
    hover: { scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center islamic-pattern p-4 animate-page-transition">
      <motion.div 
        className="w-full max-w-lg mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <motion.div
            className="max-w-lg w-full mx-auto islamic-card relative overflow-hidden"
            variants={cardVariants}
            initial="normal"
            animate={isCardHovered ? "hover" : "normal"}
            onHoverStart={() => setIsCardHovered(true)}
            onHoverEnd={() => setIsCardHovered(false)}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-islamic-green via-islamic-light-green to-islamic-gold"></div>
            <CardContent className="pt-8 pb-6">
              <div className="text-center mb-8">
                <motion.h1 
                  className="text-3xl font-bold mb-2 text-islamic-green"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Signs of the Day of Judgment
                </motion.h1>
                <motion.p 
                  className="arabic-text text-xl mb-4 text-islamic-dark-blue"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  علامات يوم القيامة
                </motion.p>
                <motion.p 
                  className="text-sm text-muted-foreground mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  Explore, discuss, and track the signs foretold by Islamic tradition that precede the Day of Judgment.
                </motion.p>
                
                <motion.div 
                  className="quran-text text-center my-6 text-lg px-4 py-3 bg-muted rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  "Do the people think that they will be left to say, 'We believe' and they will not be tried?" <span className="block mt-1 text-sm text-muted-foreground">— Surah Al-'Ankabut 29:2</span>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col space-y-3 mt-8"
                  variants={containerVariants}
                >
                  <motion.div variants={itemVariants}>
                    <Button 
                      onClick={() => navigate('/voting')} 
                      className="w-full bg-islamic-green hover:bg-islamic-green/90 text-white transition-all duration-300 hover:translate-x-1"
                    >
                      <Vote className="mr-2 h-4 w-4" />
                      Explore Signs <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="flex space-x-2 w-full">
                    <Button 
                      variant="outline" 
                      onClick={() => navigate('/discussions')}
                      className="flex-1 transition-all duration-300 hover:bg-islamic-light-green/10"
                    >
                      <Book className="mr-2 h-4 w-4" />
                      Discussions
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      onClick={() => navigate('/analytics')}
                      className="flex-1 transition-all duration-300 hover:bg-islamic-gold/10"
                    >
                      <TrendingUp className="mr-2 h-4 w-4" />
                      Analytics
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </CardContent>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-8 text-center max-w-md mx-auto"
          variants={itemVariants}
        >
          <h2 className="font-semibold text-lg mb-3">Hadith of the Day</h2>
          <motion.div
            key={currentHadith}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="islamic-card"
          >
            <Card className="p-4">
              <p className="text-sm italic">"{hadiths[currentHadith].text}"</p>
              <p className="text-xs mt-2 text-muted-foreground">— {hadiths[currentHadith].source}</p>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;
