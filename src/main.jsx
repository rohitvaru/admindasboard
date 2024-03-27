import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Maindash from './componets/MainDash/Maindash.jsx'
import Cards from './componets/Cards/Cards.jsx'
import CustomerReview from './componets/CustomerReview/CustomerReview.jsx'
import Home from './componets/Home/Home.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"dashboard",
        element: <Maindash/>
      },
      {
        path:"Orders",
        element:<h1>this is element Orders</h1>
      },
      {
        path:"customers",
        element: <div><h1>this is customers Page</h1>
          <Cards /></div>
      },
      {
        path:"products",
        element: <Maindash />
      },
      {
        path:"analytics",
        element: <h1>this is analytics</h1>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
