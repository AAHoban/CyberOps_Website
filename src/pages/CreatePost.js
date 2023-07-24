import 'react-quill/dist/quill.snow.css';
import React, {useState} from "react";
import {Navigate} from "react-router-dom";
import Editor from "../Editor";
import '../App.scss';

export default function CreatePost() {
  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);
  
  async function createNewPost(ev) {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);
    ev.preventDefault();
    const response = await fetch('https://cyberops-website-api.onrender.com/post', {
      method: 'POST',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    <div className='createPostContainer'>
      <h1 className='portfiloHeading'>Create Post</h1>
      <form className='createPost' onSubmit={createNewPost}>
        <input type="title"
              placeholder={'Title'}
              value={title}
              onChange={ev => setTitle(ev.target.value)}
              required />

        <input type="summary"
              placeholder={'Summary'}
              value={summary}
              onChange={ev => setSummary(ev.target.value)} 
              required />
        <input type="file"
              onChange={ev => setFiles(ev.target.files)} required/>
        <Editor value={content} onChange={setContent} />
        <button className='createPostBtn' style={{marginTop:'5px'}}>Create post</button>
      </form>
    </div>
  );
}