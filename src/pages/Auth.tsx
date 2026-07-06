import React, { useState } from 'react'
import axios from 'axios'

interface AuthProps {
  onLogin: () => void
}

export default function Auth({ onLogin }: AuthProps) {
  const [isSignup, setIsSignup] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const endpoint = isSignup ? '/api/auth/signup' : '/api/auth/login'
      const response = await axios.post(
        `https://nexforge-backend.onrender.com${endpoint}`,
        { email, password }
      )
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('email', email)
      onLogin()
    } catch (err: any) {
      setError(err.response?.data?.error || (isSignup ? 'Signup failed' : 'Login failed'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      padding: '40px',
      fontFamily: 'Arial',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        padding: '40px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>🌑 NEXFORGE</h1>

        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
          {isSignup ? 'Create Account' : 'Login'}
        </h2>

        {error && (
          <div style={{
            padding: '10px',
            marginBottom: '15px',
            backgroundColor: '#ffebee',
            color: '#c62828',
            borderRadius: '4px',
            fontSize: '14px'
          }}>
            ❌ {error}
          </div>
        )}

        <form onSubmit={handleAuth}>
          <label style={{ display: 'block', marginBottom: '15px', fontWeight: 'bold' }}>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '5px',
                borderRadius: '4px',
                border: '1px solid #ddd',
                boxSizing: 'border-box'
              }}
            />
          </label>

          <label style={{ display: 'block', marginBottom: '20px', fontWeight: 'bold' }}>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '5px',
                borderRadius: '4px',
                border: '1px solid #ddd',
                boxSizing: 'border-box'
              }}
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontWeight: 'bold',
              fontSize: '16px',
              marginBottom: '15px'
            }}
          >
            {loading ? 'Processing...' : (isSignup ? 'Sign Up' : 'Login')}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p style={{ color: '#666', margin: '0 0 10px 0' }}>
            {isSignup ? 'Already have an account?' : "Don't have an account?"}
          </p>
          <button
            onClick={() => {
              setIsSignup(!isSignup)
              setError('')
              setEmail('')
              setPassword('')
            }}
            style={{
              background: 'none',
              border: 'none',
              color: '#1976d2',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '14px',
              textDecoration: 'underline'
            }}
          >
            {isSignup ? 'Login here' : 'Sign up here'}
          </button>
        </div>
      </div>
    </div>
  )
}
