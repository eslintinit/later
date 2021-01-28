import { useContext } from 'react'
import { appContext, tasksContext } from 'context'

import Later from './later'
import Next from './next'
import Now from './now'
import Done from './done'

const App = () => {
  const { boardIndex } = useContext(appContext)
  const { tasks } = useContext(tasksContext)

  if (boardIndex === 0) {
    return <Later tasks={tasks.filter((i) => i.status === 'later')} />
  }

  if (boardIndex === 1) {
    return <Next tasks={tasks.filter((i) => i.status === 'next')} />
  }

  if (boardIndex === 2) {
    return <Now tasks={tasks.filter((i) => i.status === 'now')} />
  }

  if (boardIndex === 3) {
    return <Done tasks={tasks.filter((i) => i.status === 'done')} />
  }

  return <div />
}

export default App
