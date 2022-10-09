import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg';
import { Header } from './components/Header';
import Tasks from './components/Tasks';

const LOCAL_STORAGE_KEY = 'todo:tasks';

function App() {
  const [tasks, setTasks] = useState([]);

  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saved) {
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, [])

  function addTask(taskTitle) {
    setTasksAndSave([...tasks, {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false
    }]);
  }

  function deleteTask(taskId) {
    const newtask = tasks.filter(task => task.id !== taskId);
    setTasksAndSave(newtask);
  }


  const toggleTaskCompletedById = (taskId) => {
    const newTask = tasks.map(task => {
      if (task.id == taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    });

    setTasksAndSave(newTask)

  }

  return (
    <div className="App">
      <Header onAddTask={addTask} />
      <Tasks tasks={tasks} onComplete={toggleTaskCompletedById} onDeleteTask={deleteTask} />
    </div>
  )


}

export default App
