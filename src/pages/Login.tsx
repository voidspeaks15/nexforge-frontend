import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      const response = await axios.post(
        'https://nexforge-backend.onrender.com/api/auth/login',
        { email, password }
      )
      
      setSuccess('Login successful! Token: ' + response.data.token.substring(0, 20) + '...')
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('email', email)
      
      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 2000)
    } catch (err: any) {
      setError(err.response?.data?.error || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      maxWidth: '400px',
      margin: '100px auto',
      padding: '40px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      fontFamily: 'Arial'
    }}>
      <h1 style={{ textAlign: 'center', color: '#1a1a1a' }}>🌑 NEXFORGE Login</h1>
      
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password123"
            required
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {error && (
          <div style={{
            color: 'red',
            marginBottom: '15px',
            padding: '10px',
            backgroundColor: '#fee'
          }}>
            ❌ {error}
          </div>
        )}

        {success && (
          <div style={{
            color: 'green',
            marginBottom: '15px',
            padding: '10px',
            backgroundColor: '#efe'
          }}>
            ✅ {success}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: loading ? '#ccc' : '#000',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <p style={{ textAlign: 'center', marginTop: '20px', color: '#666' }}>
        Don't have account? <a href="/signup" style={{ color: '#000', textDecoration: 'none' }}>Sign up</a>
      </p>
    </div>
  )
}

export default Login
