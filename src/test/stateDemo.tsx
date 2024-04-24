import { useState } from 'react'

const StateDemo = () => {
  const [count, setCount] = useState(0) //useState 会触发组件的重新渲染

  const add = () => {
    setCount(count + 1)
    setCount(count + 1)
    console.log('count 的值是', count) //异步更新 无法直接拿到最新的state值

    // 如果说一个变量不需要用于 jsx 中显示，可以使用useRef
  }

  // const add1 = () => {
  //   setCount(count + 1)
  //   setCount(count + 1)
  //   setCount(count + 1)
  //   setCount(count + 1)
  //   // 会被合并
  //   console.log('count 的值是', count) //异步更新 无法直接拿到最新的state值

  //   // 如果说一个变量不需要用于 jsx 中显示，可以使用useRef
  // }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={add}>Click me {count}</button>
    </div>
  )
}

export default StateDemo
