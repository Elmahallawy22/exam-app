import { getTranslations } from "next-intl/server";
import ForgotPasswordFlowLayout from "./_components/forgot-password-flow-layout";

// Title and description for SEO and social sharing
export async function generateMetadata() {
  // server-side translation
  const t = await getTranslations("forgot-password-step");

  return {
    title: t("super-title"),
    description: t("super-description"),
  };
}

export default function Page() {
  return (
    <main className="flex justify-center items-center">
      <div className="max-w-110 w-full">
        <ForgotPasswordFlowLayout />
      </div>
    </main>
  );
}
