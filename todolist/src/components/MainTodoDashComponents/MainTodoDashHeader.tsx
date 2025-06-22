"use client";
import { useState } from "react";
import { useCards } from "@/hooks/CardsContext";
import PlusSignalSvg from "@/assets/svg/PlusIcon";
import UserProfileSvg from "@/assets/svg/UserProfile";
import CardModal from "./CardModal";

export default function MainTodoDashHeader() {
  const { addCard } = useCards();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (data: {
    title: string;
    content: string;
    columnId: number;
    createDate: string;
    deadLine: string;
  }) => {
    addCard(data);
  };

  return (
    <div className="flex flex-col md:flex-row h-full w-full items-center md:justify-between mx-5">
      <h1 className="font-work font-semibold text-2xl">ToDo Dashboard</h1>
      <div className="flex flex-col itens-center justify-center md:flex-row md:gap-10">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-primary text-white p-2 rounded-lg"
        >
          <PlusSignalSvg width={20} height={20} />
          Nova Atividade
        </button>
        <div className="hidden md:block">
          <UserProfileSvg width={40} height={40} />
        </div>
      </div>
      <CardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
