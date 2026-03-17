import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import About from './Pages/About'
import PlatformVision from './Pages/PlatformVision'
import PropertySystems from './Pages/PropertySystem'
import Contact from './Pages/Contact'
import Legal from './Pages/Legal'

const App = () => {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/platform-vision",
          element:<PlatformVision/>
        },
        {
          path:"/property-system",
          element:<PropertySystems/>
        },
        {
          path:"/reach-us",
          element:<Contact/>
        },
        {
          path:"/legal",
          element:<Legal/>
        },
      ]
    }
  ])
  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App