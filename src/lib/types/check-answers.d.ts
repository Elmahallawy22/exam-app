declare type WrongQuestion = {
  QID: string;
  Question: string;
  inCorrectAnswer: string;
  correctAnswer: string;
  answers: Record<string, string>;
};

declare type WrongQuestions = WrongQuestion[];

declare type CheckResponse = {
  message: string;
  correct: number;
  wrong: number;
  total: string;
  WrongQuestions: WrongQuestion[];
  correctQuestions: {
    QID: string;
    Question: string;
    correctAnswer: string;
    answers: Record<string, string>;
  }[];
};
