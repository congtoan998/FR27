import React, { useState } from "react";
import "./counter.scss";
import "./num.scss";

export default function Num(props) {
    const [value, setValue] = useState(Number(props.start));
    const HandleChange = (k) => {
        setValue(Number(value + k))
    }

    return(
        <div style={{fontWeight: 'bold'}}>
            <span class="btn-change" onClick = {() => HandleChange(Number(-2))}>&lt;</span>
            <span>{value}</span>
            <span class="btn-change" onClick = {() => HandleChange(Number(1))}>&gt;</span>
        </div>)
}