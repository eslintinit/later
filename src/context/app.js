import { useState, createContext } from 'react'
import { useKeyboardShortcut } from 'hooks'

const appContext = createContext()

const AppProvider = ({ children }) => {
  // 0 - later
  // 1 - next
  // 2 - now
  // 3 - done
  // 4 - bin
  const [boardIndex, setBoardIndex] = useState(1)
  const [cardIndex, setCardIndex] = useState(0)

  useKeyboardShortcut({
    ArrowRight: () => {
      setBoardIndex((old) => (old === 4 ? old : old + 1))
      setCardIndex(0)
    },
    ArrowLeft: () => {
      setBoardIndex((old) => (old === 0 ? old : old - 1))
      setCardIndex(0)
    },
    ArrowUp: () => setCardIndex((old) => old - 1),
    ArrowDown: () => setCardIndex((old) => old + 1),
  })

  console.log('cardIndex')
  console.log(cardIndex)
  console.log('boardIndex')
  console.log(boardIndex)
  return (
    <appContext.Provider
      value={{
        cardIndex,
        setCardIndex,
        boardIndex,
        setBoardIndex,
      }}
    >
      {children}
    </appContext.Provider>
  )
}

export { AppProvider as default, appContext }
