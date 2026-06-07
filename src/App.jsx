import "./App.css";
import TaskForm from "./components/TaskForm/task-form";
import TaskColumn from "./components/TaskColumn/task-column";

function App() {
  return (
    <div className="app">
      <h1 style={{ textAlign: "center", margin: "50px" }}>Task-Board-App</h1>
      <TaskForm />
      <main className="app_main">
        <TaskColumn title="Ready for Development" />
        <TaskColumn title="In Progress" />
        <TaskColumn title="Ready for Test" />
        <TaskColumn title="Closed" />
      </main>
    </div>
  );
}

export default App;
