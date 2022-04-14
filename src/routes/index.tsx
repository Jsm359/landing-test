import { MainDisplay } from '../pages/Main-display/MainDisplay';
import { Login } from '../components/Login/Login';
import { Navigate } from "react-router-dom";


export enum RouteNames {
  LOGIN = '/login',
  MAINDISPLAY = '/'
}

export const publicRoutes = [
  {path: RouteNames.LOGIN, element: <Login /> },
  {path: '*', element: <Navigate to='/login' />},
]

export const privateRoutes = [
  {path: RouteNames.MAINDISPLAY, element: <MainDisplay />},
  {path: '*', element: <Navigate to='/'/>},
]