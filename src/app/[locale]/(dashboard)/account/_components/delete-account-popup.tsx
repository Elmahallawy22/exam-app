import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { TriangleAlert, X } from "lucide-react";
import { useTranslations } from "next-intl";

export default function DeleteAccountPopup() {
  // translations
  const t = useTranslations("dashboard.profile");

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="mt-4 col-span-1 bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 rounded-none border-none"
        >
          {t("delete-account")}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="p-0">
        <AlertDialogCancel className="bg-transparent hover:bg-transparent text-black flex justify-end border-none shadow-none pb-0">
          <X size={24} />
        </AlertDialogCancel>
        <AlertDialogHeader className="py-4 border-none outline-none shadow-none">
          <AlertDialogTitle className="flex justify-center">
            <div className="bg-red-50 w-fit p-4 rounded-full">
              <div className="bg-red-100 w-fit p-4 rounded-full">
                <TriangleAlert size={50} className="text-red-600" />
              </div>
            </div>
          </AlertDialogTitle>
          <AlertDialogTitle className="text-center pt-8 text-red-600 font-medium">{t("delete-title")}</AlertDialogTitle>
          <AlertDialogDescription className="text-center text-sm text-gray-500">{t("delete-description")}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="py-6 px-10 bg-gray-50 grid grid-cols-2 border-t border-gray-200">
          <AlertDialogCancel className="col-span-1 text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-none">
            {t("cancel")}
          </AlertDialogCancel>
          <AlertDialogAction className="col-span-1 text-sm bg-red-600 hover:bg-red-700 text-white rounded-none">
            {t("delete-confirm")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
