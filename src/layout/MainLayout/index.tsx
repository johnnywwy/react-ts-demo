import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'

import Logo from '../../components/Logo'
import UserInfo from '../../components/UserInfo'

const { Header, Footer, Content } = Layout

export const MainLayout: FC = () => {
  return (
    <Layout className="h-vh overflow-hidden rounded-lg">
      <Header className="flex justify-between items-center px-5 text-center">
        <Logo />
        <UserInfo />
      </Header>
      <Content className="bg-blue-100 overflow-auto h-[100px]">
        <Outlet />
      </Content>

      <Footer className="min-h-[64px] text-white p-0 flex justify-center items-center bg-gray-400 text-center">
        小牧问卷 &copy; 2023 -present. Create by johnnywwy
      </Footer>
    </Layout>
  )
}
