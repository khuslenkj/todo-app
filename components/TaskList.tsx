import { TaskType } from "@/types";
import { Tasks } from "./Tasks";

type taskListProps = {
  tasks: TaskType[];
  onDelete: (id: string) => void;
  onUpdate: (id: string) => void;
};

export const TaskList = ({ tasks, onDelete, onUpdate }: taskListProps) => {
  return (
    <div>
      {tasks.map((task) => (
        <Tasks task={task} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </div>
  );
};
