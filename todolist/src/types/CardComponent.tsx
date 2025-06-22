export interface CardContent {
  id: string;
  title: string;
  content: string;
  columnId: number;
  onEdit: () => void;
}
