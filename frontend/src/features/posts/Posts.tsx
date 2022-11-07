import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { AppDispatch } from '../../app/store';
import Post from './Post';
import { fetchPostsAsync, selectPosts, selectStatus, Statuses } from './postSlice';

function Posts() {
  const posts = useAppSelector(selectPosts);
  const status = useAppSelector(selectStatus);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [dispatch])

  let contents;
  
  if (status !== Statuses.UpToDate) {
    contents = <div>{status}</div>
  } else {
    contents = <div className='py-6'>
      <div className='rounded border py-6 overflow-hidden shadow-lg'>
        <h3 className='text-sm'>{status}</h3>
        {/* form goes here */}
        {posts && posts.length > 0 && posts.map(post => {
          return <div key={post.id} style={{margin:'5em'}}>
            <Post 
              dispatch={dispatch}
              post={post}
            />
            </div>
        })}
      </div>
    </div>
  }
  return <div><h1>Posts</h1>
    {contents}
  </div>
}
export default Posts;          