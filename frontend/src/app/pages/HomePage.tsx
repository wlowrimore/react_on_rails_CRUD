import React from 'react'
import LoginForm from '../components/LoginForm';

const HomePage = () => {
  return (
    <div className='h-screen'>
      <h1 className='text-4xl text-gray-800'>This is TILIS</h1>
      <LoginForm />
    </div>
  );
}

export default HomePage;