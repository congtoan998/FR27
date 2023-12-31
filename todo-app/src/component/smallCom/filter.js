import React, {useState} from "react";
import '../todoapp.scss'

export default function Filter(props) {
    const [searchKeyword, setSearchKeyword] = useState("");

    const handleSearch = (event) => {
        const keyword = event.target.value;
        setSearchKeyword(keyword);
        props.handleSearch(keyword);
    };

    return (
        <div className="todo-filter-container">
            <input className="todo-filter-count" 
                type="text" 
                placeholder={props.len + " items left"}
                value={searchKeyword}
                onChange={handleSearch} />
            <div className="todo-filter-status">
                <span className="active" onClick={() => props.changeState(0)}>
                    All
                </span>
                <span onClick={() => props.changeState(1)}>
                    Active
                </span>
                <span onClick={() => props.changeState(2)}>
                    Complete
                </span>
            </div>
        </div>
    )
}