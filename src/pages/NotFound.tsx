import React, { FC } from 'react'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
export const NotFound: FC = () => {
  const navigat = useNavigate()
  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉, 你访问的页面走丢了！"
      extra={
        <Button type="primary" onClick={() => navigat(-1)}>
          返回上一页
        </Button>
      }
    />
  )
}
