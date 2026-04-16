import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


const NavBar = () => {
  const{user,logOut} = useContext(AuthContext)

  return (
    <div className='flex justify-between items-center p-3 shadow'>
      <div className='text-2xl font-semibold'>
        <Link to='/'>Shophub</Link>
      </div>
      <div className='space-x-5'>
        <Link className='text-xl hover:text-sky-400 hover:border-b transition-all ease-in-out duration-200' to='/'>Home</Link>
        <Link className='text-xl hover:text-sky-400 hover:border-b transition-all ease-in-out duration-200' to='Checkout'>Cart</Link>
      </div>
      {!user ? (<div className='space-x-3 text-white'>
        <Link className='bg-slate-400 p-3 rounded' to='/auth'>Login</Link>
        <Link className='bg-sky-500 p-3 rounded' to='/auth'>Signup</Link>
      </div>) : (
        <div className='space-x-3'>
          <span>Hello,{user.email}</span>
          <button className='bg-gray-400 p-2 rounded'onClick={logOut}>Log Out</button>
        </div>

      )} 
    </div>
  )
}

export default NavBar
