interface Todo {
  id: string;
  description: string;
  notes?: string;
  priority: string;
  isDone: boolean;
  dateChanged: number;
  dateFinished?: number;
}

interface TodoSubtasks extends Todo {
  todos?: Todo[];
}
