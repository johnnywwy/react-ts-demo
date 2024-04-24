import React, { FC, useMemo, useState } from 'react'

type Props = {
  // 在这里定义组件的属性类型
}

const useMemoDemo: FC<Props> = () => {
  const [num1, setNum1] = useState(10)
  const [num2, setNum2] = useState(20)

  // 使用 useMemo 来缓存计算结果

  const sum = useMemo(() => {
    return num1 + num2
  }, [num1, num2])

  const onAdd = () => {
    setNum1(num1 + 1)
  }

  const onAdd2 = () => {
    setNum2(num2 + 1)
  }

  return (
    <div>
      {/* 在这里编写你的 JSX */}
      <h1>Hello, World!</h1>

      <div>
        <p>
          num1: {num1}, num2: {num2}
        </p>
        <button onClick={onAdd}>num1 + 1</button> &nbsp;
        <button onClick={onAdd2}>num2 + 1</button>
      </div>
      <p>合计：{sum}</p>
    </div>
  )
}

export default useMemoDemo
