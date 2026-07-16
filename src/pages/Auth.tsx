import React, { useState } from 'react'
import axios from 'axios'
import { Mail, Lock, ArrowRight } from 'lucide-react'

interface AuthProps {
  onLogin: () => void
}

export default function Auth({ onLogin }: AuthProps) {
  const [isSignup, setIsSignup] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')
    try {
      const endpoint = isSignup ? '/api/auth/signup' : '/api/auth/login'
      const response = await axios.post(
        `https://nexforge-backend.onrender.com${endpoint}`,
        { email, password }
      )
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('email', email)
      setSuccess(isSignup ? 'Account created! Logging in...' : 'Login successful!')
      setTimeout(() => onLogin(), 1500)
    } catch (err: any) {
      setError(err.response?.data?.error || (isSignup ? 'Signup failed' : 'Login failed'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a0f35 50%, #0a0e27 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background glow effects */}
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)',
        borderRadius: '50%',
        top: '-200px',
        left: '-200px',
        filter: 'blur(80px)',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        bottom: '-200px',
        right: '-200px',
        filter: 'blur(80px)',
        zIndex: 0
      }} />

      {/* Main card */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        maxWidth: '450px',
        padding: '40px',
        backgroundColor: 'rgba(26, 31, 58, 0.8)',
        border: '1px solid rgba(168, 85, 247, 0.3)',
        borderRadius: '16px',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px rgba(168, 85, 247, 0.1)',
        margin: '20px'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '10px'
          }}>
            🌑 NEXFORGE
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '14px' }}>
            {isSignup ? 'Create your account' : 'Welcome back'}
          </p>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '30px',
          backgroundColor: 'rgba(168, 85, 247, 0.05)',
          padding: '4px',
          borderRadius: '8px'
        }}>
          <button
            onClick={() => {
              setIsSignup(false)
              setError('')
              setSuccess('')
            }}
            style={{
              flex: 1,
              padding: '10px',
              backgroundColor: !isSignup ? '#a855f7' : 'transparent',
              color: !isSignup ? '#fff' : '#cbd5e1',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              setIsSignup(true)
              setError('')
              setSuccess('')
            }}
            style={{
              flex: 1,
              padding: '10px',
              backgroundColor: isSignup ? '#a855f7' : 'transparent',
              color: isSignup ? '#fff' : '#cbd5e1',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
          >
            Sign Up
          </button>
        </div>

        {/* Error message */}
        {error && (
          <div style={{
            padding: '12px',
            marginBottom: '20px',
            backgroundColor: 'rgba(220, 38, 38, 0.2)',
            border: '1px solid rgba(220, 38, 38, 0.5)',
            color: '#fca5a5',
            borderRadius: '8px',
            fontSize: '14px'
          }}>
            ❌ {error}
          </div>
        )}

        {/* Success message */}
        {success && (
          <div style={{
            padding: '12px',
            marginBottom: '20px',
            backgroundColor: 'rgba(34, 197, 94, 0.2)',
            border: '1px solid rgba(34, 197, 94, 0.5)',
            color: '#86efac',
            borderRadius: '8px',
            fontSize: '14px'
          }}>
            ✅ {success}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleAuth}>
          {/* Email input */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#fff',
              marginBottom: '8px'
            }}>
              Email Address
            </label>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(168, 85, 247, 0.1)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              borderRadius: '8px',
              padding: '12px',
              gap: '10px'
            }}>
              <Mail size={18} color="#a855f7" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#fff',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Password input */}
          <div style={{ marginBottom: '30px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#fff',
              marginBottom: '8px'
            }}>
              Password
            </label>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(168, 85, 247, 0.1)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              borderRadius: '8px',
              padding: '12px',
              gap: '10px'
            }}>
              <Lock size={18} color="#a855f7" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#fff',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: loading ? '#666' : '#a855f7',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontWeight: 'bold',
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              transition: 'all 0.3s ease'
            }}
          >
            {loading ? 'Processing...' : (isSignup ? 'Create Account' : 'Login')}
            {!loading && <ArrowRight size={18} />}
          </button>
        </form>

        {/* Footer text */}
        <p style={{
          textAlign: 'center',
          color: '#cbd5e1',
          fontSize: '14px',
          marginTop: '20px'
        }}>
          {isSignup ? 'Already have an account?' : "Don't have an account?"}
          <button
            onClick={() => {
              setIsSignup(!isSignup)
              setError('')
              setSuccess('')
              setEmail('')
              setPassword('')
            }}
            style={{
              background: 'none',
              border: 'none',
              color: '#a855f7',
              cursor: 'pointer',
              fontWeight: 'bold',
              marginLeft: '5px',
              textDecoration: 'underline'
            }}
          >
            {isSignup ? 'Login here' : 'Sign up here'}
          </button>
        </p>
      </div>
    </div>
  )
}
