import { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

const initialTasks = [
  {
    id: 1,
    text: "Work n History wireframes",
    status: "not started",
  },
  { id: 2, text: "Edit July 03 clips", status: "done" },
  { id: 3, text: "Drawing 2 min", status: "in progress" },
];

export default function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleChecked(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id
          ? { ...task, status: task.status === "done" ? "not started" : "done" }
          : task,
      ),
    );
  }

  //if id===id then delete that item from array

  function handleDelete(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="todo-wrapper">
      <Header />
      <hr className="todo-divider" />
      <TaskList
        tasks={tasks}
        onAddTask={handleAddTask}
        onChecked={handleChecked}
        onDelete={handleDelete}
      />
    </div>
  );
}
