import { useCustomCursor } from './hooks/useCustomCursor'

export function CustomCursor() {
  useCustomCursor()

  return (
    <>
      <div className="cur" id="cur" />
      <div className="cur-ring" id="curRing" />
    </>
  )
}

