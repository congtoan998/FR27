import React from "react";
import '../todoapp.scss'
import Button from "../AddButton";

export default function Form(){
    return(
        <div className="todo-form-container">
        <form>
            <input type="text" placeholder="What need to be done?" />
        </form>
    </div>
    )
}