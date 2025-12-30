export type Language = 'en' | 'ko' | 'ja' | 'zh';

export interface Choreographer {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}

export interface ClassSession {
  id: number;
  time: string;
  instructor: string;
  level: string;
  style: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
