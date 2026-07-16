import React, { useState } from 'react'
import Auth from './pages/Auth'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Billing from './pages/Billing'
import Analytics from './pages/Analytics'
import AdvancedAnalytics from './pages/AdvancedAnalytics'
import Settings from './pages/Settings'
import VideoGenerator from './pages/VideoGenerator'
import AdminDashboard from './pages/AdminDashboard'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentPage, setCurrentPage] = useState('landing')

  return (
    <div>
      {!isLoggedIn && currentPage === 'landing' ? (
        <Landing onNavigate={(page) => setCurrentPage(page)} />
      ) : !isLoggedIn && currentPage === 'auth' ? (
        <Auth onLogin={() => { setIsLoggedIn(true); setCurrentPage('dashboard') }} />
      ) : isLoggedIn ? (
        <div>
          <nav style={{
            padding: '15px 20px',
            borderBottom: '2px solid #000',
            display: 'flex',
            gap: '10px',
            backgroundColor: '#f9f9f9',
            overflowX: 'auto',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => setCurrentPage('dashboard')}
              style={{
                padding: '8px 15px',
                cursor: 'pointer',
                backgroundColor: currentPage === 'dashboard' ? '#000' : 'transparent',
                color: currentPage === 'dashboard' ? '#fff' : '#000',
                border: 'none',
                borderRadius: '4px',
                fontWeight: 'bold'
              }}
            >
              Dashboard
            </button>
            <button
              onClick={() => setCurrentPage('generator')}
              style={{
                padding: '8px 15px',
                cursor: 'pointer',
                backgroundColor: currentPage === 'generator' ? '#000' : 'transparent',
                color: currentPage === 'generator' ? '#fff' : '#000',
                border: 'none',
                borderRadius: '4px',
                fontWeight: 'bold'
              }}
            >
              Generate
            </button>
            <button
              onClick={() => setCurrentPage('analytics')}
              style={{
                padding: '8px 15px',
                cursor: 'pointer',
                backgroundColor: currentPage === 'analytics' ? '#000' : 'transparent',
                color: currentPage === 'analytics' ? '#fff' : '#000',
                border: 'none',
                borderRadius: '4px',
                fontWeight: 'bold'
              }}
            >
              Analytics
            </button>
            <button
              onClick={() => setCurrentPage('advanced-analytics')}
              style={{
                padding: '8px 15px',
                cursor: 'pointer',
                backgroundColor: currentPage === 'advanced-analytics' ? '#000' : 'transparent',
                color: currentPage === 'advanced-analytics' ? '#fff' : '#000',
                border: 'none',
                borderRadius: '4px',
                fontWeight: 'bold'
              }}
            >
              📊 Charts
            </button>
            <button
              onClick={() => setCurrentPage('billing')}
              style={{
                padding: '8px 15px',
                cursor: 'pointer',
                backgroundColor: currentPage === 'billing' ? '#000' : 'transparent',
                color: currentPage === 'billing' ? '#fff' : '#000',
                border: 'none',
                borderRadius: '4px',
                fontWeight: 'bold'
              }}
            >
              Billing
            </button>
            <button
              onClick={() => setCurrentPage('settings')}
              style={{
                padding: '8px 15px',
                cursor: 'pointer',
                backgroundColor: currentPage === 'settings' ? '#000' : 'transparent',
                color: currentPage === 'settings' ? '#fff' : '#000',
                border: 'none',
                borderRadius: '4px',
                fontWeight: 'bold'
              }}
            >
              Settings
            </button>
            <button
              onClick={() => setCurrentPage('admin')}
              style={{
                padding: '8px 15px',
                cursor: 'pointer',
                backgroundColor: currentPage === 'admin' ? '#000' : 'transparent',
                color: currentPage === 'admin' ? '#fff' : '#000',
                border: 'none',
                borderRadius: '4px',
                fontWeight: 'bold'
              }}
            >
              👨‍💼 Admin
            </button>
            <button
              onClick={() => { setIsLoggedIn(false); setCurrentPage('landing') }}
              style={{
                padding: '8px 15px',
                cursor: 'pointer',
                marginLeft: 'auto',
                backgroundColor: '#ff4444',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                fontWeight: 'bold'
              }}
            >
              Logout
            </button>
          </nav>

          {currentPage === 'dashboard' && <Dashboard />}
          {currentPage === 'generator' && <VideoGenerator />}
          {currentPage === 'analytics' && <Analytics />}
          {currentPage === 'advanced-analytics' && <AdvancedAnalytics />}
          {currentPage === 'billing' && <Billing />}
          {currentPage === 'settings' && <Settings />}
          {currentPage === 'admin' && <AdminDashboard />}
        </div>
      ) : null}
    </div>
  )
}
