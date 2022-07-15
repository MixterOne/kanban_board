import { useState } from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar';
import TaskList from './components/tasklist/TaskList';

const task = {
  id: 0,
  title: 'Nova Tarefa',
  state: 'pendente'
}

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

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="bx-1">
        <TaskList title="Pendente" onAddTask={addTask} tasks={tasks} />
        </div>
        <div className="bx-2">
        <TaskList title="Fazendo" />
        </div>
        <div className="bx-3">
        <TaskList title="Completo" />
        </div>  
      </div>
    </div>
  );
}

export default App;
