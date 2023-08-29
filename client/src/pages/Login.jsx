import React from 'react'
import { Link } from 'react-router-dom'


export const Login = () => {
  return (
    <div className='auth'>
        <h1>Login</h1>
        <form>
            <input required type='text' placeholder='username'/>
            <input required type='password' placeholder='password'/>
            <button>Login</button>
            <p>This is an error</p>
            <span>You don't have an account? <Link to= '/register'> Register</Link> </span>
        </form>
    </div>
  )
}
