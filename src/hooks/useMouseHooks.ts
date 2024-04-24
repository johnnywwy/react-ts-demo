import { useEffect, useState } from 'react'

export const useMouseHooks = () => {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  })

  const mouseMoveHandler = (e: MouseEvent) => {
    setMouse({
      x: e.clientX,
      y: e.clientY,
    })
  }

  useEffect(() => {
    // mouseMoveHandler
    window.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      console.log('unmount')
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  return mouse
}
