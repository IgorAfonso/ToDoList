import { Card } from "./Card";

export interface CardContextType {
  cards: Card[];
  addCard: (card: Omit<Card, "id">) => void;
  updateCard: (updatedCard: Card) => void;
  deleteCard: (id: string) => void;
}
