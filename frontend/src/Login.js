import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
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
      
      props.history.push("/home", id);
      
    } else {
     message.error('The username or the password is incorrect.')
    }
  }

  
  
  return (
    <div className="base-container" ref={props.containerRef} >
      <form onSubmit={handleSubmit}
       >
         <div className="header">Login</div>
         <div className="content">
      {/* <div className="image">
        <img src="https://www.bynarycodes.com/wp-content/uploads/2018/07/word-image-1024x576.jpg" />
      </div> */}
      <div className="form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
           
           type="text" name="username" placeholder="username"
            value={user.username}
            onChange={(e) => changeUser({ ...user, username: e.target.value })}
    
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password" placeholder="password"
            value={user.password}
            onChange={(e) => changeUser({ ...user, password: e.target.value })}
           
          />
        </div>
       </div>
       </div>
        <div className="footer">
      <button type="button" className="btn"  input="submit">
        Login
      </button>
    </div>
      </form>
     
    </div>
  );
}