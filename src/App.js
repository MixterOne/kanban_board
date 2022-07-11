import './App.css';

import Navbar from './components/navbar/Navbar';
import TaskList from './components/tasklist/TaskList'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <TaskList title="Pendente" />
        <TaskList title="Fazendo" />
        <TaskList title="Completo" />
      </div>
    </div>
  );
}

export default App;
