
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { sampleSigns } from '@/data/signs';
import { Sign } from '@/types';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  PieChart, Pie, Cell, ResponsiveContainer, Legend 
} from 'recharts';

const AnalyticsPage = () => {
  const [majorSigns, setMajorSigns] = useState<Sign[]>([]);
  const [minorSigns, setMinorSigns] = useState<Sign[]>([]);
  const [mostVotedSigns, setMostVotedSigns] = useState<Sign[]>([]);
  const [chartData, setChartData] = useState<any[]>([]);
  const [pieData, setPieData] = useState<any[]>([]);
  
  useEffect(() => {
    // Separate signs by category
    const major = sampleSigns.filter(s => s.category === 'major');
    const minor = sampleSigns.filter(s => s.category === 'minor');
    
    // Sort by votes
    const sortedByVotes = [...sampleSigns].sort((a, b) => b.votes - a.votes);
    
    setMajorSigns(major);
    setMinorSigns(minor);
    setMostVotedSigns(sortedByVotes.slice(0, 5));
    
    // Prepare chart data
    const barData = sortedByVotes.slice(0, 8).map(sign => ({
      name: sign.title.length > 20 ? sign.title.substring(0, 20) + '...' : sign.title,
      votes: sign.votes,
      category: sign.category
    }));
    
    setChartData(barData);
    
    // Prepare pie chart data
    const occurredMajor = major.filter(s => s.hasOccurred).length;
    const notOccurredMajor = major.length - occurredMajor;
    const occurredMinor = minor.filter(s => s.hasOccurred).length;
    const notOccurredMinor = minor.length - occurredMinor;
    
    setPieData([
      { name: 'Major (Occurred)', value: occurredMajor },
      { name: 'Major (Not Occurred)', value: notOccurredMajor },
      { name: 'Minor (Occurred)', value: occurredMinor },
      { name: 'Minor (Not Occurred)', value: notOccurredMinor }
    ]);
  }, []);
  
  const COLORS = ['#D32F2F', '#F44336', '#0D5F45', '#7FB685'];
  
  return (
    <div className="min-h-screen p-4 animate-page-transition pb-20 md:pb-4 md:pl-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Signs Analytics</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Signs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{sampleSigns.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Major Signs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{majorSigns.length}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {majorSigns.filter(s => s.hasOccurred).length} manifesting
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Minor Signs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{minorSigns.length}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {minorSigns.filter(s => s.hasOccurred).length} manifesting
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Votes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {sampleSigns.reduce((sum, sign) => sum + sign.votes, 0)}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Voted Signs</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="name" 
                    angle={-45} 
                    textAnchor="end"
                    height={70}
                    interval={0}
                  />
                  <YAxis />
                  <Tooltip />
                  <Bar 
                    dataKey="votes" 
                    name="Votes"
                    fill={(entry) => entry.category === 'major' ? '#D32F2F' : '#0D5F45'}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Signs Status</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="mostVoted" className="mb-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="mostVoted">Most Voted Signs</TabsTrigger>
            <TabsTrigger value="progress">Completion Progress</TabsTrigger>
          </TabsList>
          
          <TabsContent value="mostVoted" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Top Signs by Community Votes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mostVotedSigns.map((sign, index) => (
                    <div key={sign.id} className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-islamic-green/10 flex items-center justify-center mr-3 text-islamic-green font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">{sign.title}</h3>
                            <p className="text-xs text-muted-foreground">{sign.reference}</p>
                          </div>
                          <Badge variant={sign.category === 'major' ? 'destructive' : 'secondary'}>
                            {sign.category}
                          </Badge>
                        </div>
                        <Progress value={sign.votes / 10} className="h-2 mt-2" />
                        <div className="flex justify-between text-xs mt-1">
                          <span>{sign.votes} votes</span>
                          {sign.hasOccurred && <span className="text-islamic-green">Manifesting</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="progress" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Major Signs Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Total: {majorSigns.length}</span>
                      <span>{(majorSigns.filter(s => s.hasOccurred).length / majorSigns.length * 100).toFixed(0)}% Complete</span>
                    </div>
                    <Progress 
                      value={majorSigns.filter(s => s.hasOccurred).length / majorSigns.length * 100} 
                      className="h-2" 
                    />
                  </div>
                  
                  <div className="space-y-3 mt-6">
                    {majorSigns.map(sign => (
                      <div key={sign.id} className="flex items-center">
                        <div className={`w-3 h-3 rounded-full ${sign.hasOccurred ? 'bg-islamic-green' : 'bg-muted'} mr-2`}></div>
                        <div className="text-sm">{sign.title}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Minor Signs Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Total: {minorSigns.length}</span>
                      <span>{(minorSigns.filter(s => s.hasOccurred).length / minorSigns.length * 100).toFixed(0)}% Complete</span>
                    </div>
                    <Progress 
                      value={minorSigns.filter(s => s.hasOccurred).length / minorSigns.length * 100} 
                      className="h-2" 
                    />
                  </div>
                  
                  <div className="space-y-3 mt-6">
                    {minorSigns.map(sign => (
                      <div key={sign.id} className="flex items-center">
                        <div className={`w-3 h-3 rounded-full ${sign.hasOccurred ? 'bg-islamic-green' : 'bg-muted'} mr-2`}></div>
                        <div className="text-sm">{sign.title}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AnalyticsPage;
