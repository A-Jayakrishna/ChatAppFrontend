import React from "react";
import "../css/Login.css";
import log from "./log";
import axios from "axios";
export default function Login1(props) {

  const validationHandler = (e) => {
    e.preventDefault();
    let email = document.getElementById("inpEmail").value;
    let pas = document.getElementById("inpPass").value;
    console.log(email);
    axios
      .get(`http://localhost:8000/chat/validate?email=${email}&pas=${pas}`)
      .then((res) => {
        if (res.data.status === true) {
          props.LoginHandler(res.data);
        } else {
          // let a = document.getElementById("LoginMsg");
          // a.innerHTML = res.data.status;
          // a.style.display = "block";
          console.log('login error')
        }
      });
  };

  const Handler = (e) => {
    e.preventDefault();
    let name = document.getElementById("inpname").value;
    let em = document.getElementById("inpemail").value;
    let pass = document.getElementById("inppass").value;
    let mob = document.getElementById("inpmob").value;

    axios
      .get(`http://localhost:8000/chat/Insertrecord?name=${name}&email=${em}&password=${pass}&phone_no=${mob}`)
      window.alert("Sucessfully Registered");
  };
  

  const signup = () => {
    var log = document.getElementById("login");
    var sign = document.getElementById("signup");
    var button = document.getElementById("btn");
    debugger;
    log.style.left = "-400px";
    sign.style.left = "50px";
    button.style.left = "110px";
  };

  const login = () => {
    var log = document.getElementById("login");
    var sign = document.getElementById("signup");
    var button = document.getElementById("btn");
    log.style.left = "50px";
    sign.style.left = "450px";
    button.style.left = "0px";
  };

  return (
    <body class = "Logbody">
      <div className="hero">
        <div className="form-box">
          <div className="button-box">
            <div id="btn"></div>
            <button type="button" className="toggle-btn" onClick={login}>
              Login
            </button>
            <button type="button" className="toggle-btn" onClick={signup}>
              Signup
            </button>
          </div>
          <div className="social-icons">
            <h1>Welcome to ChatApp</h1>
          </div>
          <form id="login" className="input-group">
            <input
              type="text"
              id="inpEmail"
              className="input-field"
              placeholder="Username"
              required
            />
            <input
              type="password"
              id="inpPass"
              className="input-field"
              placeholder="Password"
              required
            />
            {/* <input type="checkbox" className="check-box" />
            <span>Remember Password</span> */}
            <button
              type="submit"
              className="submit-btn"
              onClick={(e) => validationHandler(e)}
            >
              Log in
            </button>
          </form>

          <form id="signup" className="input-group">

            <input
              type="text"
              id="inpname"
              className="input-field"
              placeholder="Username"
              required
            />
            <input
              type="email"
              id="inpemail"
              className="input-field"
              placeholder="Email Id"
              required
            />
            <input
              type="password"
              className="input-field"
              id="inppass"
              placeholder="Password"
              required
            />
            <input
              type="number"
              id="inpmob"
              className="input-field"
              placeholder="MoblieNO"
              required
            />
            <button type="submit" className="submit-btn"    onClick={(e) => Handler(e)}>
              Signup
            </button>
          </form>
        </div>
      </div>
    </body>
  );
}
