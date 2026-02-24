"use client";
import { useState } from "react";
import { FORGOT_PASSWORD_STEPS } from "@/lib/constants/auth.constant";
import { ForgotPasswordSteps } from "@/lib/types/auth";
import { useTranslations } from "next-intl";
import EmailStep from "./email-step";
import NewPasswordStep from "./new-password-step";
import OtpStep from "./otp-step";
import { Link } from "@/i18n/navigation";
import { MoveLeft } from "@/components/icons/MoveLeft";

export default function ForgotPasswordFlowLayout() {
  // translations
  const t = useTranslations("forgot-password-step");

  // states
  const [step, setStep] = useState<ForgotPasswordSteps>(FORGOT_PASSWORD_STEPS.EMAIL);
  const [email, setEmail] = useState<string>("");

  // variables
  const steps = {
    [FORGOT_PASSWORD_STEPS.EMAIL]: {
      title: t("step-one-title"),
      subTitle: t("step-one-subtitle"),
      form: <EmailStep email={email} setStep={setStep} setEmail={setEmail} />,
    },
    [FORGOT_PASSWORD_STEPS.OTP]: {
      title: t("step-two-title"),
      subTitle: t.rich("step-two-subtitle", {
        email: email || "",
        span: (chunk) => <span className="text-gray-800 font-medium">{chunk}</span>,
        button: (chunk) => (
          <button onClick={() => setStep(FORGOT_PASSWORD_STEPS.EMAIL)} className="text-blue-600 font-medium">
            {chunk}
          </button>
        ),
      }),
      form: <OtpStep setStep={setStep} />,
    },
    [FORGOT_PASSWORD_STEPS.NEW_PASSWORD]: {
      title: t("step-three-title"),
      subTitle: t("step-three-subtitle"),
      form: <NewPasswordStep email={email} />,
    },
  } as const;

  return (
    <>
      {/* back button if step is opt */}
      {step === FORGOT_PASSWORD_STEPS.OTP && (
        <button onClick={() => setStep(FORGOT_PASSWORD_STEPS.EMAIL)} className="border size-10 flex justify-center items-center mb-10 ">
          <MoveLeft className="size-6" />
        </button>
      )}
      <h1 className="text-3xl font-bold font-inter rtl:font-lemonada mb-4">{steps[step].title}</h1>
      <p className="text-gray-500 mb-10">{steps[step].subTitle}</p>
      {steps[step].form}
      <p className="text-sm font-medium text-gray-500 mt-9 text-center">
        {t.rich("forgot-footer", {
          a: (chank) => (
            <Link href={"/register"} className="text-blue-600">
              {chank}
            </Link>
          ),
        })}
      </p>
    </>
  );
}
