import { getTranslations } from "next-intl/server";
import QuestionsHeader from "./_components/questions-header";
import QuestionsShow from "./_components/questions-show";

// Title and description for SEO and social sharing
export async function generateMetadata() {
  // server-side translation
  const t = await getTranslations("dashboard.questions");

  return {
    title: t("super-title"),
    description: t("super-description"),
  };
}

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
