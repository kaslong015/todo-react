import { useState } from 'react'
import reactLogo from './assets/react.svg';
import { Header } from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks,setTasks] = useState([]);


  function addTask(taskTitle) {
    setTasks([...tasks, {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false
    }]);
  }


  const toggleTaskCompletedById = (taskId) =>{
    const newTask = tasks.map(task => {
      if(task.id == taskId){
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    });
    setTasks(newTask)
  }

  return (
    <div className="App">
      <Header onAddTask={addTask} />
      <Tasks tasks={tasks} onComplete={toggleTaskCompletedById}/>
    </div>
  )
}

export default App
