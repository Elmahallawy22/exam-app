import { Link } from "@/i18n/navigation";
import LoginForm from "./_components/login-form";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

// Title and description for SEO and social sharing
export async function generateMetadata() {
  // server-side translation
  const t = await getTranslations("login");

  return {
    title: t("super-title"),
    description: t("super-description"),
  };
}

export default function Page() {
  const t = useTranslations("login");

  return (
    <main className="flex justify-center items-center">
      <div className="max-w-110 w-full">
        <h1 className="text-3xl font-bold font-inter rtl:font-lemonada h-12">{t("title")}</h1>
        {/* login form component */}
        <LoginForm />
        <p className="text-sm font-medium text-gray-500 mt-9 text-center">
          {t.rich("login-footer", {
            a: (chank) => (
              <Link href={"/register"} className="text-blue-600">
                {chank}
              </Link>
            ),
          })}
        </p>
      </div>
    </main>
  );
}
