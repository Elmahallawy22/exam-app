import PageTitle from "@/components/shared/page-title";
import { GraduationCap } from "lucide-react";
import DiplomaCard from "./_components/diploma-card";
import DiplomasShow from "./_components/diplomas-show";

export default function Home() {
  return (
    <main>
      <PageTitle icon={GraduationCap} title="Diplomas" />
      {/* diplomas list */}
      <DiplomasShow />
    </main>
  );
}
