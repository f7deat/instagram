import React, { useState } from 'react';
import './css/modal.css';
import { auth } from './firebase';

function Modal({ open, setOpen, email, setEmail, password, setPassword }) {

    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [error, setError] = useState('');

    const signIn = () => {
        if (email && password) {
            auth
            .signInWithEmailAndPassword(email, password)
            .catch((error) => {
                setError(error.message);
            })
        }
        else {
            setError('Please input email and password!');
        }
    }

    const signUp = () => {
        if (comparePassword()) {
            auth
            .createUserWithEmailAndPassword(email, password)
            .then((authUer) => {
                console.log(authUer);
                setOpen(false);
            })
            .catch((error) => {
                setError(error.message);
            })
        }
        else {
            setError('Password not matched!');
        }
    }

    const comparePassword = () => {
        if(password && confirmPassword && password === confirmPassword) {
            return true;
        }
        else {
            return false;
        }
    }

    return (
        <div className={open ? "modal show" : "modal d-none"}>
            <div className="modal-dialog shadow">
                <div className="modal-title">
                    {isSignUp ? "Sign Up" : "Login"}
                </div>
                <div className="modal-body">
                    <div className="mb-1r" style={{ color: "darkred", fontWeight: "bold" }}>
                        {error}
                    </div>
                    <input type="email" className="form-control mb-1r" placeholder="Email" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                        setError('')
                    }} />
                    <input type="password" className="form-control mb-1r" value={password} onChange={(e) => {
                        setPassword(e.target.value)
                        setError('')
                    }} placeholder="Password" />
                    <input type="password" className={isSignUp ? "form-control" : "form-control d-none"} value={confirmPassword} onChange={(e) => {
                        setConfirmPassword(e.target.value)
                        setError('')
                    }} placeholder="Confirm password" />
                </div>
                <div className="modal-footer d-flex">
                    <div className="flex-grow-1" style={{ color: "#aaa" }}>
                        {isSignUp ? (
                            <div style={{padding: '1rem'}}>
                                ready account <span className="cursor-pointer" style={{ color: "green", borderBottom: "1px dashed #d1d1d1" }} onClick={() => setIsSignUp(false)}>login</span>
                            </div>
                        ) : (
                                <div style={{padding: '1rem'}}>
                                    join with us <span className="cursor-pointer" style={{ color: "tomato", borderBottom: "1px dashed #d1d1d1" }} onClick={() => {
                                        setIsSignUp(true)
                                    }}>register</span>
                                </div>
                            )
                        }

                    </div>
                    <div className="">
                        <button className="btn btn-primary mr-1r" onClick={() => setOpen(false)}>Cancel</button>
                        {
                            isSignUp ? (
                                <span>
                                    <button className="btn btn-primary" onClick={() => signUp()}>Sign Up</button>
                                </span>
                            ) : (
                                <span>
                                    <button className="btn btn-primary" onClick={() => {
                                        signIn()
                                        setError('')
                                    }}>Login</button>
                                </span>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal