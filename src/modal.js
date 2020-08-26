import React, { useState } from 'react';
import './css/modal.css';

function Modal({ open, setOpen }) {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const signIn = () => {

    }

    return (
        <div className={open ? "modal show" : "modal d-none"}>
            <div className="modal-dialog shadow">
                <div className="modal-title">
                    Login
                </div>
                <div className="modal-body">
                    <input type="email" className="form-control mb-1r" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </div>
                <div className="modal-footer d-flex">
                    <div className="flex-grow-1">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <div className="">
                        <button className="btn btn-primary mr-1r" onClick={() => setOpen(false)}>Cancel</button>
                        <button className="btn btn-primary" onClick={() => signIn()}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal