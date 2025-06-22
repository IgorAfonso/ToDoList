"use client";
import { useEffect, useState } from "react";
import { CardModalProps } from "@/types/CardModalProps";

const formatDate = (value?: string | Date) => {
  if (!value) return "";
  const date = new Date(value);
  return isNaN(date.getTime()) ? "" : date.toISOString().split("T")[0];
};

export default function CardModal({
  isOpen,
  onClose,
  onSubmit,
  onDelete,
  initialId,
  initialTitle = "",
  initialContent = "",
  initialColumnId = 0,
  initialCreateDate,
  initialDeadLine,
}: CardModalProps & {
  initialId?: string;
  initialCreateDate?: string | Date;
  initialDeadLine?: string | Date;
}) {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [columnId, setColumnId] = useState(initialColumnId);
  const [createDate, setCreateDate] = useState(formatDate(initialCreateDate));
  const [deadLine, setDeadLine] = useState(formatDate(initialDeadLine));

  useEffect(() => {
    if (isOpen) {
      setTitle(initialTitle);
      setContent(initialContent);
      setColumnId(initialColumnId);
      setCreateDate(formatDate(initialCreateDate));
      setDeadLine(formatDate(initialDeadLine));
    }
  }, [
    isOpen,
    initialTitle,
    initialContent,
    initialColumnId,
    initialCreateDate,
    initialDeadLine,
  ]);

  if (!isOpen) return null;

  const isEditing = !!initialTitle;

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      alert("Título e Conteúdo são obrigatórios!");
      return;
    }

    onSubmit({
      id: initialId,
      title,
      content,
      columnId,
      createDate,
      deadLine,
    });
    onClose();
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete();
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
          aria-label="Fechar modal"
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
          autoFocus
        />

        <textarea
          placeholder="Conteúdo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
          rows={4}
        />

        <div className="mb-2">
          <label className="text-sm text-gray-600 block mb-1">Criado em:</label>
          <input
            type="date"
            value={createDate}
            onChange={(e) => setCreateDate(e.target.value)}
            className="w-full p-2 border rounded text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm text-gray-600 block mb-1">Prazo:</label>
          <input
            type="date"
            value={deadLine}
            onChange={(e) => setDeadLine(e.target.value)}
            className="w-full p-2 border rounded text-sm"
          />
        </div>

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

        {isEditing && (
          <button
            onClick={handleDelete}
            className="w-full bg-red-600 text-white p-2 rounded mt-2 hover:bg-red-700 transition"
          >
            Excluir
          </button>
        )}
      </div>
    </div>
  );
}
