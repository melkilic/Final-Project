/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { message } from "antd";
import { useHistory } from "react-router";

export function Login(props) {
  let [user, changeUser] = useState({
    username: "",
    password: "",
  });

  let history = useHistory();
  let dispatch = useDispatch();
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("hi");
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
      message.success("You are logged in.");
      dispatch({
        type: "USER",
        user: id,
      });

      history.push("/home");
    } else {
      message.error("The username or the password is incorrect.");
    }
  }

  return (
    <div id="loginpage">
      <div className="base-container" ref={props.containerRef}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="content">
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  value={user.username}
                  onChange={(e) =>
                    changeUser({ ...user, username: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  value={user.password}
                  name="password"
                  placeholder="password"
                  onChange={(e) =>
                    changeUser({ ...user, password: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <button
              style={{ color: "black" }}
              type="submit"
              className="btn"
              input="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
