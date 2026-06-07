import Tag from "../Tag/tag";
import "./task-card.css";
import delet from "../../assets/delete.png";
function TaskCard() {
  return (
    <article className="task_card">
      <p className="task_text">Sample text</p>
      <div className="task_bottom_line">
        <div className="task_card_tag">
          <Tag tagName="DEV" />
          <Tag tagName="QA" />
        </div>
        <div className="task_delete">
          <img src={delet} alt="" className="delete_icon" />
        </div>
      </div>
    </article>
  );
}

export default TaskCard;
