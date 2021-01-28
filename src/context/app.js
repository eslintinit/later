import { useState, createContext, useContext } from 'react'
import { tasksContext } from 'context'
import { useKeyboardShortcut } from 'hooks'

const appContext = createContext()

const hash = {
  0: 'later',
  1: 'next',
  2: 'now',
  3: 'done',
}

const AppProvider = ({ children }) => {
  // 0 - later
  // 1 - next
  // 2 - now
  // 3 - done / archieve
  const [boardIndex, setBoardIndex] = useState(1)
  const [cardIndex, setCardIndex] = useState(0)
  const { tasks } = useContext(tasksContext)

  useKeyboardShortcut({
    ArrowRight: () => {
      // if there no tasks in now - skip it
      if (boardIndex === 1) {
        if (tasks.filter((i) => i.status === 'now').length === 0) {
          setBoardIndex(3)
          setCardIndex(0)
        }
      } else {
        if (boardIndex !== 3) {
          setBoardIndex((old) => (old === 3 ? old : old + 1))
          setCardIndex(0)
        }
      }
    },
    ArrowLeft: () => {
      // if there no tasks in now - skip it
      if (boardIndex === 3) {
        if (tasks.filter((i) => i.status === 'now').length === 0) {
          setBoardIndex(1)
          setCardIndex(0)
        }
      } else {
        if (boardIndex !== 0) {
          setBoardIndex((old) => (old === 0 ? old : old - 1))
          setCardIndex(0)
        }
      }
    },
    ArrowUp: () =>
      setCardIndex((old) =>
        old === 0
          ? tasks.filter((i) => i.status === hash[boardIndex]).length - 1
          : old - 1,
      ),
    ArrowDown: () =>
      setCardIndex((old) =>
        old === tasks.filter((i) => i.status === hash[boardIndex]).length - 1
          ? 0
          : old + 1,
      ),
    Enter: () => {
      // Move task to next column
      alert(
        tasks.filter((i) => i.status === hash[boardIndex])[cardIndex].name +
          ' [Move next]',
      )
    },
    Escape: () => {
      // Move task to previous column
      alert(
        tasks.filter((i) => i.status === hash[boardIndex])[cardIndex].name +
          ' [Move back]',
      )
    },
  })

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
