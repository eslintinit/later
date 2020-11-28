import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/app'
import 'assets/css/index.css'

import AppProvider from 'context/app'
import TasksProvider from 'context/tasks'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <TasksProvider>
        <App />
      </TasksProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
