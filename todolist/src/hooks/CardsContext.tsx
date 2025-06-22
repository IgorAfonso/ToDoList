"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { Card } from "@/types/Card";

interface CardContextType {
  cards: Card[];
  addCard: (card: Omit<Card, "id">) => void;
  updateCard: (updatedCard: Card) => void;
  deleteCard: (id: string) => void;
}

const CardsContext = createContext<CardContextType | undefined>(undefined);

export function CardsProvider({ children }: { children: React.ReactNode }) {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cards");
    if (stored) setCards(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const addCard = ({
    title,
    content,
    columnId,
    createDate,
    deadLine,
  }: Omit<Card, "id">) => {
    const newCard: Card = {
      id: crypto.randomUUID(),
      title,
      content,
      columnId,
      createDate,
      deadLine,
    };
    setCards((prev) => [...prev, newCard]);
  };

  const updateCard = (updated: Card) => {
    setCards((prev) =>
      prev.map((card) => (card.id === updated.id ? updated : card))
    );
  };

  const deleteCard = (id: string) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
    console.log("passei aqui");
  };

  return (
    <CardsContext.Provider value={{ cards, addCard, updateCard, deleteCard }}>
      {children}
    </CardsContext.Provider>
  );
}

export function useCards() {
  const context = useContext(CardsContext);
  if (!context)
    throw new Error("useCards precisa estar dentro de CardsProvider");
  return context;
}
