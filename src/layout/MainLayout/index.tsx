import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

export const MainLayout: FC = () => {
  return (
    <>
      <div>MainLayout header</div>
      <div>
        <Outlet /> {/* 路由出口 */}
      </div>
      <div>MainLayout footer</div>
    </>
  )
}
