import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutButton() {

  const dispatch = useDispatch()

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout())
    })
  }
  return (

    <button
      className=' inline-block px-6 py-2 duration-200 border text-white 
      hover:bg-blue-100 hover:text-blue-700 rounded-full'
      onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutButton