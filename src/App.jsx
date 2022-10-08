import { useState } from 'react'
import reactLogo from './assets/react.svg';
import { Header } from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks,setTasks] = useState([]);


  function addTask(taskTitle) {
    setTasksAndSave([...tasks, {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false
    }]);
  }

  return (
    <div className="App">
      <Header onAddTask={addTask} />
      <Tasks />
    </div>
  )
}

export default App
