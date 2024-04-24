// import { useState } from 'react'
// import StateDemo from './test/stateDemo'
// import { List1 } from './test/list'
// import UseRefDemo from './test/useRefDemo'

// import UseMemoDemo from './test/useMemoDemo'
// import UseCallBackDemo from './test/useCallBackDemo'

import { useMouseHooks } from './hooks/useMouseHooks'
import { useAsyncGetInfo } from './hooks/useAsyncGetInfo'

function App() {
  const { x, y } = useMouseHooks()
  const { time, loading, data } = useAsyncGetInfo()
  // const [count, setCount] = useState(0)

  // // const a = 100

  // const add = () => {
  //   setCount(count + 1)
  // }

  return (
    <>
      <p>
        鼠标坐标： X: {x} Y:{y}
      </p>
      <p>时间：{time}</p>
      <p>{loading ? '加载中...' : data}</p>
      {/* <List1 /> */}
      {/* <StateDemo /> */}
      {/* <UseRefDemo /> */}
      {/* <UseMemoDemo /> */}
      {/* <UseCallBackDemo /> */}
      {/* <StateDemo /> */}
      {/* <div>
        <button onClick={add}>{count}</button>
      </div> */}
    </>
  )
}

export default App
