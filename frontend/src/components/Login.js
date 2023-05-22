import React, { useState } from 'react'
import { json } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async () => {
        let resp = await fetch("http://localhost:5000/login",{
            method : "POST",
            body:JSON.stringify({username,password}),
            headers: {
                "content-Type": 'application/json',
              }
        });
        resp = await resp.json();
        if(resp){
            localStorage.setItem("user",json.stringify(resp))
        }else{
            alert("username or password are incorrect")
        }
    }
    return (
        <div className='login'>
            <h1>Login</h1>
            <input type='text' onChange={(e) => setUsername(e.target.value)} className='inputBox' placeholder='Enter user name' />
            <input type='password' onChange={(e) => setPassword(e.target.value)} className='inputBox' placeholder='Enter Password' />
            <button className='appBtn' onClick={handleLogin} type='button'>Login</button>
        </div>
    )
}
