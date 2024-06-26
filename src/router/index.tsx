import React from 'react'

import { createBrowserRouter } from 'react-router-dom'

// layouts
import { MainLayout } from '../layout/MainLayout'
import { QuestionLayout } from '../layout/QuestionLayout'
import { ManageLayout } from '../layout/ManageLayout'

// pages
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { NotFound } from '../pages/NotFound'
import { List } from '../pages/manage/List'
import { Trash } from '../pages/manage/Trash'
import { Star } from '../pages/manage/Star'
import { Edit } from '../pages/question/Edit'
import { Stat } from '../pages/question/Stat'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'manager',
        element: <ManageLayout />,
        children: [
          {
            path: 'list',
            element: <List />,
          },
          {
            path: 'star',
            element: <Star />,
          },
          {
            path: 'trash',
            element: <Trash />,
          },
        ],
      },
      {
        path: '*', //404配置写在最后
        element: <NotFound />,
      },
    ],
  },
  {
    path: 'question',
    element: <QuestionLayout />,
    children: [
      {
        path: 'edit/:id',
        element: <Edit />,
      },
      {
        path: 'stat/:id',
        element: <Stat />,
      },
    ],
  },
])

export default router
