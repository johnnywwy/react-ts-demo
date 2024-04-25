import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
// import styles from './index.module.scss'

export const QuestionLayout: FC = () => {
  return (
    <>
      <div> QuestionLayout </div>
      <div>
        <Outlet /> {/* 路由出口 */}
      </div>
    </>
  )
}
