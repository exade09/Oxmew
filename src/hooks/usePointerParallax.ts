import { useState, type MouseEvent } from 'react'

export function usePointerParallax(strength = 14) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const onPointerMove = (event: MouseEvent<HTMLElement>) => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const box = event.currentTarget.getBoundingClientRect()
    setOffset({
      x: ((event.clientX - box.left) / box.width - 0.5) * strength,
      y: ((event.clientY - box.top) / box.height - 0.5) * strength,
    })
  }
  const onPointerLeave = () => setOffset({ x: 0, y: 0 })
  return { offset, onPointerMove, onPointerLeave }
}
