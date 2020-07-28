import React, { useState } from 'react'

const initialState = [
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

const Row = ({ children, done = false, errand = {}, onClick = () => {} }) => (
  <div className="row" onClick={() => onClick(errand.id)}>
    <div className={`box ${done ? 'done' : ''}`} />
    {children}
  </div>
)

const Column = ({ children, style = {}, done = false }) => (
  <div className={`column ${done ? 'done' : ''}`} style={style}>
    {children}
  </div>
)

export default () => {
  const [errands, setErrands] = useState(initialState)
  const today = errands.filter((i) => i.status === 'today')
  const now = errands.filter((i) => i.status === 'now')
  const done = errands.filter((i) => i.status === 'done')

  return (
    <div className="container">
      <Column style={{ borderLeft: 'none' }}></Column>
      <Column today>
        <Title>Today</Title>
        {today.map((i) => (
          <Row
            key={i.id}
            errand={i}
            onClick={(id) =>
              setErrands(
                errands.map((i) => (i.id === id ? { ...i, status: 'now' } : i)),
              )
            }
          >
            {i.name}
          </Row>
        ))}
      </Column>
      <Column now>
        <Title>Now</Title>

        {now.map((i) => (
          <Row
            key={i.id}
            errand={i}
            onClick={(id) =>
              setErrands(
                errands.map((i) =>
                  i.id === id ? { ...i, status: 'done' } : i,
                ),
              )
            }
          >
            {i.name}
          </Row>
        ))}
      </Column>
      <Column done>
        <Title>Done</Title>

        {done.map((i) => (
          <Row key={i.id}>{i.name}</Row>
        ))}
      </Column>
      <Column />
    </div>
  )
}
