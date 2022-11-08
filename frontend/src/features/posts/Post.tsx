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
                          className='shadow appearance-none border rounded text-start w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                          value={title}
                          onChange={(e) => setTitle(props.post.title)}/>;

  const editableBody = <textarea 
                          className='shadow appearance-none border rounded text-start w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                          value={body}
                          onChange={(e) => setBody(e.target.value)}/>;

  const submitButton = <button 
                          type='submit'
                          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                          onClick={(e) => submitHandler(e)}>Submit</button>
                        

  return (
    <div>
      <div className='flex flex-row'>
        <div className='col-8'>
          {isEditing ? editableTitle : titleElement}
        </div>
        <div className='col-4'>
          <ButtonGroup 
            post_id={props.post.id}
            dispatch={props.dispatch}
            toggleEditForm={props.toggleEditForm}
          />
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='col-8'>
          {isEditing ? editableBody : bodyElement}
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='col-2'>
          {isEditing ? submitButton : ''}
        </div>
      </div>
    </div>
  )
}

export default Post