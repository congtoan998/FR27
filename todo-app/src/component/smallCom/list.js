import React from "react";
import '../todoapp.scss'
import Item from "./todoitem";

export default function List(props) {

  return (
    <div className="todo-list-container">
      {props?.todos?.map((todo) => (
        <Item todo={todo} key={todo.id}
        handleDeleteItem={props.handleDeleteItem}
        handleToggleComplete={props.handleToggleComplete} 
        handleEdit={props.handleEdit} />
      ))}
    </div>
  )

}

// handleToggleComplete = {props.handleToggleComplete}