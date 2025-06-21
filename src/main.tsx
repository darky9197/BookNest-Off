import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.scss'

import MainPage from './pages/Mainpage'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Sellingform from "./pages/Sellingform";

const router = createBrowserRouter([
  {
    path:'/',
    element: <MainPage/>,
  },
  {
    path:'/Signin',
    element: <Login/>
  },
  {
    path:'/Signup',
    element: <Register/>
  },
  {
    path:'/sellbook',
    element: <Sellingform/>
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
