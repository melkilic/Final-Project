import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Alert, AlertTitle } from '@material-ui/lab';
import { message, Button, Space } from 'antd';


export function Login(props) {
  let [user, changeUser] = useState({
    username: "",
    password: "",
  });
 

  let dispatch= useDispatch()
  async function handleSubmit(e) {
    e.preventDefault();
    let response = await fetch("http://localhost:3000/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password,
      }),
    });
    let { success, id } = await response.json();
    if (success) {
      
      message.success('You are logged in.')
      // console.log(id)
      dispatch({
        type: "USER",
        user: id
      })
      
      props.history.push("/", id);
      
    } else {
     message.error('The username or the password is incorrect.')
    }
  }

  
  
  return (
    <div className="base-container">
      <form onSubmit={handleSubmit}>
      <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src="data:image/jpeg;base64,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" />
          </div>
          <div className="form">
          <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
           
            type="text"
            name="username" 
            placeholder="username"
            value={user.username}
            onChange={(e) => changeUser({ ...user, username: e.target.value })}
    
          />
          </div>
        </div>
        <div className="form-group">
        <label htmlFor="password">Password</label>
          <input
            type="password"
            value={user.password}
            name="password" placeholder="password"
            onChange={(e) => changeUser({ ...user, password: e.target.value })}
           
          />
        </div>
        </div>
      </form>
      <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
    </div>
  );
}

