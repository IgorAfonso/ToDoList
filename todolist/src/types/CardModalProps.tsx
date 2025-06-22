export interface CardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: {
    title: string;
    content: string;
    columnId: number;
    id?: string;
    createDate: string;
    deadLine: string;
  }) => void;
  onDelete?: () => void;
  initialId?: string;
  initialTitle?: string;
  initialContent?: string;
  initialColumnId?: number;
}
