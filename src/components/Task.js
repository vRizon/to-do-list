import { useState } from "react";

export default function Task({ item, onChecked, onDelete, onStatusChange }) {
  //when box is checked => that task status is "done", pass a key
  // const [check, setCheck] = useState(false);
  let isChecked;
  if (item.status === "done") isChecked = true;
  else isChecked = false;

  // console.log(isChecked);
  function onSelectStatus() {}

  return (
    <div className="task-row">
      <input
        className="task-checkbox"
        type="checkbox"
        value={item.status === "done"}
        checked={isChecked}
        onChange={() => onChecked(item.id)}
      ></input>
      <span className="task-text">{item.text}</span>
      <select
        className="task-select"
        value={item.status}
        onChange={(e) => onStatusChange(item.id, e.target.value)}
      >
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
