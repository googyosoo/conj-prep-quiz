export type Page = 'learning' | 'quiz' | 'results';

export interface QuizQuestion {
  id: number;
  sentence: string;
  options: string[];
  correctAnswer: string;
  correctAnswerType: '접속사' | '전치사';
  explanation: string;
}