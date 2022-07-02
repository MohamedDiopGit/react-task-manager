import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
  const name = "Brad"
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text : 'Go to school',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text : 'Dancing in the night',
        day: 'June 6th at 2:45pm',
        reminder: false,
    },
    {
        id: 3,
        text : 'Play Call of Duty',
        day: 'Jan 12th at 5:10pm',
        reminder: true,
    }

])
  // Add Task
  const addTask = (task) => {
    const id = tasks.length + 1;
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
  // Delete Task
  const deleteTask = (id) => {
    // console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))  // Delete the task thanks to its own ID.
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
      task.id === id ? {...task, reminder: !task.reminder} : task
      )
    )
  }
  return (
    // <div className="container">
    //   <h1>Hello From React</h1>
    //   <h2>Hello {name} / {1+1} / {x ? "Yes" : "No"}</h2>
    // </div>

    // With components
    <div className="container">
      <Header
        title={name} 
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}  
      {/* && = if without else statement */}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}  onToggle={toggleReminder}/> : 'No tasks there.'}
    </div>
  )
}



export default App;
