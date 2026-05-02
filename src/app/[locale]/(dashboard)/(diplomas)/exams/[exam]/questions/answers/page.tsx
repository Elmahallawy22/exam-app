import React from "react";
import AnswersShow from "./_components/answers-show";
import QuestionsHeader from "../_components/questions-header";

export default function Page() {
  return (
    <main>
      {/* Title Page */}
      <QuestionsHeader />
      {/* Page content */}
      <AnswersShow />
    </main>
  );
}
