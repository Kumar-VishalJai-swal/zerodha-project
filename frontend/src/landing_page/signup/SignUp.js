import React, {useState, useEffect} from 'react';
import axios, { all } from "axios";
import { useNavigate, Link} from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [username, setUsername] = useState('')

 async function submit(e) {
  e.preventDefault();

  try{
    await axios.post("https://zerodha-project-4.onrender.com/signup", {
      email, password, username
    })
    .then( res=>{
      if(res.data=== "exist"){
        alert("user exist");
        
    }
    else if(res.data==="notexist"){
      window.location.href = "https://zerodha-project-4.onrender.com";
       
     
    }
   })
   .catch(e=>{
    alert("wrong details");
    console.log(e);
   })
    
  }
  catch{
    console.log(e);
  }
 }
  return (
    <div className='mt-5 container flex-col p-5 bg-primary'>
      <input className='p-3' type='email' onChange={(e) => {setEmail(e.target.value)}} name='email' placeholder='Email'/>
      <input className='p-3' type='password' name='password' onChange={(e) => {setPassword(e.target.value)}} placeholder='Password'/>
      <input className='p-3' type='text' name='username' onChange={(e) => {setUsername(e.target.value)}} placeholder='Username'/>
      <input className='p-3' type='submit' onClick={submit}/>

      <br/>
      <p>Or,</p>
      <br/>
      <Link className="" to='/login'>login account</Link>
    </div>
  )
}

export default SignUp
