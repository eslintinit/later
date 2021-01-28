import { useState, createContext } from 'react'
import initTasks from './data/tasks'

const tasksContext = createContext()

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(initTasks)

  return (
    <tasksContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {children}
    </tasksContext.Provider>
  )
}

export { TasksProvider as default, tasksContext }
