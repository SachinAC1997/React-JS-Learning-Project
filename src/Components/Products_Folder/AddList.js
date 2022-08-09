import React from 'react'
// import { useNavigate } from 'react-router-dom'
import ListForm from './ListForm'

const AddList = ({ onClick }) => {
  // const navigate = useNavigate()

  const addList = async (list) => {
    await fetch(
      'http://localhost:5000/lists',{
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(list)
      })

    // const data = await res.json()
  }

  return (
    <div className='Apps'>
        <ListForm onAdd={addList} />
      <button className='add-to-product' onClick={onClick}>Products</button>
    </div>
  )
}

export default AddList
