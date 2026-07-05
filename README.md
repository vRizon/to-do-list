# Todo List

A minimal dark-mode task manager built with React.

---

## Features

- Add tasks by clicking the button or pressing Enter
- Check off tasks to mark them as done
- Filter tasks by All, Active, or Done
- Status dropdown per task — Not started, In progress, Done

---

## Built With

- React
- CSS (no UI library)
- Inter font via Google Fonts

---

## Concepts Practiced

- `useState` for tasks and input
- Controlled inputs
- Lifting state up
- Props and event handlers
- Conditional class names
- Array methods — `map`, `filter`
- Form submission with Enter and button click
- Toggle logic

---

## Getting Started

```bash
git clone https://github.com/YOUR-USERNAME/todo-list.git
cd todo-list
npm install
npm run dev
```

---

## Project Structure

```
src/
├── components/
│   ├── Header.js
│   ├── TaskList.js
│   └── Task.js
├── index.css
└── App.js
```

---

## How to Use

1. Type a task in the input and press **Enter** or click **+**
2. Click the checkbox to mark a task as done
3. Use the status dropdown to set — Not started, In progress, or Done
4. Filter tasks using the **All / Active / Done** buttons
