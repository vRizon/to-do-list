import { useState } from "react";

export default function Header({ lightMode, setLightMode }) {
  // const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="todo-header">
      <div>
        <h3 className="todo-greeting">Good morning,</h3>
        <h1 className="todo-name">John Doe</h1>
      </div>
      <div className="toggle-wrap">
        <span className="toggle-label">Dark mode</span>
        <div className="toggle" onClick={() => setLightMode(!lightMode)}>
          <div className="toggle-dot" />
        </div>
      </div>
    </div>
  );
}
