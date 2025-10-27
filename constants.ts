import type { QuizQuestion } from './types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    sentence: '______ the traffic was heavy, I managed to arrive on time.',
    options: ['Although', 'Despite'],
    correctAnswer: 'Although',
    correctAnswerType: '접속사',
    explanation: "'the traffic was heavy'는 '주어(the traffic) + 동사(was)'를 갖춘 절입니다. 따라서 절을 이끌 수 있는 접속사 'Although'가 정답입니다. 'Despite'는 전치사입니다."
  },
  {
    id: 2,
    sentence: 'The outdoor event was canceled ______ the sudden downpour.',
    options: ['because', 'due to'],
    correctAnswer: 'due to',
    correctAnswerType: '전치사',
    explanation: "'the sudden downpour'는 명사구이므로, 앞에 명사(구)를 받는 전치사 'due to'가 와야 합니다. 'because'는 접속사로 뒤에 '주어+동사'가 와야 합니다."
  },
  {
    id: 3,
    sentence: 'You are not allowed to use your phone ______ the exam.',
    options: ['while', 'during'],
    correctAnswer: 'during',
    correctAnswerType: '전치사',
    explanation: "'the exam'은 명사구입니다. 따라서 '~하는 동안'이라는 의미의 전치사 'during'이 정답입니다. 'while'은 접속사로 'while you are taking the exam'과 같이 절을 이끕니다."
  },
  {
    id: 4,
    sentence: '______ his efforts, he failed the audition.',
    options: ['In spite of', 'Even though'],
    correctAnswer: 'In spite of',
    correctAnswerType: '전치사',
    explanation: "'his efforts'는 명사구이므로 전치사인 'In spite of'가 와야 합니다. 'Even though'는 접속사로 뒤에 'Even though he made efforts'처럼 절이 와야 합니다."
  },
  {
    id: 5,
    sentence: '______ she has a lot of experience, she didn’t get the job.',
    options: ['Though', 'Owing to'],
    correctAnswer: 'Though',
    correctAnswerType: '접속사',
    explanation: "'she has a lot of experience'는 '주어(she) + 동사(has)'를 갖춘 절이므로 접속사 'Though'가 정답입니다. 'Owing to'는 '~때문에'라는 의미의 전치사입니다."
  },
  {
    id: 6,
    sentence: 'I fell asleep ______ I was watching the boring lecture.',
    options: ['for', 'while'],
    correctAnswer: 'while',
    correctAnswerType: '접속사',
    explanation: "'I was watching the boring lecture'는 '주어(I) + 동사(was watching)'를 갖춘 절입니다. 따라서 '~하는 동안'이라는 의미의 접속사 'while'이 정답입니다. 'for'는 전치사로 뒤에 기간(for three hours)이나 명사구가 옵니다."
  },
  {
    id: 7,
    sentence: 'You cannot enter the club ______ you are over 19.',
    options: ['unless', 'in case of'],
    correctAnswer: 'unless',
    correctAnswerType: '접속사',
    explanation: "'you are over 19'는 '주어(you) + 동사(are)'를 갖춘 절입니다. 따라서 '만약 ~가 아니라면'이라는 의미의 접속사 'unless'가 정답입니다. 'unless'는 'if ... not'과 같은 의미입니다."
  },
  {
    id: 8,
    sentence: '______ an emergency, please call 119 immediately.',
    options: ['If', 'In case of'],
    correctAnswer: 'In case of',
    correctAnswerType: '전치사',
    explanation: "'an emergency'는 명사구이므로, 전치사 역할을 하는 'In case of'가 정답입니다. 'If'는 접속사로 뒤에 'If there is an emergency'와 같이 절이 와야 합니다."
  }
];