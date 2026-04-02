import { useEffect } from 'react'

export function useNavShadow() {
  useEffect(() => {
    const nav = document.querySelector('nav')
    if (!nav) return undefined

    const onScroll = () => {
      if (window.scrollY > 60) nav.style.boxShadow = '0 2px 30px rgba(0,0,0,.5)'
      else nav.style.boxShadow = 'none'
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}

