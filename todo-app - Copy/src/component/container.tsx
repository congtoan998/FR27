import React, { useEffect, useState } from "react";
import Form from "./smallCom/form";
import Filter from "./smallCom/filter";
import List from "./smallCom/list";
import './todoapp.scss'

const todos = [
  {
    id: 1,
    content: "Ăn bánh mì",
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



export default function Container() {
  const [todoitems, setToItems] = useState(() => {
    // Retrieve todos from localStorage or use defaultTodos
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    return storedTodos || todos;
  });

  // Update localStorage whenever todoitems change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoitems));
  }, [todoitems]);

  useEffect(() => { setToItems(todos); }, []);
  
  const [itemContent, setItemContent] = useState("");
  const [editItemId, setEditItemId] = useState(null);
  const [state, setState] = useState(0);
  const [filterItem, setfilterItem] = useState([]);

  function newState(value) {
    setState(value);
  }

  useEffect(() => {
    if (state === 1) {
      setfilterItem(todoitems.filter((i) => !i.isCompleted));
    }
    if (state === 2) {
      setfilterItem(todoitems.filter((i) => i.isCompleted));
    }
    if (state === 0) {
      setfilterItem(todoitems);
    }
  }, [state, todoitems]);

  const handleAddItems = (items) => {
    if (editItemId !== null) {
      const updatedItems = todoitems.map((item) =>
        item.id === editItemId ? { ...item, content: items } : item
      );
      console.log('Hello')
      console.log(itemContent)
      setToItems(updatedItems);
      setEditItemId(null);
      setItemContent("");
    } else {
      console.log("Hello");
      let i = {
        id: todoitems.length > 0 ? todoitems[todoitems.length - 1].id + 1: 1,
        content: items,
        isCompleted: false,
      };
      setToItems([...todoitems, i])
    }
  }

  const handleDeleteItem = (itemId) => {
    const updatedItems = todoitems.filter((item) => item.id !== itemId);
    setToItems(updatedItems);
    console.log(updatedItems)
  };

  const handleToggleComplete = (itemId) => {
    const updatedItems = todoitems.map((item) =>
      item.id === itemId ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setToItems(updatedItems);
  };

  const handleEdit = (itemId) => {
    const editItems = todoitems.find((item) => item.id === itemId);
    setEditItemId(itemId);
    console.log(editItems)
    setItemContent(editItems.content);
    console.log(editItems.content)
  };

  const handleSearch = (keyword) => {
    const filteredItems = todos.filter((item) =>
      item.content.toLowerCase().includes(keyword.toLowerCase())
    );
    setfilterItem(filteredItems);
  };

  return (
    <div className="todo-container-wrapper">
      <div className="todo-container">
        <Form handleAddItems={handleAddItems} initialContent={itemContent}></Form>
        <Filter len={filterItem.length} changeState={newState} handleSearch={handleSearch} ></Filter>
        <List todos={filterItem} handleDeleteItem={handleDeleteItem} handleToggleComplete={handleToggleComplete} handleEdit={handleEdit} ></List>
      </div>
    </div>
  )
}

//handleToggleComplete = {handleToggleComplete}