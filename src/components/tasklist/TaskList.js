import React from "react";
import "./tasklist.css"

const TaskList = ({ title }) => {
    return ( 
        <div className="tasklist">
            <div className="title">{title}</div>
            <div className="content"></div>
        </div>
     );
}
 
export default TaskList;