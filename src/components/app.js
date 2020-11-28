import { useContext } from 'react'
import { appContext } from 'context'

import LaterBin from './later-bin'
import NextDone from './next-done'
import Now from './now'

const App = () => {
  const { boardIndex } = useContext(appContext)

  if (boardIndex === 0) {
    return <LaterBin later />
  }

  if (boardIndex === 1) {
    return <NextDone next />
  }

  if (boardIndex === 2) {
    return <Now />
  }

  if (boardIndex === 3) {
    return <NextDone done />
  }

  if (boardIndex === 4) {
    return <LaterBin bin />
  }

  return <div />
}

export default App
