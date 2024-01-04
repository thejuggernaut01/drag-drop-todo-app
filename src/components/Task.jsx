import classNames from "classnames";
import "./Task.css";
import React from "react";
import { useStore } from "../store";

const Task = ({ title }) => {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );

  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const deleteTask = useStore((store) => store.deleteTask);
  return (
    <div
      className="task"
      draggable
      onDragStart={() => {
        setDraggedTask(task.title);
      }}
    >
      <div>{task.title}</div>
      <div className="buttonWrapper">
        <div>
          <p className="delete" onClick={() => deleteTask(task.title)}>
            x
          </p>
        </div>

        <div className={classNames("status", task.state)}>{task.state}</div>
      </div>
    </div>
  );
};

export default Task;
