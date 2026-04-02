import { useEffect } from 'react'

export function useCustomCursor() {
  useEffect(() => {
    const cur = document.getElementById('cur')
    const ring = document.getElementById('curRing')
    if (!cur || !ring) return undefined

    let mx = 0
    let my = 0
    let rx = 0
    let ry = 0
    let rafId = 0

    const onMouseMove = (e) => {
      mx = e.clientX
      my = e.clientY
      cur.style.left = `${mx}px`
      cur.style.top = `${my}px`
    }

    const animateRing = () => {
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      ring.style.left = `${rx}px`
      ring.style.top = `${ry}px`
      rafId = window.requestAnimationFrame(animateRing)
    }

    document.addEventListener('mousemove', onMouseMove)
    rafId = window.requestAnimationFrame(animateRing)

    const targets = Array.from(document.querySelectorAll('a,button'))
    const onEnter = () => {
      cur.style.width = '18px'
      cur.style.height = '18px'
    }
    const onLeave = () => {
      cur.style.width = '10px'
      cur.style.height = '10px'
    }
    targets.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      window.cancelAnimationFrame(rafId)
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])
}

