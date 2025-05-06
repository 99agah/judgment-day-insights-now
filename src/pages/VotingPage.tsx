
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { sampleSigns } from '@/data/signs';
import SignCard from '@/components/SignCard';
import { Sign } from '@/types';
import { Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const VotingPage = () => {
  const [signs, setSigns] = useState<Sign[]>(sampleSigns);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'major' | 'minor'>('all');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleVoteClick = (signId: string) => {
    setSigns(prevSigns => 
      prevSigns.map(sign => 
        sign.id === signId 
          ? { ...sign, votes: sign.votes + 1 } 
          : sign
      )
    );
    toast({
      title: "Vote Recorded",
      description: "Thank you for your contribution.",
    });
  };

  const handleDiscussClick = (signId: string) => {
    navigate(`/discussions?sign=${signId}`);
  };

  const filteredSigns = signs.filter(sign => {
    // Apply category filter
    if (activeCategory !== 'all' && sign.category !== activeCategory) {
      return false;
    }
    
    // Apply search filter
    if (searchQuery) {
      return sign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             sign.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
             sign.arabicTitle?.toLowerCase().includes(searchQuery.toLowerCase());
    }
    
    return true;
  });

  return (
    <div className="min-h-screen p-4 animate-page-transition pb-20 md:pb-4 md:pl-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Vote on Signs</h1>
        
        <div className="relative mb-6">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search signs..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
        
        <Tabs defaultValue="all" className="mb-6" onValueChange={(value) => setActiveCategory(value as 'all' | 'major' | 'minor')}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All Signs</TabsTrigger>
            <TabsTrigger value="major">Major Signs</TabsTrigger>
            <TabsTrigger value="minor">Minor Signs</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSigns.length > 0 ? (
            filteredSigns.map(sign => (
              <SignCard 
                key={sign.id} 
                sign={sign} 
                onVoteClick={handleVoteClick} 
                onDiscussClick={handleDiscussClick} 
              />
            ))
          ) : (
            <p className="col-span-full text-center py-10 text-muted-foreground">
              No signs found matching your search criteria.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VotingPage;
