import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import './MessageSender.css';
import { useSelector } from 'react-redux';
import db from '../firebase';
import firebase from 'firebase';

function MessageSender() {

    const username = useSelector(state => state.user.username);
    const photoURL = useSelector(state => state.user.photoURL);

    const [input, setInput] = useState('');
    const [imageURL, setImageURL] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            profilePic: photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            username: username,
            image: imageURL
        })

        setInput("");
        setImageURL("");
    }

    return (
        <div className='messageSender'>
            <div className='messageSender__top'>
                <Avatar src={photoURL}/>
                <form>
                    <input type='text' className='messageSender__input' placeholder={`Bạn đang nghĩ gì? ${username}`}
                            value={input} onChange={e => setInput(e.target.value)} />
                    <input type='text' className='messageSender__input' placeholder='Tải ảnh URL (tùy chọn) '
                            value={imageURL} onChange={e => setImageURL(e.target.value)} />
                    <button onClick={handleSubmit}>Đăng</button>
                </form>
            </div>
            <div className='messageSender__bottom'>
                <div className='messageSender__option'>
                    <VideocamIcon  style={{ color: 'red' }}/>
                    <h3>Live Video</h3>
                </div>
                <div className='messageSender__option'>
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className='messageSender__option'>
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
