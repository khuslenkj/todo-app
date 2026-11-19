"use client";
import { Input } from "@/components/Input";
import { EmptyState } from "@/components/EmptyState";
import { Tasks } from "@/components/Tasks";
import { useState, MouseEvent } from "react";
import { TaskType } from "@/types";
import { TaskList } from "@/components/TaskList";
import {ListTodo} from "lucide-react"


const stateCategory = ["All", "Active", "Completed"];

export default function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const hasTasks = tasks.length > 0 ? true : false

  const [btton, setBtton] = useState("All");
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setBtton(event.currentTarget.id);
  };

  const createTask = (title: string) => {
    const newTask: TaskType = {
      id: Date.now().toString(),
      title,
      completed: false,
    };

    setTasks((current) => [newTask, ...current]);
  };

  const toggleTask = (id: string) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id: string) => {
    setTasks((current) => current.filter((task) => task.id !== id));
  };

  const filtered = tasks.filter(
    (state) =>
      btton === "All" ||
      (btton === "Active" ? !state.completed : state.completed),
  );
  const hidePage = filtered.length > 0 ? "hidden" : "flex"

  return (
    <div className="w-screen h-screen bg-[#F1F4F1] p-12 space-y-8 flex flex-col justify-center items-center ">
      <div className="text-3xl text-[#213D35] font-semibold">
        Little List / Todo app
      </div>
      <div className="text-base text-[#65766C] font-normal ">
        Desktop · Mobile · Task rows · Input and checkbox states
      </div>
      <div className="w-2xl bg-white rounded-3xl ">
        <div className="flex mt-8 ml-8 mb-8 items-center gap-3 ">
          <div className="size-11 bg-[#E5F2ED] rounded-2xl flex justify-center items-center">
            <ListTodo color="#23735A" />
          </div>
          <div className="text-6 text-[#213D35] font-semibold  ">My tasks.</div>
        </div>
        <Input onCreateTask={createTask} />
        <div className="h-14.25 pl-130.25 pt-3 ">
          <div className="text-xs text-[#7A8881] font-normal ">
            Enter to add a task
          </div>
        </div>
        <div className="w-full h-12 flex px-8 justify-between items-center rounded-md ">
          <div className="flex gap-7">
            {stateCategory.map((bttn) => (
              <button
                onClick={handleClick}
                key={bttn}
                id={bttn}
                className={
                  btton === bttn
                    ? "text-sm text-[#236B53] h-full font-semibold cursor-pointer border-b-2 border-[#236B53] "
                    : "text-sm text-[#7B8680] h-full font-semibold cursor-pointer border-b-2 border-transparent "
                }
              >
                {bttn}
              </button>
            ))}
          </div>
          <div className="bg-[#F0F4F1] h-5.5 p-1 flex justify-center items-center ">
            {filtered.length}
          </div>
        </div>
        <div className="w-full h-px bg-[#E9EEEB] mb-2 "></div>
        <EmptyState hasTasks={hasTasks} hidePage={hidePage}/>
        <TaskList
          tasks={filtered}
          onDelete={deleteTask}
          onUpdate={toggleTask}
        />
      </div>
    </div>
  );
}