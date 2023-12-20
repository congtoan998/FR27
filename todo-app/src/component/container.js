import React from "react";
import Form from "./smallCom/form";
import Filter from "./smallCom/filter";
import List from "./smallCom/list";
import './todoapp.scss'

export default function Container(){
    return(
        <div className="todo-container-wrapper">
            <div className="todo-container">
                <Form></Form>
                <Filter></Filter>
                <List></List>
            </div>
        </div>
    )
}