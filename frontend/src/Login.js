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
    <div >
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <label for="exampleInputEmail1">Username </label>
          <input
           
            type="text"
            value={user.username}
            onChange={(e) => changeUser({ ...user, username: e.target.value })}
    
          />
        </div>
        <div>
          <label>Password </label>
          <input
            type="password"
            value={user.password}
            onChange={(e) => changeUser({ ...user, password: e.target.value })}
           
          />
        </div>
       
        <button input="submit" 
      
        >
          Log in
        </button>
      </form>
     
    </div>
  );
}

