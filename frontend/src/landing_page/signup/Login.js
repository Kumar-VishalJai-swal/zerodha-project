import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, Link} from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try{
            await axios.post("https://zerodha-project-4.onrender.com/login",{
                email, password
            })
            .then( res=>{
                if(res.data=== "exist"){
                    window.location.href = "https://zerodha-project-4.onrender.com";
                }
                else if(res.data==="notexist"){
                    alert("user not exist");
                 
                }
        }
       )}
        catch(e){
             console.log(e);
        }
    }
  return (
    <div className='mt-5 container flex-col p-5 bg-primary'>
        <h1 className='mt-5'>Login</h1>
        <from>
            <input className='p-3' type='email' name='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/><br/>
            <input className='p-3' type='password' name='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/><br/>

            <input className='p-3'  type='submit' onClick={submit}/>
        </from>
        <br/>
        <p>Or,</p>
        <br/>
        <Link className="bg-secondary text-red to='/signup'>create account</Link>

        
    </div>
  )
}

export default Login
