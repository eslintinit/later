import React from 'react'

const state = [
  {
    id: 1,
    name: 'init Later',
    status: 'done',
  },
  {
    id: 2,
    name: 'Appearence',
    status: 'done',
  },
  {
    id: 3,
    name: 'State',
    status: 'now',
  },
  {
    id: 4,
    name: 'Click to change status',
    status: 'today',
  },
]

const Title = ({ children }) => <h2 className="title">{children}</h2>

const Row = ({ children }) => (
  <div className="row">
    <div className="box" />
    {children}
  </div>
)

const Column = ({ children, style = {} }) => (
  <div className="column" style={style}>
    {children}
  </div>
)

export default () => {
  const today = state.filter((i) => i.status === 'today')
  const now = state.filter((i) => i.status === 'now')
  const done = state.filter((i) => i.status === 'done')

  return (
    <div className="container">
      <Column style={{ borderLeft: 'none' }}></Column>
      <Column>
        <Title>Today</Title>
        {today.map((i) => (
          <Row key={i.id}>{i.name}</Row>
        ))}
      </Column>
      <Column>
        <Title>Now</Title>

        {now.map((i) => (
          <Row key={i.id}>{i.name}</Row>
        ))}
      </Column>
      <Column>
        <Title>Done</Title>

        {done.map((i) => (
          <Row key={i.id}>{i.name}</Row>
        ))}
      </Column>
    </div>
  )
}
