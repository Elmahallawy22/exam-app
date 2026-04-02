import PageTitle from "@/components/shared/page-title";
import AccountSidebar from "./_components/account-sidebar";
import { User } from "lucide-react";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
        <PageTitle icon={User} title="Account Settings" isBack={true} back="/" />
      <div className="grid grid-cols-12 gap-6 min-h-[calc(100vh-200px)]">
        <AccountSidebar />
        {children}
      </div>
    </div>
  );
}
