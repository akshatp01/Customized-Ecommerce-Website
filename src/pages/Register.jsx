import React from 'react'
import { Footer, Navbar } from "../components";
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebaseConfig";
import { useState } from 'react';
import { toast } from 'react-toastify';
import { setDoc, doc } from "firebase/firestore";


const Register = () => {

    const history = useNavigate();
    const [fullName, setfullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')


    const handleSignup = (e) => {
        e.preventDefault();
        // alert(`${email}, ${password}`)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)

                setDoc(doc(db, "users", userCredential.user.email), {
                    fullName: fullName,
                    Email: email,
                    Password: password
                }).then(() => {
                    setSuccessMsg('Signup Successfull.');
                    setfullName('');
                    setEmail('');
                    setPassword('');
                    setErrorMsg('');
                    setTimeout(() => {
                        setSuccessMsg('');
                        history.push('./login')
                    }, 300)

                }).catch((error) => {
                    toast.error(error.message);
                })

            })
            .catch((error) => {
                // console.log('create', error)
                if (error.code === "auth/email-already-in-use") {
                    toast.error("Email already in use.");
                } else {
                    toast.error(error.message);
                }
            })
    }
    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        {successMsg && <>
                            <div className='succes-msg'>{successMsg}</div>
                        </>}
                        <form onSubmit={handleSignup}>
                            <div className="form my-3">
                                <label >Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Name"
                                    placeholder="Enter Your Name"

                                    value={fullName}
                                    onChange={(e) => setfullName(e.target.value)}
                                />
                            </div>
                            <div className="form my-3">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form  my-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="Password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="my-3">
                                <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button className="my-2 mx-auto btn btn-dark" type="submit" >
                                    Register
                                </button>
                            </div>
                        </form>
                        {errorMsg && <>
                            <div className='error-msg'>{errorMsg}</div>
                        </>}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register