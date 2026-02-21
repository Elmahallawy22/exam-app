import Link from "next/link";
import LoginForm from "./_components/login-form";

export default function Page() {
  return (
    <main className="flex justify-center items-center">
      <div className="max-w-110 w-full">
        <h1 className="text-3xl font-bold font-inter h-12">Login</h1>
        {/* login form component */}
        <LoginForm />
        <p className="text-sm font-medium text-gray-500 mt-9 text-center">
          Don’t have an account?{" "}
          <Link href={"/register"} className="text-blue-600">
            Create yours
          </Link>
        </p>
      </div>
    </main>
  );
}
