import React, { FC, useEffect, useState } from 'react'

import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Button, Divider, Space, Tag } from 'antd'
import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
} from '@ant-design/icons'

type PropsType = {
  _id: number
  title: string
  isStar: boolean
  isPublished: boolean
  answerCount: number
  createdAt: string
  deleteQuestion?: (id: number) => void
}

const QuestionCrad: FC<PropsType> = (props: PropsType) => {
  const navigate = useNavigate()

  const { _id, title, isPublished, answerCount, createdAt, isStar } = props

  console.log('isStar', isStar)

  // const edit = (id: number) => {
  //   // 编辑问卷
  //   console.log('编辑啊啊', id, title, isPublished)
  // }

  // const del = (id: number) => {
  //   props.deleteQuestion && props.deleteQuestion(id)
  // }

  return (
    <div className=" shadow-md shadow-light-900 border-gray-500 p-3 mb-3 bg-blue-100 shadow-light-500 rounded-md">
      <div className="flex justify-between">
        <div>
          <Link
            className="text-lg"
            to={isPublished ? `/question/stat/${_id}` : `/question/edit/${_id}`}
          >
            <Space>
              {isStar && <StarOutlined className="text-amber-500" />}
              {title}
            </Space>
          </Link>
        </div>
        <div>
          <Space>
            {isPublished ? <Tag color="green">已发布</Tag> : <Tag>未发布</Tag>}
            <span>答卷：{answerCount}</span>
            <span>{createdAt}</span>
          </Space>
        </div>
      </div>
      <Divider className="my-1" />
      <div className="my-2 flex justify-between">
        <div>
          <Space>
            <Button
              icon={<EditOutlined />}
              type="default"
              size="small"
              onClick={() => navigate('/question/edit/' + _id)}
            >
              编辑问卷
            </Button>
            <Button
              icon={<LineChartOutlined />}
              type="default"
              size="small"
              onClick={() => navigate('/question/stat/' + _id)}
              disabled={!isPublished}
            >
              问卷统计
            </Button>
          </Space>
        </div>
        <div>
          <Space>
            <Button type="text" size="small" icon={<StarOutlined />}>
              {isStar ? '取消收藏' : '收藏'}
            </Button>
            <Button type="text" size="small" icon={<CopyOutlined />}>
              复制
            </Button>
            <Button type="text" size="small" icon={<DeleteOutlined />}>
              删除
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export const List: FC = () => {
  const [searchParams] = useSearchParams()
  console.log('keyword', searchParams.get('keyword'))

  const [list, setList] = useState([
    {
      _id: 1,
      title: '你对牛马话题怎么看',
      isPublished: true,
      isStar: true,
      answerCount: 85,
      createdAt: '4月26 15:28',
    },
    {
      _id: 2,
      title: '问卷2',
      isPublished: false,
      isStar: false,
      answerCount: 65,
      createdAt: '7月26 15:28',
    },
    {
      _id: 3,
      title: '问卷3',
      isPublished: false,
      isStar: false,
      answerCount: 551,
      createdAt: '3月26 12:12',
    },
    {
      _id: 4,
      title: '问卷4',
      isPublished: false,
      isStar: false,
      answerCount: 12,
      createdAt: '12月26 6:12',
    },
  ])

  useEffect(() => {
    console.log('加载网络请求')

    return () => {
      console.log('销毁')
    }
  }, [])

  const deleteQuestion = (id: number) => {
    setList(list.filter(item => item._id !== id))
  }

  // const onAdd = () => {
  //   setList([
  //     ...list,
  //     {
  //       _id: list.length + 1,
  //       title: '问卷' + (list.length + 1),
  //       isPublished: false,
  //       isStar: true,
  //       answerCount: 0,
  //       createdAt: '2022-12-12 12:12:12',
  //     },
  //   ])
  // }
  return (
    <>
      <h1>问卷列表页</h1>
      <div>
        {list.map(item => {
          const { _id, title, isPublished, answerCount, createdAt, isStar } = item
          return (
            <QuestionCrad
              _id={_id}
              key={_id}
              title={title}
              isPublished={isPublished}
              isStar={isStar}
              answerCount={answerCount}
              createdAt={createdAt}
              deleteQuestion={deleteQuestion}
            />
          )
        })}
      </div>
    </>
  )
}
