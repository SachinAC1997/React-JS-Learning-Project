import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'

const SignInUp = () => {
  const [signin, setSignIn] = useState(false)
  // const [signup, setSignUp] = useState(false)
  // console.log('signin '+ signin)

  const onClickhandler = () => {
    setSignIn(!signin)
  } 

  return (
    <center>
    <div className='Apps'>
      <div className='form-sign'>
      {/* {signin && <button className='signup' onClick={() => setSignIn(!signin)}>Sign In</button>} */}
      {/* {!signin && <button className='signup signup-position' onClick={() => setSignIn(!signin)}>Sign Up</button>} */}
      {!signin && <Login onClick={onClickhandler} />}
      {signin && <SignUp onClick={onClickhandler} />}
      </div>
    </div>
    </center>
  )
}

export default SignInUp
