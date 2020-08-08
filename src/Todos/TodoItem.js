import React from "react";
import "./Todos.css";

const TodoItem = (props) => {
  return (
    <div className="TodoItem">
      <p className={props.completed ? "completed" : ""}>
        <input
          type="checkbox"
          checked={props.completed}
          onChange={props.completeItem}
        />{" "}
        {props.task} <button onClick={props.deleteItem}> x </button>
      </p>
    </div>
  );
};

export default TodoItem;
