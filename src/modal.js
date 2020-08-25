import React from 'react';

function Modal({ open, onClick }) {

    const signUp = (event) => {

    }

    return (
        <div className="d-flex h-100">
            <div className={open ? "modal shadow show" : "modal shadow"}>
                <div className="modal-title">
                    Login
                </div>
                <div className="modal-body">
                    <input type="text" className="form-control mb-1r" placeholder="Username"/>
                    <input type="password" className="form-control" placeholder="Password"/>
                </div>
                <div className="modal-footer text-right">
                    <button className="btn btn-primary" onClick={() => onClick(false)}>Cancel</button>
                    <button className="btn btn-primary" onClick={() => signUp()}>Login</button>
                </div>
            </div>
        </div>
    )
}
export default Modal