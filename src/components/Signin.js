import React, { useState } from 'react'
import './style.css'
function Signin() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const submitdetails = ()=>{
    if(email==="" || !email.match(validRegex))
    {
      document.getElementsByClassName('s')[0].classList.remove('o0');
      return
    }
    if(password.length===0)
    {
      document.getElementsByClassName('s')[1].classList.remove('o0');
      return
    }
    if(password!==document.getElementsByClassName('verify')[2].value)
    {
      console.log(password, document.getElementsByClassName('verify')[2].value)
      document.getElementsByClassName('s')[2].classList.remove('o0');
      return
    }
   
      for(let i =0;i<=2;i++)
      {
        if(!document.getElementsByClassName('s')[i].classList.contains('o0'))
        {
          document.getElementsByClassName('s')[i].classList.add('o0');
        }
      }
    
    
    

    
  }
  
  return (
    <div className='s-in'>
       <div className='formy'>
        <div className='head'>
          <span>Sign Up</span>
        </div>
        <div className='gmail fl-col'>
          <input className='verify'  type='email' onChange={(e)=>setemail(e.target.value)} placeholder='Enter your gmail' name='email' required />
          <span className='o0 s'>Enter valid email</span>
        </div>
        <div className='password fl-col'>
        <input className='verify' type='password'  onChange={(e)=>setpassword(e.target.value)} placeholder='Enter your password' name='password' required />
        <span className='o0 s'>Enter valid password</span>
        </div>
        <div className='confirm-password fl-col'>
        <input className='verify' type='text' placeholder='confirm password' required />
        <span className='o0 s'>Enter valid confirm password</span>
        </div>
        <div className='hv-acc'>
            <span>Already have an account</span>
            <a href='/login'>Login</a>
        </div>
        <div className='sign-button fl-col'>
         <button onClick={()=>submitdetails()}>Submit</button>
        </div>
       </div>
    </div>
  )
}

export default Signin