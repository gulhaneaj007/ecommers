import React,{useState} from 'react'
import {useNavigate} from  'react-router-dom'
const  SignUp=()=> {
  const [name,setName] =useState('');
  const [email,setEmail] =useState('');
  const [password,setPassword] =useState('');
  const [username,setUsername] =useState('');
  const navigate = useNavigate();

  
  const collectData=async ()=>{
      let result =await fetch("http://localhost:5000/register" ,{
        method :"post",
        body : JSON.stringify({name,username,email,password}),
        headers:{
          "content-Type" : 'application/json',
        }
      });
      result = await result.json;
      console.log(result)
      localStorage.setItem("usrinfo",JSON.stringify(result))
      navigate("/") 
  }

  return (
    <div className='register'>
        <h1>SignUp here</h1>
        <input className='inputBox' type='text' placeholder='Enter name' value={name}  onChange={(e)=>setName(e.target.value)}/>

        <input className='inputBox' type='text' placeholder='Enter username' value={username}  onChange={(e)=>setUsername(e.target.value)}/>

        <input className='inputBox'type='text' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input className='inputBox' type='password' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} />

        <button className='appBtn' onClick={collectData} type='button'>SignUp</button>

    </div>
  )
}

export default SignUp;