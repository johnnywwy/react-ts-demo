import React, { FC } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import { PlusOutlined, OrderedListOutlined, StarOutlined, DeleteOutlined } from '@ant-design/icons'

import { Button, Divider, Space } from 'antd'

export const ManageLayout: FC = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <br />
        <Space direction="vertical" size="middle">
          <Button
            type="primary"
            size="large"
            onClick={() => navigate('/manager/list')}
            icon={<PlusOutlined />}
          >
            新建问卷
          </Button>
          <Divider className="border-transparent" />
          <Button
            type="default"
            size="large"
            icon={<OrderedListOutlined />}
            onClick={() => navigate('/manager/list')}
          >
            我的问卷
          </Button>
          <Button
            type="default"
            size="large"
            icon={<StarOutlined />}
            onClick={() => navigate('/manager/star')}
          >
            星标问卷
          </Button>
          <Button
            type="default"
            size="large"
            icon={<DeleteOutlined />}
            onClick={() => navigate('/manager/trash')}
          >
            回收站
          </Button>
        </Space>
      </div>
      <div className={styles.right}>
        <Outlet /> {/* 路由出口 */}
      </div>
    </div>
  )
}
