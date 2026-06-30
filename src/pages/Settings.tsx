import React, { useState } from 'react'
import axios from 'axios'

export default function Settings() {
  const [apiKeys, setApiKeys] = useState<any[]>([])
  const [newKey, setNewKey] = useState('')
  const [provider, setProvider] = useState('groq')
  const [loading, setLoading] = useState(false)

  const handleAddKey = async () => {
    if (!newKey) {
      alert('Enter API key')
      return
    }

    setLoading(true)
    try {
      const token = localStorage.getItem('token')
      const response = await axios.post(
        'https://nexforge-backend.onrender.com/api/api-keys/add',
        { provider, apiKey: newKey },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      alert('API key added successfully!')
      setNewKey('')
      setProvider('groq')
      fetchApiKeys()
    } catch (err) {
      alert('Failed to add API key')
    } finally {
      setLoading(false)
    }
  }

  const fetchApiKeys = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.get(
        'https://nexforge-backend.onrender.com/api/api-keys/list',
        { headers: { Authorization: `Bearer ${token}` } }
      )
      setApiKeys(response.data.apiKeys || [])
    } catch (err) {
      console.error('Failed to fetch API keys')
    }
  }

  React.useEffect(() => {
    fetchApiKeys()
  }, [])

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <h1>⚙️ Settings</h1>

      {/* API Keys Section */}
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h3>🔑 API Keys Management</h3>
        
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '6px' }}>
          <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
            Provider:
            <select 
              value={provider} 
              onChange={(e) => setProvider(e.target.value)}
              style={{ marginLeft: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
            >
              <option value="groq">Groq</option>
              <option value="cloudflare">Cloudflare</option>
              <option value="elevenlabs">ElevenLabs</option>
              <option value="youtube">YouTube</option>
              <option value="instagram">Instagram</option>
            </select>
          </label>

          <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
            API Key:
            <input
              type="password"
              value={newKey}
              onChange={(e) => setNewKey(e.target.value)}
              placeholder="Enter your API key"
              style={{ marginLeft: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ddd', width: '300px' }}
            />
          </label>

          <button
            onClick={handleAddKey}
            disabled={loading}
            style={{
              padding: '10px 20px',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontWeight: 'bold'
            }}
          >
            {loading ? 'Adding...' : 'Add API Key'}
          </button>
        </div>

        {/* Saved Keys */}
        <div style={{ marginTop: '20px' }}>
          <h4>Your API Keys:</h4>
          {apiKeys.length === 0 ? (
            <p style={{ color: '#666' }}>No API keys added yet</p>
          ) : (
            apiKeys.map((key, index) => (
              <div key={index} style={{ padding: '10px', marginTop: '10px', backgroundColor: '#f0f0f0', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span><strong>{key.provider.toUpperCase()}</strong> - ****{key.lastFourDigits}</span>
                <button
                  style={{
                    padding: '5px 10px',
                    backgroundColor: '#d32f2f',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px'
                  }}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Account Settings */}
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h3>👤 Account Settings</h3>
        
        <div style={{ marginTop: '15px' }}>
          <p><strong>Email:</strong> {localStorage.getItem('email')}</p>
          <p><strong>Member Since:</strong> June 2026</p>
          <p><strong>Account Status:</strong> <span style={{ color: '#4caf50', fontWeight: 'bold' }}>Active</span></p>
        </div>

        <button style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#d32f2f',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Change Password
        </button>
      </div>

      {/* Preferences */}
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h3>🎨 Preferences</h3>
        
        <label style={{ display: 'block', marginBottom: '15px' }}>
          <input type="checkbox" defaultChecked /> Email notifications for new videos
        </label>
        <label style={{ display: 'block', marginBottom: '15px' }}>
          <input type="checkbox" defaultChecked /> Weekly analytics report
        </label>
        <label style={{ display: 'block', marginBottom: '15px' }}>
          <input type="checkbox" /> Dark mode
        </label>
      </div>
    </div>
  )
}
