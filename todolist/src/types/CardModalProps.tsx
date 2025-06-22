export interface CardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: {
    title: string;
    content: string;
    columnId: number;
  }) => void;
  onDelete?: () => void;
  initialTitle?: string;
  initialContent?: string;
  initialColumnId?: number;
}
