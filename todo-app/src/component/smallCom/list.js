import React from "react";
import '../todoapp.scss'
import Item from "./todoitem";

export default function List() {

  const todos = [
    {
      id: 1,
      content : "Ăn bánh mì",
      isCompleted: true,
    },
    {
      id: 2,
      content: 'Uống một tách trà nóng',
      isCompleted: false,
    },
    {
      id: 3,
      content: 'Đến Academy học lập trình',
      isCompleted: false,
    },
    {
      id: 4,
      content: 'Ăn trưa cùng crush',
      isCompleted: false,
    },
    {
      id: 5,
      content: 'Thực hành lập trình',
      isCompleted: false,
    }
  ];

  return (
    <div className="todo-list-container">
      {todos.map((todo) => (
        <Item todo={todo} key={todo.id} />
      ))}
    </div>
  )

}