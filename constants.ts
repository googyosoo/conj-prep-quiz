import type { QuizQuestion } from './types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    sentence: '______ he is young, he is very wise.',
    options: ['Although', 'Despite'],
    correctAnswer: 'Although',
    correctAnswerType: '접속사',
    explanation: "뒤에 'he is young'이라는 주어와 동사를 갖춘 절이 오므로 접속사 'Although'가 필요합니다. 'Despite'는 전치사입니다."
  },
  {
    id: 2,
    sentence: "He couldn't go out ______ the heavy rain.",
    options: ['because', 'because of'],
    correctAnswer: 'because of',
    correctAnswerType: '전치사',
    explanation: "뒤에 'the heavy rain'이라는 명사구가 오므로 전치사 'because of'가 필요합니다. 'because'는 접속사입니다."
  },
  {
    id: 3,
    sentence: 'She has been working here ______ 2010.',
    options: ['since', 'while'],
    correctAnswer: 'since',
    correctAnswerType: '전치사',
    explanation: "'2010'이라는 명사(연도)가 뒤에 오므로 특정 시점부터를 나타내는 전치사 'since'가 맞습니다. 'while'은 접속사입니다."
  },
  {
    id: 4,
    sentence: 'I will call you ______ I finish my homework.',
    options: ['after', 'during'],
    correctAnswer: 'after',
    correctAnswerType: '접속사',
    explanation: "뒤에 'I finish my homework'라는 절이 오므로 접속사 'after'가 필요합니다. 'during'은 전치사입니다."
  },
  {
    id: 5,
    sentence: 'The flight was delayed ______ the bad weather.',
    options: ['due to', 'even though'],
    correctAnswer: 'due to',
    correctAnswerType: '전치사',
    explanation: "뒤에 'the bad weather'라는 명사구가 오므로 '~때문에'라는 의미의 전치사 'due to'가 맞습니다. 'even though'는 접속사입니다."
  },
  {
    id: 6,
    sentence: '______ you study hard, you will pass the exam.',
    options: ['Unless', 'If'],
    correctAnswer: 'If',
    correctAnswerType: '접속사',
    explanation: "뒤에 'you study hard'라는 절이 오고, 문맥상 '만약 ~한다면'이라는 조건의 의미가 자연스러우므로 접속사 'If'가 맞습니다. 'Unless'는 '만약 ~하지 않는다면'의 의미입니다."
  },
];