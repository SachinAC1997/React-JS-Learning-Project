import React, { useState } from 'react'
import { useEffect } from 'react'

const SignUp = ({ onClick }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)

  const [signup, setSignUp] = useState([])
  const collect = []
  let i = 0, valid = false

  useEffect(() => {
    const getSignUp = async () => {
      const signupFromServer = await fetchSignUp()
      setSignUp(signupFromServer)
    }
    getSignUp()
  }, [])

  const fetchSignUp = async () => {
    const res = await fetch(
      'http://localhost:5000/signup')
    const data = res.json()
    return data
  }

  const addSignUp = async (update) => {
    const res = await fetch(
    'http://localhost:5000/signup',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(update)
    })
    const data = await res.json()

    setSignUp([...signup, data])
  }

  const checkSignUp = (check) => {
    // console.log(check.name === name && check.email === email) 
    collect[i++] = (check.name === name && check.email === email)
    // console.log(collect)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    signup.map((check) => (
      checkSignUp(check)  
    ))
    for(let x in collect) {
      if(collect[x] === true) {
        valid = true
      }     
    }
    // console.log(valid)
    if(!valid) {
      addSignUp({name, email, password})
    } else {
      alert('Username or Email ID already exist \n\nplease use diffrent username or email id')
    }

    setName('')
    setEmail('')
    setPassword('')
    valid = false
    i = 0
  }
  //  console.log(signup)
  
  return (
      <form className='nones' onSubmit={submitHandler}>
        <h1>Sign Up</h1>
        <div className='form-div'>
          <label htmlFor='name'>User Name:</label>
          <input type='text' id='name' value={name}
          onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div className='form-div'>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' value={email}
          onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className='form-div'>
          <label htmlFor='password'>Password:</label>
          <input 
          type={show ? 'text' : 'password'} 
          id='password' value={password}
          onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <div className='form-div-check'>
          <label htmlFor='show'>Show password</label>
          <input type='checkBox' id='show'
          onChange={() => setShow(!show)} />
        </div>
        <input type='submit' value='Save' />
        <button className='signup signup-position' onClick={onClick}>Sign In</button>
      </form>
  )
}

export default SignUp
