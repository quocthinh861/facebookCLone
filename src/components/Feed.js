import React, { useState, useEffect } from 'react'
import StoryReel from './StoryReel'
import './feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import db from '../firebase';

function Feed() {


    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({id: doc.id,...doc.data()})));
        })
    })

    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            {
                posts &&
                posts.map(post => (
                    <Post profilePic={post.profilePic}
                          image={post.image}
                          message={post.message}
                          timestamp={post.timestamp}
                          username={post.username}/>
                ))
            }
        </div>
    )
}

export default Feed
