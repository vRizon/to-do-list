import { useState } from "react";
import Task from "./Task";

export default function TaskList({
  tasks = [],
  onAddTask,
  onChecked,
  onDelete,
  onStatusChange,
}) {
  const [newTask, setNewTask] = useState("");

  const [sortBtn, setSortBtn] = useState("All");
  let sortedTasks;

  function handleSubmit(e) {
    e.preventDefault();
    if (!newTask) return;

    const task = { id: Date.now(), text: newTask, status: "not started" };
    onAddTask(task);

    setNewTask("");
  }

  if (sortBtn === "All") sortedTasks = tasks;
  if (sortBtn === "Active")
    sortedTasks = tasks.filter((task) => task.status === "not started");
  if (sortBtn === "Done")
    sortedTasks = tasks.filter((task) => task.status === "done");
  return (
    <>
      <h2 className="todo-label">What do you want to do today?</h2>
      <form className="todo-input-row" onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          placeholder="Type your task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <button className="todo-add-btn">+</button>
      </form>

      <div className="todo-filters">
        <button
          className={
            sortBtn === "All"
              ? "filter-pill filter-pill--active"
              : "filter-pill"
          }
          onClick={() => setSortBtn("All")}
        >
          All
        </button>
        <button
          className={
            sortBtn === "Active"
              ? "filter-pill filter-pill--active"
              : "filter-pill"
          }
          onClick={() => setSortBtn("Active")}
        >
          Active
        </button>
        <button
          className={
            sortBtn === "Done"
              ? "filter-pill filter-pill--active"
              : "filter-pill"
          }
          onClick={() => setSortBtn("Done")}
        >
          Done
        </button>
      </div>
      <div className="task-list">
        {sortedTasks.map((item, i) => (
          <Task
            key={item.id}
            item={item}
            onChecked={onChecked}
            onDelete={onDelete}
            onStatusChange={onStatusChange}
          />
        ))}
      </div>
    </>
  );
}
