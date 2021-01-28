import styled from 'styled-components'

const Task = ({ task, active }) => {
  return (
    <div style={active ? { border: '1px solid purple' } : {}}>{task.name}</div>
  )
}
export default Task
