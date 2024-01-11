import React from 'react'
import "./App.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound'
import Home from './pages/Home/Home'
import Layout from './Layout/Layout'
import Bonus from './pages/Bonus/Bonus'
import UserBuId from './pages/UserBuId/UserBuId'
import Menu from './pages/Menu/Menu'
import OrderBonus from './pages/OrderBonus/OrderBonus'
import Order from './pages/Order/Order'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "menu",
          element: <Menu/>
        },
        {
          path: "orderBonus",
          element: <OrderBonus/>
        },
        {
          path: "order",
          element: <Order/>
        },
        {
          path: "bonus",
          element: <Bonus/>
        },
        ,
        {
          path: "order/user/:id",
          element: <UserBuId/>
        },
        {
          path: "*",
          element: <NotFound />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
