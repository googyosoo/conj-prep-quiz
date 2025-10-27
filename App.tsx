
import React, { useState, useCallback } from 'react';
import type { Page, QuizQuestion } from './types';
import { QUIZ_QUESTIONS } from './constants';
import LearningPage from './components/LearningPage';
import QuizPage from './components/QuizPage';
import ResultsPage from './components/ResultsPage';

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('learning');
  const [userAnswers, setUserAnswers] = useState<string[]>(
    new Array(QUIZ_QUESTIONS.length).fill('')
  );

  const handleStartQuiz = useCallback(() => {
    setPage('quiz');
  }, []);

  const handleSubmitQuiz = useCallback(() => {
    setPage('results');
  }, []);

  const handleRestart = useCallback(() => {
    setUserAnswers(new Array(QUIZ_QUESTIONS.length).fill(''));
    setPage('learning');
  }, []);

  const handleAnswerSelect = useCallback((questionIndex: number, answer: string) => {
    setUserAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers];
      newAnswers[questionIndex] = answer;
      return newAnswers;
    });
  }, []);

  const renderPage = () => {
    switch (page) {
      case 'learning':
        return <LearningPage onStartQuiz={handleStartQuiz} />;
      case 'quiz':
        return (
          <QuizPage
            questions={QUIZ_QUESTIONS}
            userAnswers={userAnswers}
            onAnswerSelect={handleAnswerSelect}
            onSubmitQuiz={handleSubmitQuiz}
          />
        );
      case 'results':
        return (
          <ResultsPage
            questions={QUIZ_QUESTIONS}
            userAnswers={userAnswers}
            onRestart={handleRestart}
          />
        );
      default:
        return <LearningPage onStartQuiz={handleStartQuiz} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
                접속사 vs 전치사 마스터
            </h1>
            <p className="text-slate-600 mt-2">고1 필수 영문법 정복하기</p>
        </header>
        <main className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
            {renderPage()}
        </main>
        <footer className="text-center mt-8 text-sm text-slate-500">
            <p>&copy; 2024 English Grammar Master. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
