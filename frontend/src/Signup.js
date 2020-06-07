import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
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
          dispatch({
            type: 'USER',
            user: id
          })
          props.history.push("/", id);
        } else {
          alert("You can't use this username");
        }
      }

    return(
        <div>
        <form
          onSubmit={handleCreate}
        >
          <h1>Sign Up</h1>
          <div >
            <label>Username </label>
            <input
            
              type="text"
              value={new_user.new_username}
              onChange={(e) =>
                changeNewUser({ ...new_user, new_username: e.target.value })
              }
             
            />
          </div>
          <div>
            <label for="exampleInputPassword1">Password </label>
            <input 
            
             
              type="password"
              value={new_user.new_password}
              onChange={(e) =>
                changeNewUser({ ...new_user, new_password: e.target.value })
              }
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Address</label>
            <input
             
              type="text"
              value={new_user.new_address}
              onChange={(e) =>
                changeNewUser({ ...new_user, new_address: e.target.value })
              }
        
            />
          </div>
          <div >
            <label for="exampleInputPassword1">Email </label>
            <input
             
              type="text"
              value={new_user.new_email}
              onChange={(e) =>
                changeNewUser({ ...new_user, new_email: e.target.value })
              }
            
            />
          </div>
          <button input="submit" class="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    )
}
