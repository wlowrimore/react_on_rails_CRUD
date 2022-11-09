import React from 'react'

const LoginForm = () => {
  return (
    <div className='items-center'>
      <h2 className='text-xl pb-4 h-full'>Login</h2>
          <form className='px-8 h-80 flex flex-col items-center justify-center border shadow rounded-lg'>
            <input 
              className='my-4 shadow appearance-none border rounded w-full py-1 px-2 text-start text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='username'
              type='text'
              name='username' 
              value=''/>
            <input 
              className='my-4 shadow appearance-none border rounded w-full py-1 px-2 text-start text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='password'
              type='password' 
              name='password' 
              value=''/>
            <button 
              className='mt-2 mb-8 w-full rounded px-2 bg-blue-200 shadow hover:shadow-none hover:bg-gray-300 ease-in duration-200'
              type='submit'>Login</button>
          </form>
    </div>
  )
}

export default LoginForm;