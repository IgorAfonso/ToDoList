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
  }) => {
    addCard(data);
  };

  return (
    <div className="flex flex-row h-full w-full items-center justify-between mx-5">
      <h1 className="font-work font-semibold text-2xl">ToDo Dashboard</h1>
      <div className="flex flex-row gap-10">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-primary text-white p-2 rounded-lg"
        >
          <PlusSignalSvg width={20} height={20} />
          Nova Atividade
        </button>
        <UserProfileSvg width={40} height={40} />
      </div>

      <CardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
