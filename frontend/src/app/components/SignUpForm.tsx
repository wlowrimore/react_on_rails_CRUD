import React from 'react'

const SignUpForm = () => {
  return (
    <div>
      <h2>Sign Up</h2>
          <form>
            <input 
              className='my-4 shadow appearance-none border rounded w-full py-1 px-2 text-start text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='entity'
              type='email' 
              name='email' 
              value=''/>
            <input 
              className='my-4 shadow appearance-none border rounded w-full py-1 px-2 text-start text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='entity'
              type='password' 
              name='password' 
              value=''/>
            <input 
              className='my-4 shadow appearance-none border rounded w-full py-1 px-2 text-start text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='entity'
              type='password_confirmation' 
              name='password_confirmation' 
              value=''/>
            <button 
              className='mt-2 mb-8 rounded px-2 bg-blue-200 shadow hover:shadow-none hover:bg-gray-300 ease-in duration-200'
              type='submit'>submit</button>
          </form>
    </div>
  )
}

export default SignUpForm