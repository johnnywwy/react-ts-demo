import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './index.module.scss'

export const ManageLayout: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>ManageLayout left</p>
        <button>创建问卷</button>
        <br />
        <a href="">我的问卷</a>
        <br />
        <a href="">星标问卷</a>
        <br />
        <a href="">回收站</a>
      </div>
      <div className={styles.right}>
        <Outlet /> {/* 路由出口 */}
      </div>
    </div>
  )
}
