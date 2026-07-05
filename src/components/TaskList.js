import { useState } from "react";
import Task from "./Task";

export default function TaskList({ tasks = [], onAddTask, onChecked }) {
  const [newTask, setNewTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!newTask) return;

    const task = { id: Date.now(), text: newTask, status: "not started" };
    onAddTask(task);
  }

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
        <button className="filter-pill filter-pill--active">All</button>
        <button className="filter-pill">Active</button>
        <button className="filter-pill">Done</button>
      </div>
      <div className="task-list">
        {tasks.map((item, i) => (
          <Task key={item.id} item={item} onChecked={onChecked} />
        ))}
      </div>
    </>
  );
}
