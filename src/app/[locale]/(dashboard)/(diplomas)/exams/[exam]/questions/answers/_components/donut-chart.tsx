import { PieChart, Pie, Cell } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { useTranslations } from "next-intl";

const COLORS = ["#00BC7D", "#EF4444"];

const chartConfig = {
  corrects: {
    label: "correct",
    color: "#1D9E75",
  },
  incorrects: {
    label: "Incorrect",
    color: "#E24B4A",
  },
};

type DonutChartProps = {
  correctValue: number;
  incorrectValue: number;
};

export function DonutChart({ correctValue, incorrectValue }: DonutChartProps) {
  // Translation
  const t = useTranslations("dashboard.answers");

  const data = [
    { name: "correct", value: correctValue },
    { name: "Incorrect", value: incorrectValue },
  ];

  return (
    <div className="flex flex-col items-center">
      <ChartContainer config={chartConfig} className="size-[200px]">
        <PieChart>
          <Pie data={data} innerRadius={60} outerRadius={100} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ChartContainer>
      <div className="p-2.5 space-y-3">
        <div className="text-sm font-medium flex items-center gap-2.5">
          <span className="size-4 bg-emerald-500"></span>
          {t("correct")}: {correctValue}
        </div>
        <div className="text-sm font-medium flex items-center gap-2.5">
          <span className="size-4 bg-red-500"></span>
          {t("incorrect")}: {incorrectValue}
        </div>
      </div>
    </div>
  );
}
