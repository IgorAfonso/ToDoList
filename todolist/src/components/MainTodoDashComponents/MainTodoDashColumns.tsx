import { useState } from "react";
import CardComponent from "./CardComponent";
import { useCards } from "@/hooks/CardsContext";
import { Card } from "@/types/Card";
import CardModal from "./CardModal";

export default function ColumComponent({ id }: { id: number }) {
  const { cards, deleteCard } = useCards(); // importante garantir que deleteCard está vindo do context
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
            onEdit={() => setEditingCard(card)}
          />
        ))}
      </div>

      {editingCard && (
        <CardModal
          initialTitle={editingCard.title}
          initialContent={editingCard.content}
          initialColumnId={editingCard.columnId}
          isOpen={true}
          onClose={() => setEditingCard(null)}
          onSubmit={(updated) => {
            // aqui você pode chamar updateCard() se tiver
            console.log("Salvar card editado:", updated);
            console.log("passoua aai");
            setEditingCard(null);
          }}
          onDelete={() => {
            console.log("passoua qui");
            deleteCard(editingCard.id);
            setEditingCard(null);
          }}
        />
      )}
    </>
  );
}
