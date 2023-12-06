import React from "react";
import "./counter.scss";

export default function Counter2() {
        let Myname = "Công Toàn";

        const hello = function(str) {
            alert(str +" "+ Myname)
        }
    
        const Bye = function(){
            alert('Bye')
        };
        return (
        <div class="counter">
            <h2 style={{color: 'var(--red)', fontSize: '1.2em'}}>Bộ đếm Kmin </h2>
            <div style={{fontWeight: 'bold'}}>1</div>
            <div class="counter__actions">
                <button class="btn btn--yellow" onClick={() => hello('Xin Chào')} >Xin chào</button>
                <button class="btn btn--blue"onClick={Bye} >Tạm biệt</button>
            </div>
        </div>
          );
}