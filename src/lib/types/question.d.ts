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
