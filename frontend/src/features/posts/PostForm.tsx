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
      <h1 className='text-xl pt-6 px-8 uppercase'>tilis</h1>
      <form className='px-8'>
        <input 
          type='text'
          className='my-4 shadow appearance-none border rounded w-full py-1 px-2 text-start text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='entity'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className='shadow appearance-none border rounded w-full py-1 px-2 text-start text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='comment'
          name='body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button
          className='mt-2 mb-8 rounded px-2 bg-blue-200 shadow hover:shadow-none hover:bg-gray-300 ease-in duration-200'
          type='submit'
          onClick={(e) => submitHandler(e)}>Submit</button>
      </form>
    </div>
  )
}

export default PostForm