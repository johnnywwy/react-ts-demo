import { useEffect, useState, useRef } from 'react'

type GetInfoFunction = () => Promise<string>

export const getInfo: GetInfoFunction = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('当前的时间为：' + Date.now().toString())
      // reject('error')
    }, Math.random() * 10000)
  })
}

const formatTime = (milliseconds: number): string => {
  const totalSeconds = Math.floor(milliseconds / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

export const useAsyncGetInfo = () => {
  const [data, setData] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [time, setTime] = useState('')
  const timerIdRef = useRef<number | null>(null)

  useEffect(() => {
    // 页面加载时开始计时
    const startTime = Date.now()
    timerIdRef.current = setInterval(() => {
      const currentTime = Date.now() - startTime
      setTime(formatTime(currentTime))
    }, 1000)

    // 在组件卸载时清除计时器
    return () => {
      if (timerIdRef.current !== null) {
        clearInterval(timerIdRef.current)
      }
    }
  }, [])

  useEffect(() => {
    setLoading(true)
    getInfo().then(res => {
      setLoading(false)
      setData(res)
      // 请求成功后停止计时器
      if (timerIdRef.current !== null) {
        clearInterval(timerIdRef.current)
      }
    })
  }, [])

  return {
    time,
    data,
    loading,
  }
}
