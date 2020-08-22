import React, { useEffect, useState } from 'react';
import './App.css';
import Post from './post';
import { db } from './firebase';
import Modal from './modal';

function App() {

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      debugger
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <div className="container">
          <div className="d-flex">
            <div className="flex-grow-1">
              <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" className="app__headerImage" alt="logo" />
            </div>
            <div className="control">
              <button className="btn" onClick={() => setOpen(true)}>
                <svg aria-label="Home" class="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex">
        <div className="col-8">
        {
          posts.map(({ id, post }) => (
            <Post key={id} user={post.user} />
          ))
        }
        </div>
      </div>
      <Modal open={open}/>
    </div>
  );
}

export default App;
