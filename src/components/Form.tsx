import { ListItem } from "@/types";
import { useState } from "react";
type FormProp = {
  addTasks: (task: ListItem) => void;
};
const Form = ({ addTasks }: FormProp) => {
  const [text, setText] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text) {
      alert("Enter a task");
    }

    addTasks({
      id: new Date().getTime().toString(),
      desc: text,
      isCompleted: false,
    });
    setText("");
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border-2 h-8"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="border-2 bg-black text-white p-1">
          Submit
        </button>
      </form>
    </div>
  );
};
export { Form };
