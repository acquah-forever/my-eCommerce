import React,{useState,useContext} from 'react'
import {useForm} from 'react-hook-form'
import {AuthContext} from '../context/AuthContext'

const Auth = () => {
  const{register,handleSubmit,formState:{errors}} = useForm()
  const{signUp,user,logout,login} = useContext(AuthContext)

  const [mode,setMode] = useState('signup')

  function onSubmit(data){
    if(mode === 'signup'){
      signUp(data.email, data.password) 
    } else {
      login(data.email, data.password)
    }
  }
  return (
    <div className='w-80 px-5 py-10 mx-auto shadow-2xl mt-10 '>
      <div>
        <h1 className='text-2xl font-semibold'>{mode==='signup' ? 'Sign Up' : 'Log In'}</h1>
      </div>

      <form className='flex flex-col'onSubmit={handleSubmit(onSubmit)}>
        {user && <p>logged in</p>}

        <div className='mt-7 space-y-1 flex flex-col'>
          <label htmlFor='email'>Email:</label>
          <input className='border p-1 rounded' type="email" id='email' {...register('email',{required: 'Email is Required'})} />
          {errors.email && (<p className='text-sm text-red-500'>{errors.email.message}</p>)}
        </div>


        <div className='mt-7 space-y-1 flex flex-col'>
          <label htmlFor='password'>Password:</label>
          <input className='border p-1 rounded' type="password" id='password' {...register('password', {required: 'Password is Required',
            minLength: {
              value:6,
              message:'Password must be at least 6 characters',
            },
            maxLength:{
              value:12,
              message:'Password must be at most 12 characters',
            }
          })} />
          {errors.password && (<p className='text-sm text-red-500'>{errors.password.message}</p>)}
        </div>

        <button type='submit' className='mt-5 bg-sky-500 p-3 w-20 rounded text-white cursor-pointer'>{mode==='signup' ? 'Sign Up' : 'Log In'}</button>
        
        
      </form>

      
      <div className='flex justify-center mt-5'>
      {mode === 'signup' ? 
      (<p className='text-sm text-slate-600'>Already have an account? <span className='text-sky-400 cursor-pointer border-b'onClick={()=>setMode('login')}>Log In</span></p>
      ) : (
        <p className='text-sm text-slate-600'>Dont have an account? <span className='text-sky-400 cursor-pointer border-b'onClick={()=>setMode('signup')}>Sign Up</span></p>
      )}
      </div>
    </div>
  )
}
 
export default Auth
