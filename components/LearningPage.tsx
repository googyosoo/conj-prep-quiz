import React from 'react';
import ContrastIcon from './icons/ContrastIcon';
import PersonThingIcon from './icons/PersonThingIcon';
import SentenceIcon from './icons/SentenceIcon';
import AdverbIcon from './icons/AdverbIcon';
import XIcon from './icons/XIcon';

interface LearningPageProps {
  onStartQuiz: () => void;
}

const InfoCard: React.FC<{ 
    icon: React.ReactNode;
    title: string; 
    description: React.ReactNode;
    children: React.ReactNode;
}> = ({ icon, title, description, children }) => (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6 transition-shadow hover:shadow-md">
        <h3 className="text-2xl font-bold text-slate-800 mb-2 flex items-center">
            <span className="mr-3 text-cyan-500">{icon}</span>
            {title}
        </h3>
        <div className="pl-10 text-slate-600 mb-4">{description}</div>
        {children}
    </div>
);


const LearningPage: React.FC<LearningPageProps> = ({ onStartQuiz }) => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold text-center mb-2">관계사 계속적 용법 📖</h2>
      <p className="text-center text-slate-600 mb-8">선행사에 대한 부가 정보를 덧붙이는 콤마(,)의 마법!</p>

      <InfoCard 
        icon={<ContrastIcon className="w-8 h-8" />}
        title="1. 계속적 용법 vs 제한적 용법"
        description="콤마(,) 하나로 의미가 어떻게 달라지는지 알아볼까요?"
      >
        <div className="grid md:grid-cols-2 gap-x-6">
            <div>
                <h4 className="text-xl font-semibold text-slate-700">제한적 용법 (콤마 X)</h4>
                <p className="text-slate-600 text-sm mb-2">"~하는" 으로 해석하며, 선행사의 범위를 한정합니다.</p>
                <p className="mt-2 text-sm text-gray-800 bg-gray-100 p-3 rounded-lg border border-gray-200">
                    He has two sons <strong className="text-red-600">who became</strong> doctors.<br/>
                    (그는 의사가 <strong className="text-red-600">된</strong> 아들 둘이 있다. → 아들이 더 있을 수 있음)
                </p>
            </div>
            <div className="mt-4 md:mt-0">
                <h4 className="text-xl font-semibold text-cyan-600">계속적 용법 (콤마 O)</h4>
                <p className="text-slate-600 text-sm mb-2">"그런데 그는/그것은" 으로 해석하며, 부가 설명을 합니다.</p>
                <p className="mt-2 text-sm text-gray-800 bg-cyan-50 p-3 rounded-lg border border-cyan-200">
                    He has two sons, <strong className="text-cyan-700">who became</strong> doctors.<br/>
                    (그는 아들이 둘 있는데, <strong className="text-cyan-700">그들은</strong> 의사가 되었다. → 아들이 총 2명)
                </p>
            </div>
        </div>
      </InfoCard>

      <InfoCard 
        icon={<PersonThingIcon className="w-8 h-8" />}
        title="2. 관계대명사: who, whom, which"
        description="선행사가 사람인지 사물인지, 문장에서 어떤 역할을 하는지에 따라 알맞게 사용해요."
      >
         <div className="space-y-4 text-slate-700">
            <div>
              <h5 className="font-semibold text-lg">주격 (who / which)</h5>
              <ul className="list-disc list-inside space-y-2 mt-1 pl-2">
                  <li>I met Tom, <strong className="text-cyan-700">who</strong> is a famous musician. (선행사: Tom/사람)</li>
                  <li>This is my laptop, <strong className="text-cyan-700">which</strong> has a fast processor. (선행사: laptop/사물)</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-lg">목적격 (whom / which)</h5>
              <ul className="list-disc list-inside space-y-2 mt-1 pl-2">
                  <li>This is Mr. Kim, <strong className="text-cyan-700">whom</strong> everyone respects. (선행사: Mr. Kim/사람)</li>
                  <li>I lost my new watch, <strong className="text-cyan-700">which</strong> I bought yesterday. (선행사: watch/사물)</li>
              </ul>
            </div>
         </div>
      </InfoCard>
      
      <InfoCard 
        icon={<AdverbIcon className="w-8 h-8" />}
        title="3. 관계부사: where, when, why"
        description="시간, 장소, 이유에 대한 부가 설명을 할 때 사용해요. '전치사 + which'로 바꿀 수 있어요."
      >
        <ul className="list-disc list-inside space-y-3 text-slate-700">
            <li>We moved to Paris, <strong className="text-cyan-700">where</strong> we lived for 3 years. (= in which)</li>
            <li>I'll never forget 2022, <strong className="text-cyan-700">when</strong> I first traveled abroad. (= in which)</li>
            <li>He told me the reason, <strong className="text-cyan-700">why</strong> he was late. (계속적 용법으로는 잘 쓰이지 않지만 참고!)</li>
        </ul>
      </InfoCard>

      <InfoCard 
        icon={<SentenceIcon className="w-8 h-8" />}
        title="4. 앞 문장 전체를 받는 which"
        description="콤마(,)와 함께 쓰인 which는 단어뿐만 아니라, 앞 문장 전체를 선행사로 받을 수 있어요."
      >
        <p className="mt-2 text-sm text-gray-800 bg-cyan-50 p-3 rounded-lg border border-cyan-200">
            She passed the exam, <strong className="text-cyan-700">which</strong> made her family happy.<br/>
            (그녀는 시험에 합격했고, <strong className="text-cyan-700">그 사실이</strong> 그녀의 가족을 행복하게 만들었다.)<br/>
            <span className="text-xs text-slate-500 mt-1 block">이때 which = She passed the exam</span>
        </p>
      </InfoCard>

       <div className="bg-red-100 border-l-4 border-red-500 text-red-800 p-6 rounded-lg my-8">
        <h4 className="font-bold text-xl mb-2 flex items-center"><XIcon className="w-6 h-6 mr-2"/>🚨 핵심 암기! 사용 불가 규칙</h4>
        <p>계속적 용법에서는 관계대명사 <strong className="underline">that</strong>과 <strong className="underline">what</strong>은 절대로 사용할 수 없습니다. 시험 단골 출제 포인트!</p>
      </div>

      <div className="text-center">
        <button
          onClick={onStartQuiz}
          className="bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-cyan-700 transition-transform transform hover:scale-105 shadow-lg"
        >
          실력 점검 퀴즈 풀기 →
        </button>
      </div>
    </div>
  );
};

export default LearningPage;