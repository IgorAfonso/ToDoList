export interface CardContent {
  id: string;
  title: string;
  content: string;
  columnId: number;
  createDate: string | Date;
  deadLine: string | Date;
  onEdit: () => void;
}
