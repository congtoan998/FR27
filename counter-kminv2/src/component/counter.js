import React from "react";
import '../counter.scss';

class Counter extends React.Component {
    hello() {
        alert("Xin chào.");
    }
    render() {
        return (
            <div className="counter">
                <h2 style={{color: "var(--red)", fontSize: "1.2em"}}>Bộ đếm Kmin</h2>
                <div style={{fontWeight: "bold"}}>1</div>
                <div className="counter__actions">
                    <button className="btn btn--yellow" onClick={this.hello}>Xin chào</button>
                    <button className="btn btn--blue" onClick={() => console.log("Tạm biệt")}>Tạm biệt</button>
                </div>
            </div>
        );
    }
}

export default Counter;