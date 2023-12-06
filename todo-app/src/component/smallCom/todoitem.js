import React from "react";
import '../todoapp.scss'

export default function Item({ content, isCompleted, onEdit, onDelete }){
    return (
        <div className="todo-item-container">
          <span className="todo-item-toggle">
          <img
            src={isCompleted ? '/assets/complete-tick.svg' : '/assets/active-tick.svg'}
            alt="tick"
            />  
          </span>
          <div className={`todo-item-content ${isCompleted ? 'completed' : ''}`}>{content}</div>
          <div className="todo-item-options">
            <span className="icon-btn" onClick={onEdit}>
              <img src="/assets/edit.svg" alt="edit" />
            </span>
            <span className="icon-btn" onClick={onDelete}>
              <img src="/assets/delete.svg" alt="close" />
            </span>
          </div>
        </div>
      );
    };

