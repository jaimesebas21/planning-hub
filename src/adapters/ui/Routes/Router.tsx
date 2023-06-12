import React from 'react'
import { Header, ErrorPage, Login } from '../../index'
import { createBrowserRouter } from 'react-router-dom';
import Contacts from '../Components/Screens/Contacts';
export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
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

