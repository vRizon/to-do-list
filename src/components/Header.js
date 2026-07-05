export default function Header() {
  return (
    <div className="todo-header">
      <div>
        <h3 className="todo-greeting">Good morning,</h3>
        <h1 className="todo-name">John Doe</h1>
      </div>
      <div className="toggle-wrap">
        <span className="toggle-label">Dark mode</span>
        <label className="toggle">
          <input type="checkbox" />
          <div className="toggle-dot" />
        </label>
      </div>
    </div>
  );
}
