"use client";
import { useState } from "react";
import ThreeDotsSVG from "@/assets/svg/ThreeDotsIcon";
import { CardContent } from "@/types/CardComponent";
import CardModal from "./CardModal";
import { useCards } from "@/hooks/CardsContext";

export default function CardComponent(props: CardContent) {
  const { updateCard } = useCards(); // função para atualizar card no contexto
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdate = ({
    title,
    content,
    columnId,
  }: {
    title: string;
    content: string;
    columnId: number;
  }) => {
    console.log(props.id);
    console.log(title);
    updateCard({
      id: props.id, // id do card atual
      title,
      content,
      columnId,
    });
    setIsModalOpen(false); // fecha modal após atualização
  };

  return (
    <div className="relative bg-white flex flex-col rounded-sm p-4 cursor-pointer">
      <button
        onClick={() => setIsModalOpen(true)}
        className="absolute top-2 right-2"
      >
        <ThreeDotsSVG width={16} height={16} />
      </button>

      <h2 className="py-2">{props.title}</h2>
      <p className="text-[50%]">{props.content}</p>

      <CardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleUpdate}
        initialTitle={props.title}
        initialContent={props.content}
        initialColumnId={props.columnId}
      />
    </div>
  );
}
