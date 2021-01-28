import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/app'
import 'assets/css/index.css'

import AppProvider from 'context/app'
import TasksProvider from 'context/tasks'

ReactDOM.render(
  <React.StrictMode>
    <TasksProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </TasksProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
