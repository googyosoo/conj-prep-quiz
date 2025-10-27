import type { QuizQuestion } from './types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    sentence: 'I have one brother, ______ is a doctor.',
    options: ['who', 'that'],
    correctAnswer: 'who',
    correctAnswerType: '관계대명사',
    explanation: "콤마(,) 뒤의 계속적 용법에서는 선행사가 사람일 때 'who'를 사용합니다. 'that'은 계속적 용법으로 사용할 수 없습니다."
  },
  {
    id: 2,
    sentence: 'He gave me this book, ______ was very interesting.',
    options: ['which', 'what'],
    correctAnswer: 'which',
    correctAnswerType: '관계대명사',
    explanation: "콤마(,) 뒤의 계속적 용법에서는 선행사가 사물일 때 'which'를 사용합니다. 'what'은 선행사를 포함하는 관계대명사로, 이 자리에 올 수 없습니다."
  },
  {
    id: 3,
    sentence: 'She suddenly quit her job, ______ surprised everyone.',
    options: ['who', 'which'],
    correctAnswer: 'which',
    correctAnswerType: '관계대명사',
    explanation: "관계대명사가 앞 문장 전체('그녀가 갑자기 일을 그만둔 것')를 선행사로 받을 때는 'which'를 사용해야 합니다."
  },
  {
    id: 4,
    sentence: 'This is my teacher, ______ I respect very much.',
    options: ['whom', 'that'],
    correctAnswer: 'whom',
    correctAnswerType: '관계대명사',
    explanation: "계속적 용법에서 목적격 관계대명사 사람이 선행사일 때는 'whom'을 씁니다. 'who'도 구어체에서 쓰이지만, 'that'은 절대 사용할 수 없습니다."
  },
  {
    id: 5,
    sentence: 'We visited the Eiffel Tower, ______ is the symbol of Paris.',
    options: ['that', 'which'],
    correctAnswer: 'which',
    correctAnswerType: '관계대명사',
    explanation: "콤마(,)가 있으므로 계속적 용법입니다. 따라서 'that'은 사용할 수 없고, 사물 선행사를 받는 'which'가 정답입니다."
  },
  {
    id: 6,
    sentence: 'The man, ______ is wearing a blue shirt, is my uncle.',
    options: ['who', 'what'],
    correctAnswer: 'who',
    correctAnswerType: '관계대명사',
    explanation: "선행사 'The man'에 대한 부가 설명을 하는 계속적 용법이므로, 주격 관계대명사 'who'가 적절합니다. 'what'은 사용할 수 없습니다."
  },
  {
    id: 7,
    sentence: 'Last summer, I visited London, ______ I stayed for two weeks.',
    options: ['which', 'where'],
    correctAnswer: 'where',
    correctAnswerType: '관계부사',
    explanation: "선행사가 장소(London)이고, 뒷 문장이 완전하므로 관계부사 'where'가 맞습니다. 'where'는 'and there' 또는 'in which'의 의미를 가집니다."
  },
  {
    id: 8,
    sentence: 'I remember the day, ______ we first met.',
    options: ['which', 'when'],
    correctAnswer: 'when',
    correctAnswerType: '관계부사',
    explanation: "선행사가 시간(the day)이고, 뒷 문장이 완전하므로 관계부사 'when'이 맞습니다. 'when'은 'and then' 또는 'on which'의 의미를 가집니다."
  }
];