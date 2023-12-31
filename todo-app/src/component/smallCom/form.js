import React, { useEffect, useState } from "react";
import '../todoapp.scss'

export default function Form(props) {
    const [items, setToItems] = useState("")
    const handleChange = (event) => {
        const newData =  event.target.value
        setToItems(newData) 
    }

    useEffect(() => {
        setToItems(props.initialContent || "");
      }, [props.initialContent]);

    return (
        <div className="todo-form-container">
            <form id="form" onSubmit={(event) => {
                event.preventDefault();
                props.handleAddItems(items);
                setToItems("")
            }}>
                <input type="text" placeholder="What need to be done?" onChange={handleChange} value={items} />
            </form>
        </div>
    )
}
