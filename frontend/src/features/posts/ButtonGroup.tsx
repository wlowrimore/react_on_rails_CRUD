import { destroyPostAsync } from './postSlice';


function ButtonGroup(props:any) {
  
  function handleClick(e: any) {
    const payload = {
      post: {
        post_id: props.post_id
      }
    }
    props.dispatch(destroyPostAsync(payload));
  }

  return (
    <div className='btn-group float-end'>
      <button className='bg-blue-200 text-gray-800 px-2 rounded-md'>Edit</button>
      <button className='bg-red-300 text-gray-800 px-2 rounded-md' onClick={(e) => handleClick(e)}>Delete</button>
    </div>
  )
}

export default ButtonGroup