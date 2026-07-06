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
  const [lightMode, setLightMode] = useState(false);

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

  function handleDelete(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  document.body.style.background = lightMode
    ? "linear-gradient(135deg, #f0f0ed 60%, #f0e0e8 100%)"
    : "radial-gradient(50% 50% at 50% 50%, #623A45 0%, #26302C 93.27%)";

  // className={`todo-wrapper ${lightMode ? "light-mode":""}`}
  return (
    <div className={`todo-wrapper ${lightMode ? "light-mode" : ""}`}>
      <Header lightMode={lightMode} setLightMode={setLightMode} />
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
