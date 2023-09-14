import React from 'react'

function Login() {
  return (
    <div>
         <div className='s-in'>
       <div className='formy'>
        <div className='head'>
          <span>Login</span>
        </div>
        <div className='gmail fl-col'>
          <input type='email' placeholder='Enter your gmail' />
          <span className='o0'>Enter valid email</span>
        </div>
        <div className='password fl-col'>
        <input type='password' placeholder='Enter your gmail' />
        <span className='o0'>Enter valid password</span>
        </div>
       
        <div className='hv-acc'>
            <span>Don't have an account</span>
            <a href='/signup'>Sign up</a>
        </div>
        <div className='sign-button fl-col'>
         <button>Submit</button>
        </div>
       </div>
    </div>
    </div>
  )
}

export default Login