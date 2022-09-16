import React from 'react';
import './styles.css';

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    cover,
    id,
  },
}) => {
  return (
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={cover} alt='cover' />
      <span>{title}</span>
      <p className='blogItem-desc'>{description}</p>
      <footer>
        <div className='blogItem-author'>
          <div>
            <p>{authorName}</p>
            <p>{createdAt}</p>
          </div>
        </div>
        <a className='blogItem-link' href={`/blog/${id}`}>Read More</a>
      </footer>
    </div>
  );
};

export default BlogItem;
