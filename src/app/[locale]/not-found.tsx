import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

// Title and description for SEO and social sharing
export async function generateMetadata() {
  // server-side translation
  const t = await getTranslations("not-found");

  return {
    title: t("super-title"),
    description: t("super-description"),
  };
}

export default async function NotFound() {
  // translations
  const t = await getTranslations("not-found");

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] gap-10 bg-gray-100 text-center">
      <div className="relative w-full max-w-md h-96">
        <Image src="/assets/404.png" alt="404 Not Found" fill className="object-contain" priority />
      </div>
      <div>
        <p className="text-3xl font-semibold mb-4">{t("title")}</p>
        <p className="text-xl font-normal text-zinc-400 space-y-4 mb-8">{t("description")}</p>
        <div className="">
          <Link className="bg-primary text-white px-5 py-2.5 rounded-md" href="/">
            {t("go-home")}
          </Link>
        </div>
      </div>
    </div>
  );
}
