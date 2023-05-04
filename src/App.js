
import { useState } from 'react';
import './App.css';
import { Tasks } from './Tasks';

function App() {

const [toDoList, setToDoList] = useState([]);
const [newTask, setNewTask] = useState('');

const handleChange = (event) => {
  setNewTask(event.target.value)
};

const addTask = () => {
  const task = {
    id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
    taskName: newTask,
    completed: false
  }
  setToDoList([...toDoList, task]);
};

const deleteTask = (id) => {
 const newToDoList = toDoList.filter((task) => {
  if (id === task.id) {
    return false;
  }
  else {
    return true;
  }

  // you can replace is else statement with 'return task !== taskName'
 })

 setToDoList(newToDoList);
}

const completeTask = (id) => {
  setToDoList(toDoList.map((task) => {
    if (id === task.id) {
      return {...task, completed: true};
    }
    else {
      return task;
    }
  }));

};
 
  return (
    <div className='App'>
      <div className='addTask'>
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        {toDoList.map((task) => {
         return (
          <Tasks 
            taskName={task.taskName}
            id={task.id}
            completed={task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
         );
        })}
      </div>
    </div>
  );
}

  
export default App;
