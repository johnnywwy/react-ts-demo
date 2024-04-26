import React, { FC } from 'react'
import { Typography, Button } from 'antd'
const { Title, Paragraph } = Typography

export const Home: FC = () => {
  const navigate = useNavigate()
  const onclick = () => {
    navigate('/manager/list')
    console.log('1')
  }
  return (
    <div className="flex justify-center flex-col items-center h-full bg-gradient-to-r from-[#4facfe] to-[#00f2fe]">
      <Title className="text-4xl  font-bold"> 问卷调查 | 在线投票</Title>
      <Paragraph>已累计创建问卷 10090 份，发布问卷 100 份，收到答卷10698份</Paragraph>
      <Button type="primary" size="large" onClick={() => onclick()}>
        开始使用
      </Button>
    </div>
  )
}
