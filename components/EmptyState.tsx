import { Check } from "lucide-react";
import { TaskType } from "@/types";

type StyleProp = {
  hasTasks: boolean;
  hidePage: string
};

export const EmptyState = ({ hasTasks, hidePage }: StyleProp) => {
  return (
    <div
      className={`flex h-60 w-full flex-col items-center justify-center space-y-2 ${hidePage}`}
    >
      <div className="size-14 rounded-[28px] bg-[#F0F6F2] flex justify-center items-center ">
        <Check className="size-6 text-[#6C9B82]" />
      </div>
      <div className="text-base text-[#304C3E] font-semibold ">
        {hasTasks ? "No task here" : "Your list starts here"}
      </div>
      <div className="text-sm text-[#7A8881] font-normal ">
        {hasTasks ? "Try another filter to see your tasks." : "Add your first task above."}
      </div>
    </div>
  );
};
