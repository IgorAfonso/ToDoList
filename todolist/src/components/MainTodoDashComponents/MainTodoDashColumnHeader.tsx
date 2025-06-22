import { ColumnHeaderProps } from "@/types/ColumnHeaderProps";

export default function ColumnHeader({ id, text }: ColumnHeaderProps) {
  const colorMap: Record<number, string> = {
    0: "bg-pool_blue",
    1: "bg-orange",
    2: "bg-green",
  };

  return (
    <div className="flex fle-row items-center gap-2">
      <div className={`w-3 h-3 rounded-full ${colorMap[id]}`}></div>
      <h2>{text}</h2>
    </div>
  );
}
