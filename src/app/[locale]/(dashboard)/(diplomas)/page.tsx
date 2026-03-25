import PageTitle from "@/components/shared/page-title";
import { GraduationCap } from "lucide-react";
import DiplomasShow from "./_components/diplomas-show";
import { useTranslations } from "next-intl";

export default function Home() {
  // translation
  const t = useTranslations("dashboard.diplomas");

  return (
    <main>
      <PageTitle icon={GraduationCap} title={t('title')}/>
      {/* diplomas list */}
      <DiplomasShow />
    </main>
  );
}
