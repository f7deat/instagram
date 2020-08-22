import React from 'react';
import logo from './logo.svg';

function Post({key, user}) {
    return (
        <div>
            <h3>{user}</h3>
            <img src={logo} alt="" className="post__image"/>
            <h4>caption</h4>
        </div>
    )
}
export default Post