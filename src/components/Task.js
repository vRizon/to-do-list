import { useState } from "react";

export default function Task({ item, onChecked, onDelete }) {
  //when box is checked => that task status is "done", pass a key
  const [check, setCheck] = useState(false);

  return (
    <div className="task-row">
      <input
        className="task-checkbox"
        type="checkbox"
        value={item.status === "done"}
        onChange={() => onChecked(item.id)}
      ></input>
      <span className="task-text">{item.text}</span>
      <select className="task-select" value={item.status}>
        <option value="not started">Not started</option>
        <option value="in progress">In progress</option>
        <option value="done">Done</option>
      </select>

      <button className="task-delete" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </div>
  );
}
