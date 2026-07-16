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
        <div style={{ backgroundColor: '#0a0e27', minHeight: '100vh' }}>
          <nav style={{
            padding: '15px 20px',
            borderBottom: '2px solid rgba(168, 85, 247, 0.3)',
            display: 'flex',
            gap: '10px',
            backgroundColor: '#0a0e27',
            overflowX: 'auto',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}>
            <button
              onClick={() => setCurrentPage('dashboard')}
              style={{
                padding: '10px 20px',
                cursor: 'pointer',
                backgroundColor: currentPage === 'dashboard' ? '#a855f7' : 'transparent',
                color: currentPage === 'dashboard' ? '#fff' : '#cbd5e1',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 'bold',
                fontSize: '14px',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 'dashboard') {
                  e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.2)'
                  e.currentTarget.style.color = '#a855f7'
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== 'dashboard') {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = '#cbd5e1'
                }
              }}
            >
              Dashboard
            </button>

            <button
              onClick={() => setCurrentPage('generator')}
              style={{
                padding: '10px 20px',
                cursor: 'pointer',
                backgroundColor: currentPage === 'generator' ? '#a855f7' : 'transparent',
                color: currentPage === 'generator' ? '#fff' : '#cbd5e1',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 'bold',
                fontSize: '14px',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 'generator') {
                  e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.2)'
                  e.currentTarget.style.color = '#a855f7'
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== 'generator') {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = '#cbd5e1'
                }
              }}
            >
              Generate
            </button>

            <button
              onClick={() => setCurrentPage('analytics')}
              style={{
                padding: '10px 20px',
                cursor: 'pointer',
                backgroundColor: currentPage === 'analytics' ? '#a855f7' : 'transparent',
                color: currentPage === 'analytics' ? '#fff' : '#cbd5e1',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 'bold',
                fontSize: '14px',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 'analytics') {
                  e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.2)'
                  e.currentTarget.style.color = '#a855f7'
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== 'analytics') {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = '#cbd5e1'
                }
              }}
            >
              Analytics
            </button>

            <button
              onClick={() => setCurrentPage('advanced-analytics')}
              style={{
                padding: '10px 20px',
                cursor: 'pointer',
                backgroundColor: currentPage === 'advanced-analytics' ? '#a855f7' : 'transparent',
                color: currentPage === 'advanced-analytics' ? '#fff' : '#cbd5e1',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 'bold',
                fontSize: '14px',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 'advanced-analytics') {
                  e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.2)'
                  e.currentTarget.style.color = '#a855f7'
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== 'advanced-analytics') {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = '#cbd5e1'
                }
              }}
            >
              📊 Charts
            </button>

            <button
              onClick={() => setCurrentPage('billing')}
              style={{
                padding: '10px 20px',
                cursor: 'pointer',
                backgroundColor: currentPage === 'billing' ? '#a855f7' : 'transparent',
                color: currentPage === 'billing' ? '#fff' : '#cbd5e1',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 'bold',
                fontSize: '14px',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 'billing') {
                  e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.2)'
                  e.currentTarget.style.color = '#a855f7'
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== 'billing') {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = '#cbd5e1'
                }
              }}
            >
              Billing
            </button>

            <button
              onClick={() => setCurrentPage('settings')}
              style={{
                padding: '10px 20px',
                cursor: 'pointer',
                backgroundColor: currentPage === 'settings' ? '#a855f7' : 'transparent',
                color: currentPage === 'settings' ? '#fff' : '#cbd5e1',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 'bold',
                fontSize: '14px',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 'settings') {
                  e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.2)'
                  e.currentTarget.style.color = '#a855f7'
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== 'settings') {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = '#cbd5e1'
                }
              }}
            >
              Settings
            </button>

            <button
              onClick={() => setCurrentPage('admin')}
              style={{
                padding: '10px 20px',
                cursor: 'pointer',
                backgroundColor: currentPage === 'admin' ? '#a855f7' : 'transparent',
                color: currentPage === 'admin' ? '#fff' : '#cbd5e1',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 'bold',
                fontSize: '14px',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 'admin') {
                  e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.2)'
                  e.currentTarget.style.color = '#a855f7'
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== 'admin') {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = '#cbd5e1'
                }
              }}
            >
              👨‍💼 Admin
            </button>

            <button
              onClick={() => { setIsLoggedIn(false); setCurrentPage('landing') }}
              style={{
                padding: '10px 20px',
                cursor: 'pointer',
                marginLeft: 'auto',
                backgroundColor: 'rgba(239, 68, 68, 0.2)',
                color: '#fca5a5',
                border: '1px solid rgba(239, 68, 68, 0.5)',
                borderRadius: '6px',
                fontWeight: 'bold',
                fontSize: '14px',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.2)'
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
