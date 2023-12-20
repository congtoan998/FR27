

import React from "react";

export default function MyButton(props){
    let className = "";
    switch (props.color) {
        case "yellow":
            className = "btn btn--yellow";
            break;
        case "blue":
            className = "btn btn--blue";
            break;
        case "red":
            className = "btn btn--red";
            break;
        default:
            className = "btn";
    }

    let onClick = props.onClick;
    let text = props.children;
    return (
        <button className={className} onClick={onClick}>{text}</button>
    )
}