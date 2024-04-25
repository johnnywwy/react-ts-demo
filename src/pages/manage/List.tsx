import React, { FC, useEffect, useState } from 'react'

import './list.css'
type PropsType = {
  id: number
  name: string
  isPublished: boolean
  deleteQuestion?: (id: number) => void
}

const QuestionCrad: FC<PropsType> = props => {
  const { id, name, isPublished } = props

  const edit = (id: number) => {
    // 编辑问卷
    console.log('编辑啊啊', id, name, isPublished)
  }

  const del = (id: number) => {
    props.deleteQuestion && props.deleteQuestion(id)
  }

  // useEffect(() => {
  //   console.log('list card mounted!!')

  //   return () => {
  //     console.log('list card unmounted~~~')
  //   }

  //   // 生命周期: 创建 更新（state 变化）, 销毁
  // }, [])

  return (
    <div className="list-name">
      <strong>{name}</strong> &nbsp;
      {isPublished ? <span style={{ color: 'green' }}>已发布</span> : <span>未发布</span>} &nbsp;
      <button onClick={() => edit(id)}>编辑</button> &nbsp;
      <button onClick={() => del(id)} style={{ color: 'red' }}>
        删除
      </button>
    </div>
  )
}

export const List1: FC = () => {
  const [list, setList] = useState([
    {
      id: 1,
      name: '问卷1',
      isPublished: true,
    },
    {
      id: 2,
      name: '问卷2',
      isPublished: false,
    },
    {
      id: 3,
      name: '问卷3',
      isPublished: false,
    },
    {
      id: 4,
      name: '问卷4',
      isPublished: false,
    },
  ])

  useEffect(() => {
    console.log('加载网络请求')

    return () => {
      console.log('销毁')
    }
  }, [])

  // useEffect(() => {
  //   console.log('list 变化了')
  // }, [list])

  // console.log('加载网络请求')

  const deleteQuestion = (id: number) => {
    // console.log('父组件收到了啊啊啊', id)

    setList(list.filter(item => item.id !== id))
  }

  const onAdd = () => {
    setList([
      ...list,
      {
        id: list.length + 1,
        name: '问卷' + (list.length + 1),
        isPublished: false,
      },
    ])
  }
  return (
    <>
      <h1>问卷列表页</h1>
      <button onClick={onAdd}>新增问卷</button>
      <div>
        {list.map(item => {
          const { id, name, isPublished } = item
          return (
            <QuestionCrad
              id={id}
              key={id}
              name={name}
              isPublished={isPublished}
              deleteQuestion={deleteQuestion}
            />
          )
        })}
      </div>
    </>
  )
}
