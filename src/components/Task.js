import { FaTimes } from 'react-icons/fa'  // fa = Font Avewsome

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3>
            {task.text} 
            <FaTimes 
                style={
                    {
                        color: 'red', 
                        cursor:'pointer'
                    }
                }
                onClick={() => onDelete(task.id)}  // Method for passing argument in a function here
            />
        </h3>
        <p>{task.day}</p>
    </div>
  )
}



export default Task