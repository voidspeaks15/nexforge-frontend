import React, { useState } from 'react'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Billing from './pages/Billing'
import Analytics from './pages/Analytics'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentPage, setCurrentPage] = useState('dashboard')

  return (
    <div>
      {!isLoggedIn ? (
        <Auth onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <div>
          <nav style={{ padding: '15px 20px', borderBottom: '2px solid #000', display: 'flex', gap: '15px', backgroundColor: '#f9f9f9' }}>
            <button onClick={() => setCurrentPage('dashboard')} style={{ padding: '8px 15px', border: 'none', background: currentPage === 'dashboard' ? '#000' : '#fff', color: currentPage === 'dashboard' ? '#fff' : '#000', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' }}>
              Dashboard
            </button>
            <button onClick={() => setCurrentPage('analytics')} style={{ padding: '8px 15px', border: 'none', background: currentPage === 'analytics' ? '#000' : '#fff', color: currentPage === 'analytics' ? '#fff' : '#000', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' }}>
              Analytics
            </button>
            <button onClick={() => setCurrentPage('billing')} style={{ padding: '8px 15px', border: 'none', background: currentPage === 'billing' ? '#000' : '#fff', color: currentPage === 'billing' ? '#fff' : '#000', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' }}>
              Billing
            </button>
            <button onClick={() => {
              localStorage.removeItem('token')
              localStorage.removeItem('email')
              setIsLoggedIn(false)
            }} style={{ padding: '8px 15px', border: 'none', background: '#d32f2f', color: '#fff', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold', marginLeft: 'auto' }}>
              Logout
            </button>
          </nav>

          {currentPage === 'dashboard' && <Dashboard />}
          {currentPage === 'analytics' && <Analytics />}
          {currentPage === 'billing' && <Billing />}
        </div>
      )}
    </div>
  )
}
