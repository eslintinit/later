import { Row, Column, Title } from 'atoms'

import { initialState } from 'data'
import { useState } from 'react'

export const Table = () => {
  const [objectives, setObjectives] = useState(initialState)
  const next = objectives.filter((i) => i.status === 'next')
  const now = objectives.filter((i) => i.status === 'now')
  const done = objectives.filter((i) => i.status === 'done')

  return (
    <div className="container">
      <Column next>
        <Title>Today</Title>
        {next.map((i) => (
          <Row
            key={i.id}
            errand={i}
            onClick={(id) =>
              setObjectives(
                objectives.map((i) =>
                  i.id === id ? { ...i, status: 'now' } : i,
                ),
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
              setObjectives(
                objectives.map((i) =>
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
    </div>
  )
}
