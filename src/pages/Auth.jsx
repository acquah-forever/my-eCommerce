import React, { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { signUp, logIn } = useContext(AuthContext)
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const [mode, setMode] = useState('signUp')

  function onSubmit(data) {
    setError(null)
    let result;
    if (mode === 'signUp') {
      result = signUp(data.email, data.password)
    } else {
      result = logIn(data.email, data.password)
    }
    if (result.success) {
      navigate('/')
    } else {
      setError(result.error)
    }
  }

  return (
    <div className='flex justify-center items-center min-h-screen relative bg-[url("https://cdn.pixabay.com/photo/2024/01/29/14/40/warehouse-8540045_1280.jpg")] bg-center bg-cover bg-fixed bg-no-repeat]'>
      <div className='absolute inset-0 bg-black/30'></div>
      <div className='relative z-50 w-100 h-120 bg-slate-400/70 px-5 py-10 mx-auto shadow-2xl '>
        <div>
          <h1 className='text-2xl font-semibold'>{mode === 'signUp' ? 'Sign Up' : 'Log In'}</h1>
        </div>

        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>

          {error && <p className='mt-3 bg-red-200 p-2 text-red-500'>{error}</p>}
          <div className='mt-7 space-y-1 flex flex-col'>
            <label htmlFor='email'>Email:</label>
            <input className='border p-1 rounded' type="email" id='email' {...register('email', { required: 'Email is Required' })} />
            {errors.email && (<p className='text-sm text-red-500'>{errors.email.message}</p>)}
          </div>


          <div className='mt-7 space-y-1 flex flex-col'>
            <label htmlFor='password'>Password:</label>
            <input className='border p-1 rounded' type="password" id='password' {...register('password', {
              required: 'Password is Required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
              maxLength: {
                value: 12,
                message: 'Password must be at most 12 characters',
              }
            })} />
            {errors.password && (<p className='text-sm text-red-500'>{errors.password.message}</p>)}
          </div>

          <button type='submit' className='mt-5 bg-sky-500 p-3 w-20 rounded text-white cursor-pointer'>{mode === 'signUp' ? 'Sign Up' : 'Log In'}</button>


        </form>


        <div className='flex justify-center mt-25'>
          {mode === 'signUp' ?
            (<p className='text-lg text-slate-200'>Already have an account? <span className='text-blue-700 cursor-pointer border-b' onClick={() => setMode('logIn')}>Log In</span></p>
            ) : (
              <p className='text-lg text-slate-200'>Dont have an account? <span className='text-blue-700 cursor-pointer border-b' onClick={() => setMode('signUp')}>Sign Up</span></p>
            )}
        </div>
      </div>
    </div>

  )
}

export default Auth
