import "./task-column.css";
import TaskCard from "../TaskCard/task-card";
function TaskColumn({ title }) {
  return (
    <>
      <section className="task_column">
        <h2 className="task_column_heading">{title}</h2>
        <TaskCard />
      </section>
    </>
  );
}

export default TaskColumn;
