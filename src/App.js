import { useState } from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar';
import TaskList from './components/tasklist/TaskList';

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1
  return idAcc
}

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    }
    setTasks((existingTasks) => {
      return [...existingTasks, newTask]
    })
  }

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      })
    })
  }

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id)
    })
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="bx-1">
        <TaskList title="Pendente" 
        onAddTask={addTask} 
        taskState="Pendente"
        tasks={tasks.filter((t) => t.state === "Pendente")} 
        onTaskUpdate={updateTask}
        onDeleteTask={deleteTask}
        />
        </div>
        <div className="bx-2">
        <TaskList title="Fazendo" 
        onAddTask={addTask} 
        taskState="Fazendo"
        tasks={tasks.filter((t) => t.state === "Fazendo")}  
        onTaskUpdate={updateTask}
        onDeleteTask={deleteTask}
        />
        </div>
        <div className="bx-3">
        <TaskList title="Completo" 
        onAddTask={addTask}
        taskState="Completo" 
        tasks={tasks.filter((t) => t.state === "Completo")} 
        onTaskUpdate={updateTask}
        onDeleteTask={deleteTask}
        />
        </div>
          
      </div>
    </div>
  );
}

export default App;
