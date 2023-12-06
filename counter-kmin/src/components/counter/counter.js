import React from "react";
import "./counter.scss";

class Counter extends React.Component {

    constructor(){
        super();
        this.Myname = "Công Toàn"
        this.hello = this.hello.bind(this);
        // this.Bye = this.Bye.bind(this);
    }
    


    hello(){
        alert('Hello'+" "+ this.Myname)
    }

    Bye(){
        alert('Bye')
    }

    render() {
      return (
        <div class="counter">
            <h2 style={{color: 'var(--red)', fontSize: '1.2em'}}>Bộ đếm Kmin </h2>
            <div style={{fontWeight: 'bold'}}>1</div>
            <div class="counter__actions">
                <button class="btn btn--yellow" onClick={this.hello} >Xin chào</button>
                <button class="btn btn--blue"onClick={this.Bye} >Tạm biệt</button>
            </div>
        </div>
          );
    }
  }

  export default Counter;