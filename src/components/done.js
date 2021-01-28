import { useContext } from 'react'
import { appContext } from 'context'

import Flex from 'components/atoms/flex'
import Task from 'components/atoms/task'

const Done = ({ tasks }) => {
  const { cardIndex } = useContext(appContext)

  return (
    <Flex row>
      <Flex
        column
        justifyEnd
        style={{
          flex: 0.5,
          borderRight: '1px solid #e8e8e8',
          height: '100vh',
          paddingBottom: 32,
          boxSizing: 'border-box',
        }}
      >
        <span
          style={{
            transform: 'rotate(-90deg)',
          }}
        >
          Next
        </span>
      </Flex>
      <Flex column style={{ flex: 29, padding: 22 }}>
        <b style={{ marginBottom: 16 }}>Done</b>
        <div>
          {tasks.map((task, index) => (
            <Task task={task} active={index === cardIndex} />
          ))}
        </div>
      </Flex>
    </Flex>
  )
}

export default Done
