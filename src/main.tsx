import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/Login'

const App = () => (
  <div>
    <Login />
  </div>
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
