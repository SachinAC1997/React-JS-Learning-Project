import React, { useEffect } from 'react'

const Alert = ({tasks}) => {
  let d = new Date()
  let year = 0, month = 0, date = 0, hour = 0
  // , minute = 0 

  useEffect(() => {
    setInterval(() => {
      tasks.map((task) => (
       task.reminder && check(task)
      ))
    }, 600000)
  })

  const check = (task) => {
    const d1 = new Date(task.day)
    year = d.getFullYear() === d1.getFullYear()
    month = d.getMonth() === d1.getMonth()
    date = d.getDate() === d1.getDate()
    hour = d.getHours() === d1.getHours()
    // minute = d.getMinutes() === d1.getMinutes()
    // console.log(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes())
    // console.log(d1.getFullYear(), d1.getMonth(), d1.getDate(), d1.getHours(), d1.getMinutes())
    // console.log(year, month, date, hour, minute)
    // console.log(task.text)
    if(year && month && date && hour) {
      if(window.confirm(`Task ${task.id}:  ${task.text} \n Let's finish the task`))
      {
      console.log('macha time agirbeku thika muchkond nodu')
      } else {
        alert('You have not completed your task')
      }
    }
  }

  return (
    <div>

    </div>
  )
}

export default Alert

  // const msg = () => {
  //   setTimeout(alert('i am'), 1000)
  // }