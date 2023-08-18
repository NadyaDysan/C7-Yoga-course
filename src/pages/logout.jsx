import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { logOut } from '../redux/features/authSlice'

export default function Logout() {
  const dispatch = useDispatch()
  useState(() => {
    dispatch(logOut())
  })
  return <Navigate to="/login" />
}