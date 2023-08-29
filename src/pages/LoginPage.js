import React, {useContext, useState} from "react";
import {Navigate} from "react-router-dom";
import {UserContext} from "../context/UserContext";
import '../css/Login.scss';

export default function LoginPage() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [redirect,setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);
  async function login(ev) {
    ev.preventDefault();
    const response = await fetch('https://cyberops.onrender.com/api/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    }).catch(error =>{
      console.error('error 405', error)
    })
    if (response.ok) {
      try {
        const userInfo = await response.json();
        setUserInfo(userInfo);
        setRedirect(true);
        console.log(username);
        console.log(password);
      } catch (error) {
        console.log('Error parsing response JSON:', error);
      }
    } else {
      alert('Wrong credentials');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    <section>
      <form className="login" onSubmit={login} method="post">
        <h1>Login</h1>
        <input type="text"
              placeholder="username"
              id="username"
              name="username"
              value={username}
              onChange={ev => setUsername(ev.target.value)}/>
        <input type="password"
              placeholder="password"
              id="password"
              name="password"
              value={password}
              onChange={ev => setPassword(ev.target.value)}/>
        <button>Login</button>
      </form>
    </section>
  );
}