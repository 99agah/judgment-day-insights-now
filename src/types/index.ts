
export type SignCategory = 'major' | 'minor';

export interface Sign {
  id: string;
  title: string;
  arabicTitle?: string;
  description: string;
  category: SignCategory;
  reference: string;
  votes: number;
  verifications: Verification[];
  comments: Comment[];
  hasOccurred: boolean;
}

export interface Verification {
  id: string;
  userId: string;
  username: string;
  text: string;
  link?: string;
  date: string;
  votes: number;
}

export interface Comment {
  id: string;
  userId: string;
  username: string;
  text: string;
  date: string;
  votes: number;
  replies: Reply[];
}

export interface Reply {
  id: string;
  userId: string;
  username: string;
  text: string;
  date: string;
  votes: number;
}

export interface User {
  id: string;
  username: string;
  votedSigns: string[];
  commentedSigns: string[];
  badges: Badge[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
}
