import React from 'react';
import './css/sidebar.css';
import Upload from './upload';

function Sidebar(user) {
    return (
        <div className="sidebar">
            <div className="sidebar-item shadow">
                <div className="user">
                    <div style={{ color: '#aaa' }}>
                        Hi, <b style={{ color: 'black' }}> {user.user}</b>
                    </div>
                </div>
            </div>
            <div className="sidebar-item shadow">
                <Upload user={user} />
            </div>
            <div style={{ textAlign: 'right', color: '#aaa' }}>
                2020 - <a href="https://github.com/f7deat/instagram">f7deat</a>
            </div>
        </div>
    )
}

export default Sidebar