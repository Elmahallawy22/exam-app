import { Link } from "@/i18n/navigation";
import RegisterForm from "./_components/register-form";
import { useTranslations } from "next-intl";

export default function Page() {
  // translations
  const t = useTranslations("register");

  return (
    <main className="flex justify-center items-center">
      <div className="max-w-110 w-full">
        <h1 className="text-3xl font-bold font-inter rtl:font-lemonada h-12 mb-5">{t("title")}</h1>
        {/* register form component */}
        <RegisterForm />
        <p className="text-sm font-medium text-gray-500 mt-9 text-center">
          {t.rich("register-footer", {
            a: (chank) => (
              <Link href={"/login"} className="text-blue-600">
                {chank}
              </Link>
            ),
          })}
        </p>
      </div>
    </main>
  );
}
