import React from 'react';
import ContrastIcon from './icons/ContrastIcon';
import ReasonIcon from './icons/ReasonIcon';
import TimeIcon from './icons/TimeIcon';

interface LearningPageProps {
  onStartQuiz: () => void;
}

const CategoryCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    conjunctions: string[];
    prepositions: string[];
}> = ({ icon, title, conjunctions, prepositions }) => (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 transition-shadow hover:shadow-md">
        <h4 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
            <span className="mr-3 text-cyan-500">{icon}</span>
            {title}
        </h4>
        <div className="grid grid-cols-2 gap-x-6">
            <div>
                <h5 className="font-semibold text-slate-700">접속사</h5>
                <p className="text-sm text-slate-500 mb-2">(뒤에 절: 주어+동사)</p>
                <ul className="space-y-1">
                    {conjunctions.map(item => (
                        <li key={item} className="text-slate-600 bg-cyan-50 border-l-2 border-cyan-400 px-3 py-1 rounded-r-md">{item}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h5 className="font-semibold text-slate-700">전치사</h5>
                <p className="text-sm text-slate-500 mb-2">(뒤에 명사/대명사)</p>
                <ul className="space-y-1">
                    {prepositions.map(item => (
                        <li key={item} className="text-slate-600 bg-purple-50 border-l-2 border-purple-400 px-3 py-1 rounded-r-md">{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);


const LearningPage: React.FC<LearningPageProps> = ({ onStartQuiz }) => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold text-center mb-2">접속사 vs 전치사 🧐</h2>
      <p className="text-center text-slate-600 mb-8">뒤에 어떤 말이 오는지에 따라 쓰임이 달라져요!</p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-xl mb-2">✨ 핵심 구분법</h3>
        <p><strong className="text-cyan-600">접속사</strong> 뒤에는 <strong className="underline">주어 + 동사 (절)</strong>이 오고,</p>
        <p><strong className="text-purple-600">전치사</strong> 뒤에는 <strong className="underline">명사 / 대명사 / 동명사 (구)</strong>가 와요.</p>
      </div>

      <div className="space-y-6">
        <CategoryCard 
            icon={<ContrastIcon className="w-8 h-8"/>}
            title="양보/대조 (~에도 불구하고)"
            conjunctions={['Although', 'Though', 'Even though']}
            prepositions={['Despite', 'In spite of']}
        />
        <CategoryCard 
            icon={<ReasonIcon className="w-8 h-8"/>}
            title="이유 (~때문에)"
            conjunctions={['Because', 'Since', 'As']}
            prepositions={['Because of', 'Due to', 'Owing to']}
        />
        <CategoryCard 
            icon={<TimeIcon className="w-8 h-8"/>}
            title="시간 (~하는 동안)"
            conjunctions={['While']}
            prepositions={['During', 'For']}
        />
      </div>

      <div className="mt-8 text-center bg-slate-50 p-6 rounded-lg border border-slate-200">
        <h3 className="font-bold text-xl mb-3">📝 예문으로 확인하기</h3>
        <p className="text-slate-700 mb-2">
            <strong className="text-cyan-600">Although</strong> it was raining, we went for a walk. (접속사 + 주어 + 동사)
        </p>
        <p className="text-slate-700">
            <strong className="text-purple-600">Despite</strong> the rain, we went for a walk. (전치사 + 명사)
        </p>
      </div>


      <div className="text-center mt-10">
        <button
          onClick={onStartQuiz}
          className="bg-purple-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-purple-700 transition-transform transform hover:scale-105 shadow-lg"
        >
          실력 점검 퀴즈 풀기 →
        </button>
      </div>
    </div>
  );
};

export default LearningPage;