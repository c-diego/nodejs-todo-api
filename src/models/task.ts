export type Task = {
  id?: number;
  description: string;
  priority: number;
  difficult: number;
  category: string;
  startDate: string;
  dueDate: string;
  isComplete?: boolean;
};