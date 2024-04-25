import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

export const Home: FC = () => {
  const navigate = useNavigate()
  const clickHandle = () => {
    navigate('/login')
  }
  return (
    <div>
      <p>Home</p>
      <div>
        <Button type="primary">Button</Button>

        <button onClick={clickHandle}>登录</button>
      </div>
    </div>
  )
}
