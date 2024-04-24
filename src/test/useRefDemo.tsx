import React, { FC, useRef } from 'react'

type Props = {
  // 在这里定义组件的属性类型
}

const useRefDemo: FC<Props> = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const selectInput = () => {
    if (inputRef.current) {
      inputRef.current.select() //DOM 节点，DOM操作 API
    }
  }
  return (
    <div>
      {/* 在这里编写你的 JSX */}
      <h1>Hello, World!</h1>
      <input ref={inputRef} defaultValue="Hello, World!" />
      <button onClick={selectInput}>选中 input</button>
    </div>
  )
}

export default useRefDemo
