import React from 'react';

function Modal({ open }) {

    const signUp = (event) => {

    }

    return (
        <div className="d-flex h-100">
            <div className="modal">
                <div className="modal-title"></div>
                <div className="modal-body"></div>
                <div className="modal-footer">
                    <button className="btn">Cancel</button>
                    <button className="btn" onClick={() => signUp()}>Login</button>
                </div>
            </div>
        </div>
    )
}
export default Modal