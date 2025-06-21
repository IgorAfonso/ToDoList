"use client";
import MainTodoDash from "@/components/MainTodoDash";
import SideBar from "@/components/SideBar";
import { CardsProvider } from "@/hooks/CardsContext";

export default function Home() {
  return (
    <CardsProvider>
      <div className="h-screen flex flex-row">
        <SideBar />
        <MainTodoDash />
      </div>
    </CardsProvider>
  );
}
