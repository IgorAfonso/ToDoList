"use client";
import PlusSignalSvg from "@/assets/svg/PlusIcon";
import UserProfileSvg from "@/assets/svg/UserProfile";

export default function MainTodoDashHeader() {
  return (
    <div className="flex flex-row h-full w-full items-center justify-between mx-5">
      <h1 className="font-work font-semibold text-2xl">ToDo Dashboard</h1>
      <div className="flex flex-row gap-10">
        <button
          onClick={() => alert("Clickou!")}
          className="display flex items-center gap-2 bg-primary text-white p-2 rounded-lg"
        >
          <PlusSignalSvg width={20} height={20} /> Nova Atividade
        </button>
        <UserProfileSvg width={40} height={40} />
      </div>
    </div>
  );
}
