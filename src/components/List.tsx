import { ListItem } from "@/types";
type ListProp = {
  task: ListItem;
  toggleTask(id: string): void;
};
const List = ({ task, toggleTask }: ListProp) => {
  return (
    <div className="border-2 my-2 p-2 w-20 flex justify-between">
      <div>{task.desc}</div>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => {
          toggleTask(task.id);
        }}
      />
    </div>
  );
};
export { List };
