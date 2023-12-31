import React from "react";
import '../todoapp.scss'
import { getValue } from "@testing-library/user-event/dist/utils";

export default function Item(props) {
  const handleEdit = () => {
    props.handleEdit(props.todo?.id) 
    // console.log(props.todo?.content);
  };


  const handleDelete = () => {
    props.handleDeleteItem(props.todo?.id);
    console.log("hello")
  };

  console.log(props.todo?.isCompleted);

  return (
    <div className="todo-item-container">
      <span className="todo-item-toggle" >
        <img
          src={props.todo?.isCompleted ? '/assets/complete-tick.svg' : '/assets/active-tick.svg'}
          alt="tick" onClick={(event) => {
            event.preventDefault();
            props.handleToggleComplete(props.todo?.id);
            console.log("hello")}}
        />
      </span>
      <div className={`todo-item-content ${props.todo?.isCompleted ? 'completed' : ''}`}>{props.todo?.content}</div>
      <div className="todo-item-options">
        <span className="icon-btn" onClick={handleEdit}>
          <img src="/assets/edit.svg" alt="edit" />
        </span>
        <span className="icon-btn" onClick={handleDelete}>
          <img src="/assets/delete.svg" alt="close" />
        </span>
      </div>
    </div>
  );
};

//</div>onSubmit={props.handleToggleComplete(props.todo?.id)}//