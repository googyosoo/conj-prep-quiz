export type Page = 'learning' | 'quiz' | 'results';

export interface QuizQuestion {
  id: number;
  sentence: string;
  options: string[];
  correctAnswer: string;
  correctAnswerType: '접속사' | '전치사' | '관계대명사' | '관계부사';
  explanation: string;
}