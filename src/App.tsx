import React, { useState } from 'react'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
      {!isLoggedIn ? (
        <Auth onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <Dashboard />
      )}
    </div>
  )
}
