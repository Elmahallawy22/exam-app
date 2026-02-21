import AuthSide from "./_components/auth-side";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <aside className="grid grid-cols-2 bg-white min-h-screen">
      <AuthSide />
      {children}
    </aside>
  );
}
