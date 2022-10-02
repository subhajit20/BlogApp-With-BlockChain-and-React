import React from 'react';
import BlogTemplate from './BlogTemplate';

function BlogGallery() {
    let arr = [1,2,3,4,5,6,7,8,8]
  return (
    <div className='flex justify-center flex-wrap'>
        {
            arr.map(()=>{
                return <BlogTemplate/>
            })
        }
    </div>
  )
}

export default BlogGallery