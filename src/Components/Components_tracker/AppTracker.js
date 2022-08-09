import Header from "./Header";
import Tasks from "./Tasks";
import AddTask from "./AddTask";
//import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import Alert from "./Alert";
function AppTracker() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch(
      'http://localhost:5000/tasks')
    const data = await res.json()

    return data 
  }

  const fetchTask = async (id) => {
    const res = await fetch(
      `http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data 
  }

  const addTask = async (task) => {
    const res = await fetch(
      'http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      })

      const data = await res.json()

      setTasks([...tasks, data])
    //const id = Math.floor(Math.random() *
    //10000 ) + 1
    //const newTask = {id, ...task}
   // setTasks([...tasks, newTask])
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })

    setTasks(tasks.filter((task) => task.id !== 
    id))
  } 
  
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle,
    reminder: !taskToToggle.reminder}

    const res = await fetch(
      `http://localhost:5000/tasks/${id}`,{
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask)
      })

      const data = await res.json()
      
    setTasks(
      tasks.map((task) => 
        task.id === id ? 
        {...task, reminder: data.reminder } 
        : task     
      )
    )
  }

  return (
    // <center>
      <div className="container">
      <Header onAdd={() => 
      setShowAddTask(!showAddTask)} 
      showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? 
      <Tasks tasks={tasks}
      onDelete={deleteTask} 
      onToggle={toggleReminder}
      /> : 'No Tasks to Show '}
      {/* <Footer /> */}
      <Alert tasks={tasks} />
    </div>
    // </center>
  );
}

export default AppTracker;