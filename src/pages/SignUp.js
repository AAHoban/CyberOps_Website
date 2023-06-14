import React from 'react';
import { useRef, useState, useEffect, useContext } from 'react';
import '../css/SignUp.css';
import AuthContext from "../context/AuthProvider";

import axios from '../api/axios';
const LOGIN_URL = '/auth';

const SignUp = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
      userRef.current.focus();
  }, [])

  useEffect(() => {
      setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          const response = await axios.post(LOGIN_URL,
              JSON.stringify({ user, pwd }),
              {
                  headers: { 'Content-Type': 'application/json' },
                  withCredentials: true
              }
          );
          console.log(JSON.stringify(response?.data));
          //console.log(JSON.stringify(response));
          const accessToken = response?.data?.accessToken;
          const roles = response?.data?.roles;
          setAuth({ user, pwd, roles, accessToken });
          setUser('');
          setPwd('');
          setSuccess(true);
      } catch (err) {
          if (!err?.response) {
              setErrMsg('No Server Response');
          } else if (err.response?.status === 400) {
              setErrMsg('Missing Username or Password');
          } else if (err.response?.status === 401) {
              setErrMsg('Unauthorized');
          } else {
              setErrMsg('Login Failed');
          }
          errRef.current.focus();
      }
  }


  return (
    <>
      {success ? (
        <div className='loginForm'>
          <h1>You are logged in!</h1>
          <br />
          <p>
          </p>
        </div>
      ) : (
        <div className='signupContainer'>
        <div className='loginContainer'>
          <div className='loginForm'>
            <h1>Sign In</h1>

              <form onSubmit={handleSubmit}>
                  <p>{errMsg}</p>
                  <label htmlFor='username'>Username</label><br></br>
                  <input 
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                  />

                  <label htmlFor='password'>Password</label>
                  <input 
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                  /><br></br>
                  <button className='btn'>Login</button>
              </form>
          </div>
        </div>
      </div>
      )
    }
    </>
  );
}

export default SignUp;