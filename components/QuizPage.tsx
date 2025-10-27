
import React from 'react';
import type { QuizQuestion } from '../types';

interface QuizPageProps {
  questions: QuizQuestion[];
  userAnswers: string[];
  onAnswerSelect: (questionIndex: number, answer: string) => void;
  onSubmitQuiz: () => void;
}

const QuizPage: React.FC<QuizPageProps> = ({ questions, userAnswers, onAnswerSelect, onSubmitQuiz }) => {
    const allAnswered = userAnswers.every(answer => answer !== '');

    return (
        <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-center mb-8">Quiz Time! 🧐</h2>
            <div className="space-y-8">
                {questions.map((q, index) => (
                    <div key={q.id} className="border border-slate-200 rounded-xl p-6 shadow-sm">
                        <p className="text-lg font-semibold mb-4">
                            <span className="text-indigo-600 font-bold mr-2">Q{q.id}.</span>
                            다음 빈칸에 들어갈 알맞은 말을 고르세요.
                        </p>
                        <p className="text-xl text-center bg-slate-100 p-4 rounded-md mb-6">
                            {q.sentence.split('______')[0]}
                            <span className="inline-block bg-slate-300 w-24 h-1 mx-2 align-middle"></span>
                            {q.sentence.split('______')[1]}
                        </p>
                        <div className="flex justify-center gap-4">
                            {q.options.map(option => (
                                <button
                                    key={option}
                                    onClick={() => onAnswerSelect(index, option)}
                                    className={`
                                        w-40 py-2 px-4 rounded-lg border-2 text-lg font-semibold transition-all duration-200
                                        ${userAnswers[index] === option 
                                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-md' 
                                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100 hover:border-slate-400'}
                                    `}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-10">
                <button
                    onClick={onSubmitQuiz}
                    disabled={!allAnswered}
                    className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg disabled:bg-slate-400 disabled:cursor-not-allowed disabled:scale-100"
                >
                    결과 확인하기
                </button>
                {!allAnswered && <p className="text-sm text-red-500 mt-2">모든 문제에 답해주세요!</p>}
            </div>
        </div>
    );
};

export default QuizPage;
