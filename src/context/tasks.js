import { useState, createContext } from 'react'
import initTasks from './data/tasks'

const TasksContext = createContext()

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(initTasks)

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export { TasksProvider as default, TasksContext }
