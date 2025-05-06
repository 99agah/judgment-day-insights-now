
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChevronUp, ChevronDown, MessageCircle, ArrowLeft } from "lucide-react";
import { useToast } from '@/hooks/use-toast';
import { sampleSigns } from '@/data/signs';
import { Sign, Comment as CommentType } from '@/types';

const DiscussionsPage = () => {
  const [searchParams] = useSearchParams();
  const signId = searchParams.get('sign');
  const [sign, setSign] = useState<Sign | undefined>();
  const [comments, setComments] = useState<CommentType[]>([]);
  const [newComment, setNewComment] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    if (signId) {
      const foundSign = sampleSigns.find(s => s.id === signId);
      setSign(foundSign);
      if (foundSign) {
        setComments(foundSign.comments);
      }
    }
  }, [signId]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    const newCommentObj: CommentType = {
      id: `c${Date.now()}`,
      userId: 'current-user',
      username: 'you',
      text: newComment,
      date: new Date().toISOString().split('T')[0],
      votes: 0,
      replies: []
    };
    
    setComments(prev => [newCommentObj, ...prev]);
    setNewComment('');
    toast({
      title: "Comment Posted",
      description: "Your comment has been added to the discussion.",
    });
  };

  const handleVote = (commentId: string, direction: 'up' | 'down') => {
    setComments(prev => 
      prev.map(comment => 
        comment.id === commentId 
          ? { ...comment, votes: comment.votes + (direction === 'up' ? 1 : -1) } 
          : comment
      )
    );
  };

  return (
    <div className="min-h-screen p-4 animate-page-transition pb-20 md:pb-4 md:pl-24">
      <div className="max-w-3xl mx-auto">
        {sign ? (
          <>
            <div className="mb-6">
              <Button variant="ghost" className="mb-2" onClick={() => history.back()}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              
              <Card className="islamic-card mb-6">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant={sign.category === 'major' ? 'destructive' : 'secondary'}>
                      {sign.category === 'major' ? 'Major Sign' : 'Minor Sign'}
                    </Badge>
                    {sign.hasOccurred && (
                      <Badge variant="default" className="bg-islamic-green">
                        Manifesting
                      </Badge>
                    )}
                  </div>
                  <CardTitle>{sign.title}</CardTitle>
                  {sign.arabicTitle && (
                    <div className="arabic-text text-lg mt-1">
                      {sign.arabicTitle}
                    </div>
                  )}
                  <CardDescription>
                    Reference: {sign.reference}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{sign.description}</p>
                </CardContent>
              </Card>
              
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <MessageCircle className="mr-2 h-5 w-5" /> 
                Discussion
              </h2>
              
              <Card className="mb-6">
                <CardContent className="pt-6">
                  <form onSubmit={handleCommentSubmit}>
                    <Textarea 
                      placeholder="Share your thoughts or evidence about this sign..." 
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="mb-3"
                    />
                    <div className="flex justify-end">
                      <Button type="submit">Post Comment</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
              
              {comments.length > 0 ? (
                comments.map(comment => (
                  <Card key={comment.id} className="mb-4">
                    <CardHeader className="pb-2">
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarFallback>{comment.username[0].toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{comment.username}</p>
                          <p className="text-xs text-muted-foreground">{comment.date}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p>{comment.text}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center pt-0">
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" onClick={() => handleVote(comment.id, 'up')}>
                          <ChevronUp className="h-4 w-4" />
                        </Button>
                        <span>{comment.votes}</span>
                        <Button variant="ghost" size="sm" onClick={() => handleVote(comment.id, 'down')}>
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm">Reply</Button>
                    </CardFooter>
                    
                    {comment.replies.length > 0 && (
                      <div className="ml-8 mr-4 mb-4 border-l-2 pl-4 border-muted">
                        {comment.replies.map(reply => (
                          <div key={reply.id} className="mt-3">
                            <div className="flex items-center">
                              <Avatar className="h-6 w-6 mr-2">
                                <AvatarFallback>{reply.username[0].toUpperCase()}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm font-medium">{reply.username}</p>
                                <p className="text-xs text-muted-foreground">{reply.date}</p>
                              </div>
                            </div>
                            <p className="mt-1 text-sm">{reply.text}</p>
                            <div className="flex items-center mt-1 space-x-1">
                              <Button variant="ghost" size="sm" className="h-6 px-2">
                                <ChevronUp className="h-3 w-3" />
                              </Button>
                              <span className="text-xs">{reply.votes}</span>
                              <Button variant="ghost" size="sm" className="h-6 px-2">
                                <ChevronDown className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </Card>
                ))
              ) : (
                <div className="text-center py-10 text-muted-foreground">
                  No comments yet. Be the first to start the discussion!
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="text-center py-10">
            <h2 className="text-xl font-semibold mb-2">Select a Sign</h2>
            <p className="text-muted-foreground">Please select a sign from the voting page to join or view discussions.</p>
            <Button className="mt-4" onClick={() => window.location.href = '/voting'}>
              Go to Voting
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscussionsPage;
