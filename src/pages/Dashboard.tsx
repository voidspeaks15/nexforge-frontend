import React, { useState } from 'react'

export default function Dashboard() {
  const [email, setEmail] = useState(localStorage.getItem('email') || 'User')

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    window.location.reload()
  }

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>🌑 NEXFORGE Dashboard</h1>
      <p>Welcome, {email}! 👋</p>

      <div style={{
        padding: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <h2>Your Stats:</h2>
        <p>Videos generated: 0</p>
        <p>Total views: 0</p>
        <p>Subscription: STARTER</p>
      </div>

      <button
        onClick={handleLogout}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#000',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Logout
      </button>
    </div>
  )
}
