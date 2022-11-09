import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { AppDispatch } from '../../app/store';
import Post from './Post';
import PostForm from './PostForm';
import { fetchPostsAsync, selectPosts, selectStatus, Statuses, updatePostAsync } from './postSlice';

function Posts() {
  const posts = useAppSelector(selectPosts);
  const status = useAppSelector(selectStatus);
  const dispatch = useDispatch<AppDispatch>();

  const [postToEdit, setPostToEdit] = useState(0);

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [dispatch])

  function toggleEditForm(post_id?:number) {
    if (postToEdit === post_id) {
      setPostToEdit(0)
    } else {
      setPostToEdit(post_id as number);
    }
  }

  function submitEdit(formData:any) {
    dispatch(updatePostAsync(formData));
    toggleEditForm();
  }

  let contents;
  
  if (status !== Statuses.UpToDate) {
    contents = <div>{status}</div>
  } else {
    contents = <div className=' bg-gray-100'>
      <div className='w-full rounded border shadow-lg'>
        <h3 className='text-sm text-center text-green-400'>{status}</h3>
        <PostForm />
        {posts && posts.length > 0 && posts.map(post => {
          return <div key={post.id} style={{margin:'5em'}}>
            <Post 
              dispatch={dispatch}
              post={post}
              toggleEditForm={() => toggleEditForm(post.id)}
              postToEdit={postToEdit}
              submitEdit={submitEdit}
            />
            </div>
        })}
      </div>
    </div>
  }
  return <div className='flex flex-col'>
    <h1 className='flex flex-start pt-[5em] pb-4 text-xl'>Posts</h1>
    {contents}
  </div>
}
export default Posts;          