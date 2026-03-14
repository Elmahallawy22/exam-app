"use client";
import { Card } from "@/components/ui/card";
import Image from "next/image";

type DiplomaCardProps = {
  icon: string;
  name: string;
};

export default function DiplomaCard({ icon, name }: DiplomaCardProps) {
  return (
    <Card className="rounded-none h-[448px] relative">
      <Image src={icon} width={336} height={758} alt="ai" className="h-full w-full" />
      <h3 className="bg-blue-600/50 h-16 absolute bottom-2.5 right-2.5 left-2.5 px-4 text-white text-xl font-semibold flex items-center">
        {name}
      </h3>
    </Card>
  );
}
