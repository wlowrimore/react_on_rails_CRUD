import React, { useEffect, useState } from 'react'
import ButtonGroup from './ButtonGroup';

const Post = (props: any) => {
  const [title, setTitle] = useState(props.post.title);
  const [body, setBody] = useState(props.post.body);
  const [isEditing, setIsEditing] = useState(props.postToEdit === props.post.id);

  useEffect(() => {
    setIsEditing(props.postToEdit === props.post.id);
  }, [props.postToEdit, props.post.id])

  function submitHandler(e: any) {
    e.preventDefault();
    const formData = {
      post: {
        id: props.post.id,
        title: title,
        body: body,
      }
    }
    props.submitEdit(formData)
    resetState();
  }

  function resetState() {
    setTitle(props.post.title);
    setBody(props.post.body);
  }

  const titleElement = <h2 className='title text-start'>{props.post.title}</h2>
  const bodyElement = <p className='text-sm w-full'>{props.post.body}</p>

  const editableTitle = <input 
                          type='text'
                          className='shadow appearance-none border rounded text-sm text-start w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                          value={title}
                          onChange={(e) => setTitle(props.post.title)}/>;

  const editableBody = <textarea 
                          className='shadow appearance-none border rounded text-md text-start w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                          value={body}
                          onChange={(e) => setBody(e.target.value)}/>;

  const submitButton = <button 
                          type='submit'
                          className='mt-2 mb-8 w-full rounded px-2 bg-blue-200 shadow hover:shadow-none hover:bg-gray-300 ease-in duration-200'
                          onClick={(e) => submitHandler(e)}>Submit</button>
                        

  return (
    <div className='w-full h-full grid grid-cols-3'>
      <div className=''>
        <div className='pb-6 text-xl'>
          {isEditing ? editableTitle : titleElement}
        </div>
        <div className='col-span-4 border-b'>
          {isEditing ? editableBody : bodyElement}
        </div>
      </div>
      <div className='h-full col-span-2'>
        <div className='h-full flex flex-row justify-end items-end'>
          <ButtonGroup 
            post_id={props.post.id}
            dispatch={props.dispatch}
            toggleEditForm={props.toggleEditForm}
            />
        </div>
      </div>
      <div className='pb-4'>
        <div className=''>
          {isEditing ? submitButton : ''}
        </div>
      </div>
    </div>
  )
}

export default Post