import React, { useEffect, useState, useTransition } from 'react'
import "./login.css"

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [isShow,setIsShow] = useState(false)

    const handleEmail = (e)=>{
      console.log(e)
      setEmail(e.target.value)
    }
    const handlePassword = (e)=>{
      console.log(e)
      setPassword(e.target.value)
    }

    const showEmail = ()=>{
      setIsShow(!isShow)
    }
    console.log("EMail",email,password)
  return (
    <div className='container'>
     <h2 className='headText'>Login Page</h2>
     <div className='formContainer'>
        <div className='flexDiv'>
           <h3 style={{width:"88px"}}>Email:</h3>
           <input type='text' value={email} onChange={handleEmail}/>
        </div>
        <div className='flexDiv'>
        <h3 style={{width:"88px"}}>Password:</h3>
        <input type='text' value={password}  onChange={handlePassword}/>
        </div>
        <div>
            <button onClick={showEmail}>Login</button>
        </div>
     </div>
    {isShow ?
    <div>
     <h1>{email}</h1>
     <h1>{password}</h1>
    </div> : <div></div>
    }
    </div>
  )
}

export default Login