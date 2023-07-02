import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig"
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserLogin } from "../redux/action/UserLogin";
import { useDispatch } from "react-redux";

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login } = UserLogin()
  const dispatch = useDispatch()



  // sign in user
  const handleSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        toast.success(`${cred.user.email} Logged in`, { autoClose: 2000 })
        dispatch(login(cred.user.email))
      })
      .catch((err) => {
        if (email === "" || password === "") {
          toast.error("Fields are empty", { autoClose: 2500 })
        } else if (err.code === "auth/wrong-password") {
          toast.error("Incorrect password", { autoClose: 2500 })
        } else {
          toast.error("User not found", { autoClose: 2500 })
        }
      })
  }


  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSignIn}>
              <div class="my-3">
                <label for="display-4">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
              <div className="text-center">

                <button class="my-2 mx-auto btn btn-dark" type="submit" >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
