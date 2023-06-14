import React, {useEffect, useState} from 'react';
import Post from '../Post';
import '../App.scss';

export default function Blogs() {
  
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3500/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);

  return (
    <>
      <h1 className='portfiloHeading'>Portfilo</h1>
      {posts.length > 0 && posts.map(post => (
        <Post className='blogs' {...post} />
      ))}
    </>
  )
}
