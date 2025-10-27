
import React from 'react';
import type { QuizQuestion } from '../types';
import CheckIcon from './icons/CheckIcon';
import XIcon from './icons/XIcon';

interface ResultsPageProps {
  questions: QuizQuestion[];
  userAnswers: string[];
  onRestart: () => void;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ questions, userAnswers, onRestart }) => {
  const score = userAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length;
  const totalQuestions = questions.length;

  const getScoreMessage = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage === 100) return "완벽해요! 당신은 문법 마스터! 🎓";
    if (percentage >= 70) return "훌륭해요! 조금만 더 힘내요! 💪";
    if (percentage >= 50) return "잘했어요! 복습하면 더 좋아질 거예요. 👍";
    return "괜찮아요! 다시 한번 개념을 복습해봐요. 📖";
  };
  
  return (
    <div className="animate-fade-in">
        <div className="text-center border-b border-slate-200 pb-8 mb-8">
            <h2 className="text-3xl font-bold mb-2">퀴즈 결과</h2>
            <p className="text-5xl font-extrabold text-indigo-600 my-4">{score} / {totalQuestions}</p>
            <p className="text-xl text-slate-600">{getScoreMessage(score, totalQuestions)}</p>
        </div>

        <div className="space-y-6">
            {questions.map((q, index) => {
                const isCorrect = userAnswers[index] === q.correctAnswer;
                return (
                    <div key={q.id} className={`border-l-4 p-5 rounded-r-lg ${isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}>
                        <p className="text-lg font-semibold mb-2 text-slate-800">
                           <span className="font-bold mr-2">Q{q.id}.</span> {q.sentence.replace('______', `[ ${q.correctAnswer} ]`)}
                        </p>
                        <div className="flex items-center mb-3">
                            {isCorrect ? (
                                <div className="flex items-center text-green-700">
                                    <CheckIcon className="w-5 h-5 mr-2" />
                                    <span>정답입니다! 선택: {userAnswers[index]}</span>
                                </div>
                            ) : (
                                <div className="flex items-center text-red-700">
                                    <XIcon className="w-5 h-5 mr-2" />
                                    <span>오답입니다. 선택: {userAnswers[index]} (정답: {q.correctAnswer})</span>
                                </div>
                            )}
                        </div>
                        <div className="bg-white p-4 rounded-md border border-slate-200">
                           <p className="font-semibold text-blue-800 mb-1">해설 ({q.correctAnswerType}):</p>
                           <p className="text-slate-700 text-sm">{q.explanation}</p>
                        </div>
                    </div>
                );
            })}
        </div>

        <div className="text-center mt-10">
            <button
                onClick={onRestart}
                className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 shadow-lg"
            >
                처음으로 돌아가기
            </button>
        </div>
    </div>
  );
};

export default ResultsPage;
