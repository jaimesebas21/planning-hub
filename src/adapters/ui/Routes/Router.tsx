import React from 'react'
import { Header, ErrorPage, Login, Register } from '../../index'
import { createBrowserRouter } from 'react-router-dom';
import { action as loginAction } from '../Components/Screens/authentication/Login'
import Contacts from '../Components/Screens/Contacts';
export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPage />,
      action: loginAction,
          children: [
            {
              path: "/other",
              element: <Register />,
            },
          ],
    },
    {
      path: "register",
      element: <Register />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "contacts",
          element: <Contacts />,
        },
      ],

    },
    {
      path: "home",
      element: <Header />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "contacts",
          element: <Contacts />,
        },
      ],

    },


  ]);

  return router
}

