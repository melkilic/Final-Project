import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { message, Button, Space } from 'antd';

export default function SignUp(props){
    let [new_user, changeNewUser] = useState({
        new_username: "",
        new_password: ""
      });
      let dispatch=useDispatch()
      async function handleCreate(e) {
        e.preventDefault();
        let response = await fetch("http://localhost:3000/users", {
          credentials: "include",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: new_user.new_username,
            password: new_user.new_password,
            address: new_user.new_address,
            email: new_user.new_email,
          }),
        });

        let { success, id } = await response.json();
        if (success) {
          message.success('You successfully signed up.')
          dispatch({
            type: 'USER',
            user: id
          })
          props.history.push("/home", id);
        } else {
          message.error("You can't use this username");
        }
      }

    return(
      <div className="base-container" ref={props.containerRef}>
        <form
          onSubmit={handleCreate}>
      <div className="header">Sign Up</div>
      <div className="content">
        {/* <div className="image">
        <img src="https://www.bynarycodes.com/wp-content/uploads/2018/07/word-image-1024x576.jpg" />
      </div> */}
      <div className="form">
        <div className="form-group">
        
         <label htmlFor="username">Username</label>
           
            <input
              name="username" placeholder="username"
              type="text"
              value={new_user.new_username}
              onChange={(e) =>
                changeNewUser({ ...new_user, new_username: e.target.value })
              }
             
            />
          </div> 
           <div className="form-group">
          <label htmlFor="password">Password</label>
            <input 
            
             
            type="password" name="password" placeholder="password"
              value={new_user.new_password}
              onChange={(e) =>
                changeNewUser({ ...new_user, new_password: e.target.value })
              }
            />
          </div> 
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Address</label>
            <input
              name="address" placeholder="address"
              type="text"
              value={new_user.new_address}
              onChange={(e) =>
                changeNewUser({ ...new_user, new_address: e.target.value })
              }
        
            />
          </div>
         <div className="form-group">
            <label htmlFor="exampleInputPassword1">Email </label>
            <input
              name="email" placeholder="email"
              type="text"
              value={new_user.new_email}
              onChange={(e) =>
                changeNewUser({ ...new_user, new_email: e.target.value })
              }
/>
            </div>
            </div>
          </div>
   
          <div className="footer">
      <button type="button" className="btn"  input="submit">
      Sign Up
      </button>
    </div>
        </form>
        </div>

    )
}