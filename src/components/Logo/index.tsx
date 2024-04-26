import React, { FC } from 'react'

import { Space, Typography } from 'antd'
import { FormOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
const { Title } = Typography
const Logo: FC = () => {
  return (
    <Link to={'/'} className="flex justify-center">
      <Space>
        <div className="text-xl text-white">
          <FormOutlined />
        </div>
        <Title className="m-0! text-xl! text-white!">小慕问卷</Title>
      </Space>
    </Link>
  )
}

export default Logo
