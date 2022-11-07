import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { createPostAsync } from './postSlice'

const PostForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function submitHandler(e:any) {
    e.preventDefault();
    const formData = {
      post: {
        title: title,
        body: body,
      }
    }
    dispatch(createPostAsync(formData))
    resetState();
  }

  function resetState() {
    setTitle('');
    setBody('');
  }
  
  return (
    <div>
      <h1>Post Form</h1>
      <form>
        <input 
          type='text'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-start text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className='shadow appearance-none border rounded w-full py-2 px-3 text-start text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          name='body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button
          type='submit'
          onClick={(e) => submitHandler(e)}>Submit</button>
      </form>
    </div>
  )
}

export default PostForm