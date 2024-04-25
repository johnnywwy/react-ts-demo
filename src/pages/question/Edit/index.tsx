import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
export const Edit: FC = () => {
  const { id = '' } = useParams()
  return (
    <div>
      <h1>question edit</h1>
      <p>id是： {id}</p>
    </div>
  )
}
