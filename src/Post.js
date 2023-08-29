import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";
import React from "react";
import './App.scss';

export default function Post({_id, title, summary, cover, createdAt, author}) {

  return (
    <div className="postContainer">
      <div className="post">
        <div className="image">
          <Link to={`/api/post/${_id}`}>
              <img 
                src={'https://cyberops.onrender.com/api/'+cover} 
                alt=""
              />
          </Link>
        </div>
        <div className="texts">
          <Link to={`/api/post/${_id}`}>
            <h2>{title}</h2>
          </Link>
          <p className="info">
            <p className="author">{author.username}</p>
            <time>{formatISO9075(new Date(createdAt))}</time>
          </p>
          <p className="summary">{summary}</p>
        </div>
      </div>
      
    </div>

  );
}