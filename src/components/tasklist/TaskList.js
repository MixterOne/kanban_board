import React from "react";
import "./tasklist.css";
import PropTypes from "prop-types"

import TaskItem from "../taskItem/TaskItem";

const TaskList = ({ title, taskState, onAddTask, tasks, onTaskUpdate, onDeleteTask }) => {

    const addTask = () => {
        onAddTask("Nova Tarefa", taskState)
    }

    return ( 
        <div className="tasklist">
            <div className="title">{title}</div>
            <div className="content">
                {tasks.map((task) => {
                        return (
                        <TaskItem 
                        key={task.id}
                        id={task.id}
                        title={task.title} 
                        taskState={task.state}
                        onTaskUpdate={onTaskUpdate}
                        onDeleteTask={onDeleteTask} 
                        />
                        )
                    })}
            </div>
            {tasks.length === 0 && <div className="empty-list">Lista Vazia</div>}
            <button onClick={addTask}>Adicionar Tarefa</button>
        </div>
     );
}

TaskList.propTypes = {
    title: PropTypes.string.isRequired,
    onAddTask: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired
}
 
export default TaskList;