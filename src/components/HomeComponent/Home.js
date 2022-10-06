import React from 'react';
import HomeBar from './HomeBar';
import PostTemplate from '../PostComponent.js/PostTemplate';

function Home() {
  return (
    <div>
      <HomeBar/>
      <div className='flex-col justify-center flex-wrap'>
          <PostTemplate />
          <PostTemplate />
          <PostTemplate />
          <PostTemplate />
          <PostTemplate />
      </div>
    </div>
  )
}

export default Home