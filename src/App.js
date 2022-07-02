// App for JSON-SERVER backend
// Example of DB included in db.json in root directory
// You need to install json-server : 'npm install json-server'
// Then run 'npm run server' 
// Rename this file to 'App.js' in order to see the React App

import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'


function App() {
  const name = "Brad"
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks from server
  const fetchTasks = async() => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  const fetchTask = async(id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }
  // Add Task
  const addTask = async (task) => {

    const res = await fetch('http://localhost:5000/tasks',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })


    const data = await res.json()
    setTasks([...tasks, data])

  }
  // Delete Task
  const deleteTask = async (id) => {
    await fetch (`http://localhost:5000/tasks/${id}`,{
      method: 'DELETE',
    })
    setTasks(tasks.filter((task) => task.id !== id))  // Delete the task thanks to its own ID.
 
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle,
    reminder : !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) =>
      task.id === id ? {...task, reminder: data.reminder} : task
      )
    )
  }
  return (
    <Router>
      <div className="container">
        <Header
          title={name} 
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask} />}  
        {/* && = if without else statement */}
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}  onToggle={toggleReminder}/> : 'No tasks there.'}
        <Footer />
      
      </div>
    </Router>
  )
}



export default App
