import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { message, Button, Space } from 'antd';

import {useHistory} from 'react-router'
export function Login(props) {
  let [user, changeUser] = useState({
    username: "",
    password: "",
  });
 
let history=useHistory()
  let dispatch= useDispatch()
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("hi")
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
      
      history.push("/home");
      
    } else {
     message.error('The username or the password is incorrect.')
    }
  }

  
  
  return (
    <div className="base-container" ref={props.containerRef} >
      <form onSubmit={(e)=>handleSubmit(e)}
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
            value={user.password}
            name="password" placeholder="password"
            onChange={(e) => changeUser({ ...user, password: e.target.value })}
           
          />
        </div>
       </div>
       </div>
        <div className="footer">
      <button type="submit" className="btn"  input="submit">
        Login
      </button>
    </div>
      </form>
     
    </div>
  );
}


// export default function PickOne(props){
//   let [loginActive, setLoginActive]= useState(true)
//   useEffect(()=>{
//     props.rightSide.classList.add("right");
//   })
  
  
//   let changeState=()=> {
//     const { isLogginActive } = loginActive;
  
//     if (isLogginActive) {
//       props.rightSide.classList.remove("right");
//       props.rightSide.classList.add("left");
//     } else {
//      props.rightSide.classList.remove("left");
//      props.rightSide.classList.add("right");
//     }
//     setLoginActive((prevState) => ({
//       isLogginActive: !prevState.isLogginActive,
//     }));
//   }
  
//   const { isLogginActive } = loginActive;
//   const current = isLogginActive ? "Sign Up" : "Login";
//   const currentActive = isLogginActive ? "Login" : "Sign Up";

//   return(
//     <div className="container" ref={(ref) => (props.container = ref)} >
//        {isLogginActive && (
//               <Login  ref={(ref) => (current = ref)} />
//             )}
//             {!isLogginActive && (
//               <Signup ref={(ref) => (current = ref)} />
//             )}
//               <RightSide
//             current={current}
//             currentActive={currentActive}
//             containerRef={(ref) => (props.rightSide = ref)}
//             onClick={changeState}
//           />
//           </div>
//   )
// }