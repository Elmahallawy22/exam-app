import PageTitle from "@/components/shared/page-title";
import { User } from "lucide-react";
import AccountSidebar from "./_components/account-sidebar";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
        <PageTitle icon={User} title="Account Settings" isBack={true} back="/" />
      <div className="grid grid-cols-10 gap-6 min-h-[calc(100vh-200px)]">
        <AccountSidebar />
        {children}
      </div>
    </div>
  );
}
