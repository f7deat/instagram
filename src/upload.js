import React, { useState } from 'react';
import './css/upload.css';
import { storage, db } from './firebase';

function Upload(user) {

    const [caption, setCaption] = useState('');
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`image/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
                setProgress(percent);
            },
            (error) => alert(error.message),
            () => {
                storage
                .ref('image')
                .child(image.name)
                .getDownloadURL()
                .then((url) => {
                    debugger
                    db.collection("posts").add({
                        caption: caption,
                        image: url,
                        user: user.user.user
                    });
                    setProgress(0);
                    setImage(null);
                })
            }
        )
    }

    return (
        <div>
            <input type="text" className="form-control mb-1r" placeholder="What do you thing?" onChange={(e) => setCaption(e.target.value)} value={caption}/>
            <input type="file" className="form-control mb-1r" onChange={handleChange}/>
            <div className="progress">
                <div className="progress-bar" style={{width: progress + '%'}}></div>
            </div>
            <button className="btn-upload" onClick={handleUpload} disabled={(user.user.user !== 'Guest') ? false : true}>Upload</button>
        </div>
    )
}

export default Upload