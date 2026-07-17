import React, { useEffect } from 'react'
import axios from 'axios'

export default function YouTubeCallback() {
  useEffect(() => {
    const handleCallback = async () => {
      try {
        const params = new URLSearchParams(window.location.search)
        const code = params.get('code')
        const error = params.get('error')

        if (error) {
          alert('Authorization failed: ' + error)
          window.location.href = '/dashboard'
          return
        }

        if (!code) {
          alert('No authorization code received')
          window.location.href = '/dashboard'
          return
        }

        const token = localStorage.getItem('token')
        const response = await axios.post(
          'https://nexforge-backend.onrender.com/api/youtube/callback',
          { code },
          { headers: { Authorization: `Bearer ${token}` } }
        )

        // Save tokens
        localStorage.setItem('youtubeAccessToken', response.data.accessToken)
        if (response.data.refreshToken) {
          localStorage.setItem('youtubeRefreshToken', response.data.refreshToken)
        }

        alert('YouTube connected successfully!')
        window.location.href = '/dashboard'
      } catch (err: any) {
        alert('Failed to connect YouTube: ' + (err.response?.data?.error || err.message))
        window.location.href = '/dashboard'
      }
    }

    handleCallback()
  }, [])

  return (
    <div style={{
      backgroundColor: '#0a0e27',
      color: '#fff',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Connecting YouTube...</h1>
        <p style={{ color: '#cbd5e1' }}>Please wait while we authorize your account</p>
      </div>
    </div>
  )
}
