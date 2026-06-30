import React, { useState } from 'react'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Billing from './pages/Billing'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'
import VideoGenerator from './pages/VideoGenerator'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentPage, setCurrentPage] = useState('dashboard')

  return (
    <div>
      {!isLoggedIn ? (
        <Auth onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <div>
          <nav style={{ padding: '15px 20px', borderBottom: '2px solid #000', display: 'flex', gap: '15px', backgroundColor: '#f9f9f9', overflowX: 'auto' }}>
            <button onClick={() => setCurrentPage('dashboard')} style={{ padding: '8px 15px', border: 'none', background: currentPage === 'dashboard' ? '#000' : '#fff', color: currentPage === 'dashboard' ? '#fff' : '#000', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
              Dashboard
            </button>
            <button onClick={() => setCurrentPage('generator')} style={{ padding: '8px 15px', border: 'none', background: currentPage === 'generator' ? '#000' : '#fff', color: currentPage === 'generator' ? '#fff' : '#000', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
              Generate
            </button>
            <button onClick={() => setCurrentPage('analytics')} style={{ padding: '8px 15px', border: 'none', background: currentPage === 'analytics' ? '#000' : '#fff', color: currentPage === 'analytics' ? '#fff' : '#000', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
              Analytics
            </button>
            <button onClick={() => setCurrentPage('billing')} style={{ padding: '8px 15px', border: 'none', background: currentPage === 'billing' ? '#000' : '#fff', color: currentPage === 'billing' ? '#fff' : '#000', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
              Billing
            </button>
            <button onClick={() => setCurrentPage('settings')} style={{ padding: '8px 15px', border: 'none', background: currentPage === 'settings' ? '#000' : '#fff', color: currentPage === 'settings' ? '#fff' : '#000', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
              Settings
            </button>
            <button onClick={() => {
              localStorage.removeItem('token')
              localStorage.removeItem('email')
              setIsLoggedIn(false)
            }} style={{ padding: '8px 15px', border: 'none', background: '#d32f2f', color: '#fff', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold', marginLeft: 'auto', whiteSpace: 'nowrap' }}>
              Logout
            </button>
          </nav>

          {currentPage === 'dashboard' && <Dashboard />}
          {currentPage === 'generator' && <VideoGenerator />}
          {currentPage === 'analytics' && <Analytics />}
          {currentPage === 'billing' && <Billing />}
          {currentPage === 'settings' && <Settings />}
        </div>
      )}
    </div>
  )
}
