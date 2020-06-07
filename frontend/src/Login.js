import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
// import SignUp from './SignUp'
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
      console.log(id)
      dispatch({
        type: "USER",
        user: id
      })

      props.history.push("/", id);
    } else {
      alert("incorrect");
    }
  }

  return (
    <div >
      <form onSubmit={handleSubmit} className="auth-wrapper auth-inner row-">
        <h1>Login</h1>
        <div class="form-group">
          <label for="exampleInputEmail1">Username </label>
          <input
           
            type="text"
            value={user.username}
            onChange={(e) => changeUser({ ...user, username: e.target.value })}
    
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password </label>
          <input
            type="password"
            value={user.password}
            onChange={(e) => changeUser({ ...user, password: e.target.value })}
           
          />
        </div>
        <button input="submit" class="btn btn-primary">
          Log in
        </button>
      </form>
     
    </div>
  );
}
