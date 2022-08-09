import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../auth"

const Login = ({ onClick }) => {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    password: '',
  })
  const auth = useAuth()
  const naviagte = useNavigate()
  const collect = []
  let i = 0, valid = false
  const [checkLogin, setCheckLogin] = useState([])
  const [show, setShow] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const signupFromserver = await fetchSignUp()
      setCheckLogin(signupFromserver)
    }
    getData()
  }, [])

  const fetchSignUp = async () => {
    const res = await fetch(
      'http://localhost:5000/signup')
    const data = res.json()
    return data
  }
  // console.log(check)
  const checkSignIn = (check) => {
    collect[i++] = (details.name === check.name && 
      details.email === check.email && 
      details.password === check.password)
    // console.log(collect)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    checkLogin.map((check) => (
      checkSignIn(check)
    ))
    for(let x in collect) {
      if(collect[x] === true) {
        valid = true
      }
    }
    // console.log(valid)
    if(valid) {
      auth.login(details)
    } else {
      alert("Please enter valid details or\nCreate a new login id")
    }
    i = 0
    valid = false
    naviagte('/profile',{replace: 1})
  }

  return (
    <form className="nones" onSubmit={submitHandler}>
        <h1>Sign In</h1>
        {/* <hr/> */}
        {/* {(auth.error !== "") ? (<div className='error'>{auth.error}</div>) : ""} */}
        <div className='form-div'>
          <label htmlFor='name'>User Name:</label>
          <input type="text" name="name" id="name"
          onChange={e => setDetails({...details, name: e.target.value})} 
          value={details.name} required/>
        </div>
        <div className='form-div'>
          <label htmlFor='email'>Email:</label>
          <input type="email" name="email" id="email"
          onChange={e => setDetails({...details, email: e.target.value})} 
          value={details.email} required/>
        </div>
        <div className='form-div'>
          <label htmlFor='password'>Password:</label>
          <input type={show ? 'text' : 'password'} 
          name="password" id="password" 
          onChange={e => setDetails({...details, password: e.target.value})} 
          value={details.password} required/>
        </div>
        <div className="form-div-check">
          <label htmlFor="show">Show password</label>
          <input type='checkbox' id="show"
          onChange={() => setShow(!show)} />
        </div>
        <input type="submit" value="LOGIN" />
        <button className='signup signup-position' onClick={onClick}>Sign Up</button>
    </form>
  )
}

export default Login
  // const [error, setError] = useState("");
  // setError("Details Do not match")
  //const location = useLocation()
 // const redirectPath = location.state?.path || '/'


//  <form className="App" onSubmit={submitHandler}>
//       <div className='form-inner'>
//         <h2>Login</h2>
//         {/* {(auth.error !== "") ? (<div className='error'>{auth.error}</div>) : ""} */}
//         <div className='form-group'>
//           <label htmlFor='name'>User Name:</label>
//           <input type="text" name="name" id="name"
//           onChange={e => setDetails({...details, name: e.target.value})} 
//           value={details.name} />
//         </div>
//         <div className='form-group'>
//           <label htmlFor='email'>Email:</label>
//           <input type="email" name="email" id="email"
//           onChange={e => setDetails({...details, email: e.target.value})} 
//           value={details.email} />
//         </div>
//         <div className='form-group'>
//           <label htmlFor='password'>Password:</label>
//           <input type="password" name="password" id="password" 
//           onChange={e => setDetails({...details, password: e.target.value})} 
//           value={details.password} />
//         </div>
//         <input type="submit" value="LOGIN" />
//       </div>
//     </form>