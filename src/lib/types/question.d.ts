declare interface Answer {
  answer: string;
  key: string;
}

declare interface Exam {
  _id: string;
  title: string;
  duration: number;
  subject: string | null;
  numberOfQuestions: number;
  active: boolean;
  createdAt: string;
}

declare interface Question {
  _id: string;
  question: string;
  answers: Answer[];
  type: "single_choice" | "multiple_choice";
  correct: string | string[];
  subject: string | null;
  exam: Exam;
  createdAt: string;
}

declare interface QuizResponse {
  message: string;
  questions: Question[];
}

declare type QuestionAnswer = {
  answer: string;
  key: string;
};

declare type SingleQuestion = {
  _id: string;
  question: string;
  answers: QuestionAnswer[];
  type: string;
  correct: string;
  subject: {
    _id: string;
    name: string;
    icon: string;
    createdAt: string;
  };
  exam: {
    _id: string;
    title: string;
    duration: number;
    subject: string;
    numberOfQuestions: number;
    active: boolean;
    createdAt: string;
  };
  createdAt: string;
};

declare type SingleQuestionResponse = {
  message: string;
  question: SingleQuestion;
};