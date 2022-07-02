import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'


function App() {
  const name = "Brad"
  // const x = true
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text : 'Hello',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text : 'Hi',
        day: 'June 6th at 2:45pm',
        reminder: false,
    },
    {
        id: 3,
        text : 'Bye',
        day: 'Jan 12th at 5:10pm',
        reminder: true,
    }

])
  // Delete Task
  const deleteTask = (id) => {
    // console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))  // Delete the task thanks to its own ID.
  }

  return (
    // <div className="container">
    //   <h1>Hello From React</h1>
    //   <h2>Hello {name} / {1+1} / {x ? "Yes" : "No"}</h2>
    // </div>

    // With components
    <div className="container">
      <Header title={name}/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No tasks there.'}
    </div>
  )
}



export default App;
