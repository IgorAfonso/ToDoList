import { useState } from "react";
import CardComponent from "./CardComponent";
import { useCards } from "@/hooks/CardsContext";
import { Card } from "@/types/Card";
import CardModal from "./CardModal";

export default function ColumComponent({ id }: { id: number }) {
  const { cards } = useCards();
  const [editingCard, setEditingCard] = useState<Card | null>(null);

  const filteredCards = cards.filter((card) => card.columnId === id);

  return (
    <>
      <div className="bg-light_blue_bg p-2 w-full rounded-lg flex flex-col gap-2 overflow-y-auto max-h-[80vh]">
        {filteredCards.map((card) => (
          <CardComponent
            key={card.id}
            id={card.id}
            title={card.title}
            content={card.content}
            columnId={card.columnId}
            createDate={card.createDate}
            deadLine={card.deadLine}
            onEdit={() => {
              setEditingCard(card);
            }}
          />
        ))}
      </div>

      {editingCard && (
        <CardModal
          initialId={editingCard.id}
          initialTitle={editingCard.title}
          initialContent={editingCard.content}
          initialColumnId={editingCard.columnId}
          initialCreateDate={editingCard.createDate}
          initialDeadLine={editingCard.deadLine}
          isOpen={true}
          onClose={() => setEditingCard(null)}
          onDelete={() => {
            setEditingCard(null);
          }}
          onSubmit={() => {
            setEditingCard(null);
          }}
        />
      )}
    </>
  );
}
