import React, { useState } from 'react'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Billing from './pages/Billing'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentPage, setCurrentPage] = useState('dashboard')

  return (
    <div>
      {!isLoggedIn ? (
        <Auth onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <div>
          <nav style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
            <button onClick={() => setCurrentPage('dashboard')} style={{ marginRight: '10px' }}>
              Dashboard
            </button>
            <button onClick={() => setCurrentPage('billing')}>
              Billing
            </button>
            <button onClick={() => {
              localStorage.removeItem('token')
              setIsLoggedIn(false)
            }} style={{ float: 'right' }}>
              Logout
            </button>
          </nav>

          {currentPage === 'dashboard' && <Dashboard />}
          {currentPage === 'billing' && <Billing />}
        </div>
      )}
    </div>
  )
}
