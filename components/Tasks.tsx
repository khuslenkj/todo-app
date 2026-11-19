"use client";

import { Trash, Check } from "lucide-react";
import { TaskType } from "@/types";
import { title } from "process";
import { Input } from "./Input";

type taskListProps = {
  task: TaskType;
  onDelete: (id: string) => void;
  onUpdate: (id: string) => void;
};

export const Tasks = ({ task, onDelete, onUpdate }: taskListProps) => {
  const handleDelete = () => {
    onDelete(task.id);
  };
  const handleToggle = () => {
    onUpdate(task.id);
  };

  return (
    <div
      className={`w-158 h-15 flex px-9.75 items-center justify-between rounded-xl ${task.completed ? `bg-[#F8FAF8]` : `bg-transparent`}`}
    >
      <div className="flex items-center gap-6">
        <button
          onClick={handleToggle}
          className={`size-5.5 border rounded-xl flex items-center justify-center cursor-pointer ${task.completed ? `bg-[#3A8366] border-[#3A8366]` : `bg-transparent border-[#BDCDC2]`}`}
        >
          {task.completed && <Check size={16} color="white" />}
        </button>
        <div
          className={`text-sm font-normal ${task.completed ? `text-[#93A096] line-through` : `text-[#30483C]`}`}
        >
          {task.title}
        </div>
      </div>
      <button onClick={handleDelete} className="cursor-pointer size-7 flex justify-center items-center rounded-sm hover:bg-red-400">
        <Trash size={16} color="#93A198" />
      </button>
    </div>
  );
};
