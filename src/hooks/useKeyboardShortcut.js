import { useEffect } from 'react'

export const useKeyboardShortcut = (keyMap) => {
  useEffect(() => {
    function handleKeyDown(e) {
      const callback = keyMap[e.key]
      if (callback) {
        callback()
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  })
}
