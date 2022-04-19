import React, { useEffect } from 'react';
import { AppRouter } from './components/AppRouter/AppRouter';
import { useActions } from './components/hooks/useActions';
import { Navbar } from './components/Navbar/Navbar';
import { IUser } from './models/IUser';



export const App = () => {
  const {setUser, setIsAuth} = useActions()

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setUser({username: localStorage.getItem('username' || '')} as IUser)
      setIsAuth(true)
    } 
  }, [])

  return (
    <div>
      <Navbar/>
      <AppRouter/>
    </div>
  )
}

