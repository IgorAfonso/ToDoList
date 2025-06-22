"use client";
import { useEffect, useState } from "react";
import { CardModalProps } from "@/types/CardModalProps";

export default function CardModal({
  isOpen,
  onClose,
  onSubmit,
  onDelete,
  initialTitle = "",
  initialContent = "",
  initialColumnId = 0,
}: CardModalProps) {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [columnId, setColumnId] = useState(initialColumnId);

  useEffect(() => {
    if (isOpen) {
      setTitle(initialTitle);
      setContent(initialContent);
      setColumnId(initialColumnId);
    }
  }, [isOpen, initialTitle, initialContent, initialColumnId]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) return;
    onSubmit({ title, content, columnId });
    onClose();
  };

  const isEditing = !!initialTitle;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
        >
          ×
        </button>

        <h2 className="text-xl font-bold mb-4">
          {isEditing ? "Editar Atividade" : "Nova Atividade"}
        </h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
        />

        <textarea
          placeholder="Conteúdo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
        />

        <select
          value={columnId}
          onChange={(e) => setColumnId(Number(e.target.value))}
          className="w-full mb-4 p-2 border rounded"
        >
          <option value={0}>Não iniciado</option>
          <option value={1}>Em Progresso</option>
          <option value={2}>Completo</option>
        </select>

        <button
          onClick={handleSubmit}
          className="w-full bg-primary text-white p-2 rounded hover:bg-primary/90 transition"
        >
          {isEditing ? "Salvar Alterações" : "Criar Card"}
        </button>

        {isEditing && onDelete && (
          <button
            onClick={() => {
              onDelete();
              onClose();
            }}
            className="w-full bg-red-600 text-white p-2 rounded mt-2 hover:bg-red-700 transition"
          >
            Excluir
          </button>
        )}
      </div>
    </div>
  );
}
