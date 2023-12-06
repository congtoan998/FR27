import React from "react";
import '../todoapp.scss'

export default function Form(){
    return(
        <div class="todo-form-container">
        <form>
            <input type="text" placeholder="What need to be done?" />
        </form>
    </div>
    )
}