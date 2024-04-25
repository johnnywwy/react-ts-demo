import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login: FC = () => {
  const navigate = useNavigate()
  const clickHandle = () => {
    navigate(-1)
  }
  return (
    <div>
      <p>Login</p>
      <div>
        <button onClick={clickHandle}>返回</button>
      </div>
    </div>
  )
}
