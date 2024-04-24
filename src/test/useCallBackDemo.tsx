import { FC, useCallback, useState } from 'react'

type Props = {
  // 在这里定义组件的属性类型
}

const UseCallBackDemo: FC<Props> = () => {
  const [text, setText] = useState('')

  const fn1 = () => console.log('fn1 text', text)

  const fn2 = useCallback(() => console.log('fn2 text', text), [text])

  return (
    <div>
      {/* 在这里编写你的 JSX */}
      <button onClick={fn1}>fn1</button> &nbsp;
      <button onClick={fn2}>fn2</button> &nbsp;
      <h1>{text}</h1>
      <input onChange={e => setText(e.target.value)} value={text} />
    </div>
  )
}

export default UseCallBackDemo
