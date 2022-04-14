import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../../routes'

export const AppRouter = () => {
  const auth = true

  return (
    auth
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
