import React from "react";
import "./counter.scss";
import Num from './num'
import MyButton from "../Mybutton";

export default function Counter2(props) {
        let Myname = "Công Toàn";

        const hello = function(str) {
            alert(str +" "+ Myname)
        }
    
        const Bye = function(){
            alert('Bye')
        };
        return (
        <div class="counter">
            <h2 style={{color: 'var(--red)', fontSize: '1.2em'}}>{props.heading}</h2>
           <Num start={props.startC}/>
           <MyButton color="yellow" onClick={() => alert("Pause")}>Pause</MyButton>
            <div class="counter__actions">
                <button class="btn btn--yellow" onClick={() => hello('Xin Chào')} >Xin chào</button>
                <button class="btn btn--blue"onClick={Bye} >Tạm biệt</button>
            </div>
        </div>
          );
}