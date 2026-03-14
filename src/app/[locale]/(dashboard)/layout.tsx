import DashboardHeader from "./_components/dashboard-header";
import Sidebar from "./_components/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <Sidebar />
      <div className="col-span-9 flex flex-col">
        <DashboardHeader />
        <div className="bg-gray-50 p-6 flex-1 max-h-[calc(100vh-48px)] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
