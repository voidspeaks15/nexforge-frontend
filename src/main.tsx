import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => (
  <div style={{ padding: '20px', fontFamily: 'Arial' }}>
    <h1>NEXFORGE Frontend Works! 🚀</h1>
    <p>Backend API: https://nexforge-backend.onrender.com</p>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
