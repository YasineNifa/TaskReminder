/*import logo from './logo.svg';
import './App.css';*/
/*inside we can put title = "hello"*/

import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
function App() {


  const [showAddForm, setShowAddForm] = useState(false)
  const [tasks, setTasks] = useState([])

// fetch tasks 
  const fetchTasks = async() =>{
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }
  useEffect(() => {
    
    const getTasks = async () =>{
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  },[])
// Delete Task
  const deleteTask = async (id) => {
    /*console.log('delete', id)*/

    await fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE'})

    setTasks(tasks.filter((task)=>task.id !== id))
  }

// Toggle Reminder
  const toggleReminder = (id) =>{
    console.log('reminder', id)
    setTasks(tasks.map((task) => task.id === id ? {... task, reminder: !task.reminder} : task))
  }

/*  const addTask = (task) =>{
    console.log(task)
    const id = Math.floor(Math.random()*1000)+1
    const newTask = {id, ...task}
    setTasks([...tasks,newTask])

  }*/
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks/',{method : 'POST',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    setTasks([...tasks,data])
  }
  return (
    <div className="container">
      
      <Header onAddForm ={() => setShowAddForm(!showAddForm)} showAddForm = {showAddForm}/> 
      {showAddForm && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No task to show')}

    </div>
  );
}

export default App;
