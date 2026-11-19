import { ChangeEvent, useState, SubmitEvent } from "react";

type taskFormProps = {
  onCreateTask: (title: string) => void;
};

export const Input = ({ onCreateTask }: taskFormProps) => {
  const [taskTitle, setTaskTitle] = useState("");
  const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    onCreateTask(taskTitle);
    setTaskTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-152 h-18.5 bg-[#F4F8F5] p-2 flex items-center gap-2 ml-8 rounded-2xl border border-[#DCE9E2]"
    >
      <input
        type="text"
        placeholder="What needs to get done?"
        value={taskTitle}
        onChange={handleCheck}
        className="focus:bg-white w-113.5 h-14 p-4 text-[#75867E] text-4 font-normal outline-none"
      />
      <button
        disabled={!taskTitle.trim()}
        type="submit"
        className="disabled:cursor-not-allowed disabled:bg-[#D8E5DD] disabled:text-[#63796C] w-32 h-12 flex justify-center items-center bg-[#236B53] text-sm text-white font-semibold rounded-xl"
      >
        + Add task
      </button>
    </form>
  );
};
