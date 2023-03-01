import React, {useState} from 'react';
//import './App.css';
import TasksList from './TasksList';


function App() {
 const [tasks, setTasks] =  useState(['task1', 'task2'])
  return (
    <>
 
    <TasksList tasks={tasks}/>
    <input type="text" placeholder='Your Name Please'/>
<button> Add Task</button>
<button> Clear Task List</button>
<div>
  0 items left on your task list
</div>
    </>
  )
}

export default App;
