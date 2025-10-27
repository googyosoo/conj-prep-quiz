import React from 'react';
import ContrastIcon from './icons/ContrastIcon';
import ReasonIcon from './icons/ReasonIcon';
import TimeIcon from './icons/TimeIcon';
import ConditionIcon from './icons/ConditionIcon';

interface LearningPageProps {
  onStartQuiz: () => void;
}

const CategoryCard: React.FC<{ 
    icon: React.ReactNode;
    title: string; 
    conjunctions: string; 
    prepositions: string; 
    conjExample: React.ReactNode; 
    prepExample: React.ReactNode;
}> = ({ icon, title, conjunctions, prepositions, conjExample, prepExample }) => (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6 transition-shadow hover:shadow-md">
        <h3 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2 flex items-center">
            <span className="mr-3 text-indigo-500">{icon}</span>
            {title}
        </h3>
        <div className="grid md:grid-cols-2 gap-x-6">
            <div>
                <h4 className="text-xl font-semibold text-indigo-600">접속사</h4>
                <p className="font-mono text-sm text-slate-600 bg-slate-200 inline-block px-2 py-1 rounded mb-2">{conjunctions}</p>
                <p className="text-slate-700">뒤에 <strong className="font-bold">주어(S) + 동사(V)</strong>가 오는 '절'을 이끕니다.</p>
                <p className="mt-2 text-sm text-gray-800 bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <span className="font-bold text-blue-700">e.g.</span> {conjExample}
                </p>
            </div>
            <div className="mt-4 md:mt-0">
                <h4 className="text-xl font-semibold text-green-600">전치사</h4>
                 <p className="font-mono text-sm text-slate-600 bg-slate-200 inline-block px-2 py-1 rounded mb-2">{prepositions}</p>
                <p className="text-slate-700">뒤에 <strong className="font-bold">명사(구)</strong>가 옵니다.</p>
                 <p className="mt-2 text-sm text-gray-800 bg-green-50 p-3 rounded-lg border border-green-200">
                    <span className="font-bold text-green-700">e.g.</span> {prepExample}
                </p>
            </div>
        </div>
    </div>
);


const LearningPage: React.FC<LearningPageProps> = ({ onStartQuiz }) => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold text-center mb-2">접속사 vs 전치사: 심화 학습 📝</h2>
      <p className="text-center text-slate-600 mb-8">의미는 비슷하지만 쓰임은 다른, 내신-수능 빈출 어법 완벽 정리!</p>

      <CategoryCard 
        icon={<ContrastIcon className="w-8 h-8" />}
        title="1. 양보/대조 (~에도 불구하고)"
        conjunctions="although, though, even though"
        prepositions="despite, in spite of"
        conjExample={<><strong className="text-indigo-600">Although</strong> it was cold, he went swimming.</>}
        prepExample={<><strong className="text-green-600">Despite</strong> the cold weather, he went swimming.</>}
      />

      <CategoryCard 
        icon={<ReasonIcon className="w-8 h-8" />}
        title="2. 이유 (~때문에)"
        conjunctions="because, as, since"
        prepositions="because of, due to, owing to"
        conjExample={<><strong className="text-indigo-600">Because</strong> the traffic was heavy, we were late.</>}
        prepExample={<><strong className="text-green-600">Due to</strong> the heavy traffic, we were late.</>}
      />

      <CategoryCard 
        icon={<TimeIcon className="w-8 h-8" />}
        title="3. 시간 (~하는 동안)"
        conjunctions="while"
        prepositions="during, for"
        conjExample={<><strong className="text-indigo-600">While</strong> I was watching the movie, my phone rang.</>}
        prepExample={<><strong className="text-green-600">During</strong> the movie, my phone rang.</>}
      />

      <CategoryCard 
        icon={<ConditionIcon className="w-8 h-8" />}
        title="4. 조건 (만약 ~라면 / ~의 경우에)"
        conjunctions="if, unless"
        prepositions="in case of"
        conjExample={<><strong className="text-indigo-600">Unless</strong> you study hard, you will fail the test.</>}
        prepExample={<><strong className="text-green-600">In case of</strong> fire, break the glass.</>}
      />

      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-6 rounded-lg my-8">
        <h4 className="font-bold text-xl mb-2">✨ 구분 핵심 꿀팁!</h4>
        <p>빈칸 뒤에 <strong className="underline">주어+동사(절)가 보이면 접속사</strong>, <strong className="underline">명사(구)만 덩그러니 있으면 전치사</strong>를 고르세요. 이것만 기억해도 90%는 해결됩니다!</p>
      </div>

      <div className="text-center">
        <button
          onClick={onStartQuiz}
          className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 shadow-lg"
        >
          실력 점검 퀴즈 풀기 →
        </button>
      </div>
    </div>
  );
};

export default LearningPage;