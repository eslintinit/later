import Flex from 'components/atoms/flex'

const activeStyle = {
  marginTop: 8,
  border: '1px solid purple',
}

const inactiveStyle = {
  backgroundColor: 'hsl(0 0% 97%)',
  paddingTop: 8,
}

const NextDone = ({ next, done }) => (
  <Flex row full>
    <Flex fullWidth style={next ? activeStyle : inactiveStyle}>
      next
    </Flex>
    <Flex fullWidth style={done ? activeStyle : inactiveStyle}>
      done
    </Flex>
  </Flex>
)

export default NextDone
