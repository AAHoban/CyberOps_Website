import React, {useEffect, useState} from 'react';
import Post from '../Post';
import '../App.scss';

const Portfolio = () => {

  const [isLoading, setIsLoading] = useState(true);

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setIsLoading(true); // Set loading state to true before making the request
    fetch('https://cyberops.onrender.com/api/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
        setIsLoading(false); // Set loading state to false after data is fetched
      });
    });
  }, []);
  


  return (
      <>
        <div className='portfiloPage'>
          <h1 className='portfiloHeading'>Portfolio</h1>
          {isLoading ? (
            // Skeleton loading elements
            <div className="skeleton-loading">
              <div className="skeleton-post">
                <div className='image'></div>
                <div className='texts'>
                <div className='titleSkeleton'></div>
                  <p className='authorSkeleton'></p>
                  <p className='summarySkeleton'></p>
                  <p className='summarySkeleton'></p>
                  <p className='summarySkeleton'></p>
                </div>
              </div>
              <div className="skeleton-post">
                <div className='image'></div>
                <div className='texts'>
                <div className='titleSkeleton'></div>
                  <p className='authorSkeleton'></p>
                  <p className='summarySkeleton'></p>
                  <p className='summarySkeleton'></p>
                  <p className='summarySkeleton'></p>
                </div>
              </div>
              <div className="skeleton-post">
                <div className='image'></div>
                <div className='texts'>
                  <div className='titleSkeleton'></div>
                  <p className='authorSkeleton'></p>
                  <p className='summarySkeleton'></p>
                  <p className='summarySkeleton'></p>
                  <p className='summarySkeleton'></p>
                </div>
              </div>
              {/* Add more skeleton post elements as needed */}
            </div>
          ) : (
            // Actual posts
            <>
              {posts.length > 0 && posts.map(post => (
                <Post className='portfilo' {...post} />
              ))}
            </>
          )}
        </div>
      </>
  )
}

export default Portfolio;