import React, { useCallback, useEffect, useState } from 'react'
import { useAuth } from '../auth'

const ProfileDetails = ({ onClick }) => {
  const auth = useAuth()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState(0)
  const [phoneNumber, setPhoneNumber] = useState()
  const [country, setCountry] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [server, setServer] = useState([])

  const update = {name, age, email, phoneNumber, 
    country, state, city} 
  
  const getData = useCallback(() => {
    setName(auth.user.name)
     setEmail(auth.user.email)
  }, [auth.user.email, auth.user.name])

  useEffect(() => {
    const getTasks = async () => {
      const profileFromServer = await fetchTasks()
      setServer(profileFromServer)
    }
    getTasks()
    getData()
  }, [getData])

  const fetchTasks = async () => {
    const res = await fetch(
      'http://localhost:5000/server')
    const data = await res.json()

    return data
  }

  const addTask = async (update) => {
    const res = await fetch(
      'http://localhost:5000/server',{
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(update)
      })

      const data = await res.json()
      setServer([...server, data])
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(update)
  }

  const DisplayImage = () => {
    const image = auth.user.name;
    let part = image.substring(0, 2);
    part = part.toUpperCase(); 
    return part
  }

  return ( 
    <>
    <div className='profile-head'>
    <p className='profile-image'>{<DisplayImage />}</p>
    <button className='signup signup-position profile-button' onClick={onClick}>Logout</button>
    </div>
    <form className='nones' onSubmit={handleSubmit}>
        <div className='form-div'>
          <label htmlFor='name'>Username:</label>
          <input type='text' id='name' 
          value={name} readOnly/>
        </div>
        <div className='form-div'>
          <label htmlFor='age'>Age:</label>
          <input type='number' id='age' min={0}
          onChange={e => setAge(e.target.value)} 
          value={age} required/>
        </div>
        <div className='form-div'>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' 
           value={email} readOnly/>
        </div>
        <div className='form-div'>
          <label htmlFor='phone'>Phone Number:</label>
          <input type='tel' id='phone' className='tel-width'
          pattern='[0-9]{10}' placeholder='0123456789'
          onChange={e => setPhoneNumber(e.target.value)}
          value={phoneNumber} required/>
        </div>
        <div className='form-div'>
          <label htmlFor='country'>Country:</label>
          <input type='text' id='country' placeholder='INDIA'
          onChange={e => setCountry(e.target.value)} 
          value={country} required/>
        </div>
        <div className='form-div'>
          <label htmlFor='state'>State:</label>
          <input type='text' id='state' placeholder='KARNATAKA'
          onChange={e => setState(e.target.value)} 
          value={state} required/>
        </div>
        <div className='form-div'>
          <label htmlFor='city'>City:</label>
          <input type='text' id='city' placeholder='SHIVAMOGGA'
          onChange={e => setCity(e.target.value)} 
          value={city} required/>
        </div>
        <input className='signup profile-save'
         type="submit" value="Save" />
    </form>
    </>
  )
}

export default ProfileDetails
