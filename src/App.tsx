// import { useState } from 'react'
// import StateDemo from './test/stateDemo'
// import { List1 } from './test/list'
// import UseRefDemo from './test/useRefDemo'

// import UseMemoDemo from './test/useMemoDemo'
// import UseCallBackDemo from './test/useCallBackDemo'

// import { useMouseHooks } from './hooks/useMouseHooks'
// import { useAsyncGetInfo } from './hooks/useAsyncGetInfo'

import { RouterProvider } from 'react-router-dom'
import router from './router'
import { ConfigProvider } from 'antd'

function App() {
  return (
    // theme={{ token: { colorPrimary: '#00b96b' } }}
    <ConfigProvider>
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}

export default App
