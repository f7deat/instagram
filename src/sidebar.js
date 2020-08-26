import React from 'react';
import './css/sidebar.css';

function Sidebar() {
    return (
        <div className="shadow sidebar">
            <div className="user">
                <div style={{color: '#aaa'}}>
                    Hi, <b style={{color: 'black'}}> Guest</b>
                </div>
            </div>
        </div>
    )
}

export default Sidebar