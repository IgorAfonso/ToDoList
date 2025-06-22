"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { Card } from "@/types/Card";

interface CardsContextType {
  cards: Card[];
  addCard: (card: Omit<Card, "id">) => void;
}

const CardsContext = createContext<CardsContextType | undefined>(undefined);

export function CardsProvider({ children }: { children: React.ReactNode }) {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cards");
    if (stored) {
      setCards(JSON.parse(stored));
    }
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
}

export function useCards(): CardsContextType {
  const context = useContext(CardsContext);
  if (!context) {
    throw new Error("useCards deve estar dentro de CardsProvider");
  }
  return context;
}
