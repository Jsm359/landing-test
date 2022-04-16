import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../../routes'
import { useTypedSelector } from '../hooks/useTypedSelector'

export const AppRouter = () => {
  const {isAuth} = useTypedSelector(state => state.auth)

  return (
    isAuth
      ?
      <Routes>
        {privateRoutes.map(route =>
          <Route path={route.path} element={route.element} key={route.path} />
        )}
      </Routes>
      :
      <Routes>
        {publicRoutes.map(route =>
          <Route path={route.path} element={route.element} key={route.path} />
        )}
      </Routes>
  )
}
