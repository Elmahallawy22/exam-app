import QuestionsHeader from "./_components/questions-header";
import QuestionsShow from "./_components/questions-show";

export default function Page() {
  return (
    <main>
      {/* Title Page */}
      <QuestionsHeader />
      {/* Page content */}
      <QuestionsShow />
    </main>
  );
}
