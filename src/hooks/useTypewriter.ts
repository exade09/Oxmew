import { useEffect, useState } from 'react'

export function useTypewriter(text: string, speed = 42, startDelay = 500) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(text.length)
      return
    }
    setCount(0)
    let timer: number | undefined
    const start = window.setTimeout(() => {
      timer = window.setInterval(() => {
        setCount((value) => {
          if (value >= text.length) {
            window.clearInterval(timer)
            return value
          }
          return value + 1
        })
      }, speed)
    }, startDelay)
    return () => {
      window.clearTimeout(start)
      if (timer) window.clearInterval(timer)
    }
  }, [text, speed, startDelay])

  return { displayed: text.slice(0, count), done: count >= text.length }
}
