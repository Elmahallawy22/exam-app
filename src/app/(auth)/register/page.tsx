import Link from "next/link";
import RegisterForm from "./_components/register-form";

export default function Page() {
  return (
    <main className="flex justify-center items-center">
      <div className="max-w-110 w-full">
        <h1 className="text-3xl font-bold font-inter h-12 mb-5">Create Account</h1>
        {/* register form component */}
        <RegisterForm />
        <p className="text-sm font-medium text-gray-500 mt-9 text-center">
          Already have an account?{" "}
          <Link href={"/login"} className="text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
