"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { Card } from "@/types/Card";
import { CardContent } from "@/types/CardComponent";

interface CardsContextType {
  cards: Card[];
  addCard: (card: Omit<Card, "id">) => void;
}

const CardsContext = createContext<CardsContextType | undefined>(undefined);

export function CardsProvider({ children }: { children: React.ReactNode }) {
  const [cards, setCards] = useState<Card[]>([]);

  // Carregar do localStorage ao iniciar
  useEffect(() => {
    const stored = localStorage.getItem("cards");
    if (stored) {
      setCards(JSON.parse(stored));
    }
  }, []);

  // Atualizar localStorage quando os cards mudarem
  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const addCard = ({ title, content, columnId }: Omit<Card, "id">) => {
    const newCard: Card = {
      id: crypto.randomUUID(),
      title,
      content,
      columnId,
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
