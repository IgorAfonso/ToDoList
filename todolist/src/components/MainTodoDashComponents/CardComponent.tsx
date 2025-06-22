"use client";
import { useState } from "react";
import ThreeDotsSVG from "@/assets/svg/ThreeDotsIcon";
import { CardContent } from "@/types/CardComponent";
import CardModal from "./CardModal";
import { useCards } from "@/hooks/CardsContext";

const formatDate = (dateStr: string | Date | undefined) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return isNaN(date.getTime()) ? "" : date.toISOString().split("T")[0];
};

export default function CardComponent(props: CardContent) {
  const { updateCard, deleteCard } = useCards();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdate = ({
    title,
    content,
    columnId,
    createDate,
    deadLine,
  }: {
    title: string;
    content: string;
    columnId: number;
    createDate: string;
    deadLine: string;
  }) => {
    updateCard({
      id: props.id,
      title,
      content,
      columnId,
      createDate,
      deadLine,
    });

    console.log(props.id, title, content, columnId, createDate, deadLine);
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    deleteCard(props.id);
    setIsModalOpen(false);
  };

  return (
    <div className="relative bg-white flex flex-col rounded-sm p-3 text-xs gap-1 shadow-sm">
      <button
        onClick={() => setIsModalOpen(true)}
        className="absolute top-2 right-2"
      >
        <ThreeDotsSVG width={14} height={14} />
      </button>

      <h2 className="font-semibold py-1">{props.title}</h2>
      <p className="text-[70%] text-gray-700">{props.content}</p>

      <div>
        <p className="text-black text-[80%]">Criado em:</p>
        <input
          type="date"
          value={formatDate(formatDate(props.createDate))}
          readOnly
          className="text-[80%] border p-1 rounded w-full"
        />
      </div>

      <div>
        <p className="text-black text-[78%] mt-2">Prazo:</p>
        <input
          type="date"
          value={formatDate(props.deadLine)}
          readOnly
          className="text-[80%] border p-1 rounded w-full"
        />
      </div>

      <CardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleUpdate}
        onDelete={handleDelete}
        initialTitle={props.title}
        initialContent={props.content}
        initialColumnId={props.columnId}
        initialId={props.id}
        initialCreateDate={props.createDate}
        initialDeadLine={props.deadLine}
      />
    </div>
  );
}
