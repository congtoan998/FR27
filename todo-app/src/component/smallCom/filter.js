import React from "react";
import '../todoapp.scss'

export default function Filter(){
    return(
        <div class="todo-filter-container">
        <div class="todo-filter-count">3 items left</div>
        <div class="todo-filter-status">
            <span class="active">
                All
            </span>
            <span>
                Active
            </span>
            <span>
                Complete
            </span>
        </div>
    </div>
    )
}