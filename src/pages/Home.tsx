import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

export const Home: FC = () => {
  const navigate = useNavigate()
  const clickHandle = () => {
    navigate('/login')
  }
  return (
    <div>
      <p>Home</p>
      <div>
        <button onClick={clickHandle}>登录</button>
      </div>
    </div>
  )
}
