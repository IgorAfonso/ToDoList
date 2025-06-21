"use client";
import { useCards } from "@/hooks/CardsContext";
import CardComponent from "./CardComponent";

interface ColumComponentProps {
  id: number;
}

export default function ColumComponent({ id }: ColumComponentProps) {
  const { cards } = useCards();
  const filteredCards = cards.filter((card) => card.columnId === id);

  return (
    <div className="bg-light_blue_bg p-2 w-full h-full rounded-lg flex flex-col gap-2">
      {filteredCards.map((card) => (
        <CardComponent
          key={card.id}
          title={card.title}
          content={card.content}
        />
      ))}
    </div>
  );
}
