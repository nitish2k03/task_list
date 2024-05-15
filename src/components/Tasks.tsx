import { List } from "@/components/List";
import { Form } from "@/components/Form";
import { ListItem } from "@/types";
import { useState, useEffect } from "react";
const Tasks = () => {
  function loadTasks(): ListItem[] {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  }
  function updateStorage(tasks: ListItem[]): void {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  const [tasks, setTasks] = useState<ListItem[]>(() => loadTasks());
  useEffect(() => {
    updateStorage(tasks);
  }, [tasks]);
  const addTasks = (newTask: ListItem) => {
    setTasks([...tasks, newTask]);
  };
  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    );
  };
  return (
    <div className="">
      <Form addTasks={addTasks} />
      {tasks.map((task) => (
        <List task={task} toggleTask={toggleTask} />
      ))}
    </div>
  );
};

export default Tasks;
