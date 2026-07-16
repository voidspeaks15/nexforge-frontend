import React, { useState } from 'react'
import { Key, User, Bell, Lock, Trash2, Save } from 'lucide-react'

export default function Settings() {
  const [apiKeys, setApiKeys] = useState([
    { provider: 'groq', lastFour: '****abc1', active: true },
    { provider: 'cloudflare', lastFour: '****def2', active: true },
    { provider: 'elevenlabs', lastFour: '****ghi3', active: true }
  ])

  const [newKey, setNewKey] = useState({ provider: 'groq', key: '' })
  const [addingKey, setAddingKey] = useState(false)

  const email = localStorage.getItem('email') || 'user@example.com'

  const handleAddKey = () => {
    if (newKey.key.trim()) {
      setApiKeys([...apiKeys, {
        provider: newKey.provider,
        lastFour: '****' + newKey.key.slice(-4),
        active: true
      }])
      setNewKey({ provider: 'groq', key: '' })
      setAddingKey(false)
    }
  }

  const handleDeleteKey = (index: number) => {
    setApiKeys(apiKeys.filter((_, i) => i !== index))
  }

  return (
    <div style={{
      backgroundColor: '#0a0e27',
      color: '#fff',
      minHeight: '100vh',
      padding: '40px',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '10px' }}>
          ⚙️ Settings
        </h1>
        <p style={{ color: '#cbd5e1' }}>Manage your account and API keys</p>
      </div>

      <div style={{ maxWidth: '1000px', display: 'grid', gridTemplateColumns: '250px 1fr', gap: '40px' }}>
        {/* Sidebar */}
        <div style={{
          backgroundColor: 'rgba(168, 85, 247, 0.1)',
          border: '1px solid rgba(168, 85, 247, 0.3)',
          borderRadius: '12px',
          padding: '20px',
          height: 'fit-content'
        }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button style={{
              padding: '12px',
              backgroundColor: '#a855f7',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <User size={18} />
              Account
            </button>
            <button style={{
              padding: '12px',
              backgroundColor: 'transparent',
              color: '#cbd5e1',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <Key size={18} />
              API Keys
            </button>
            <button style={{
              padding: '12px',
              backgroundColor: 'transparent',
              color: '#cbd5e1',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <Bell size={18} />
              Notifications
            </button>
            <button style={{
              padding: '12px',
              backgroundColor: 'transparent',
              color: '#cbd5e1',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <Lock size={18} />
              Security
            </button>
          </nav>
        </div>

        {/* Content */}
        <div>
          {/* Account Section */}
          <div style={{
            backgroundColor: 'rgba(168, 85, 247, 0.05)',
            border: '1px solid rgba(168, 85, 247, 0.2)',
            borderRadius: '12px',
            padding: '30px',
            marginBottom: '30px'
          }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <User size={20} color="#a855f7" />
              Account Information
            </h2>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: 'bold',
                marginBottom: '8px',
                color: '#a855f7'
              }}>
                Email Address
              </label>
              <input
                type="email"
                value={email}
                disabled
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: 'rgba(168, 85, 247, 0.1)',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  borderRadius: '8px',
                  color: '#fff',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: 'bold',
                marginBottom: '8px',
                color: '#a855f7'
              }}>
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: 'rgba(168, 85, 247, 0.1)',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  borderRadius: '8px',
                  color: '#fff',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <button style={{
              padding: '12px 30px',
              backgroundColor: '#a855f7',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Save size={18} />
              Save Changes
            </button>
          </div>

          {/* API Keys Section */}
          <div style={{
            backgroundColor: 'rgba(168, 85, 247, 0.05)',
            border: '1px solid rgba(168, 85, 247, 0.2)',
            borderRadius: '12px',
            padding: '30px'
          }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Key size={20} color="#a855f7" />
              API Keys
            </h2>

            {/* Existing Keys */}
            <div style={{ marginBottom: '30px' }}>
              <p style={{ color: '#cbd5e1', fontSize: '14px', marginBottom: '15px' }}>
                Your connected API keys:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {apiKeys.map((keyItem, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '15px',
                      backgroundColor: 'rgba(168, 85, 247, 0.1)',
                      border: '1px solid rgba(168, 85, 247, 0.3)',
                      borderRadius: '8px'
                    }}
                  >
                    <div>
                      <p style={{ fontWeight: 'bold', margin: '0 0 5px 0', textTransform: 'uppercase' }}>
                        {keyItem.provider}
                      </p>
                      <p style={{ color: '#cbd5e1', fontSize: '14px', margin: '0' }}>
                        {keyItem.lastFour}
                      </p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{
                        display: 'inline-block',
                        width: '12px',
                        height: '12px',
                        backgroundColor: '#10b981',
                        borderRadius: '50%'
                      }} />
                      <button
                        onClick={() => handleDeleteKey(index)}
                        style={{
                          padding: '8px 16px',
                          backgroundColor: 'rgba(239, 68, 68, 0.2)',
                          color: '#fca5a5',
                          border: '1px solid rgba(239, 68, 68, 0.5)',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px'
                        }}
                      >
                        <Trash2 size={16} />
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Add New Key */}
            {addingKey ? (
              <div style={{
                padding: '20px',
                backgroundColor: 'rgba(6, 182, 212, 0.1)',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                borderRadius: '12px'
              }}>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ color: '#06b6d4', fontWeight: 'bold', fontSize: '14px', display: 'block', marginBottom: '8px' }}>
                    Provider
                  </label>
                  <select
                    value={newKey.provider}
                    onChange={(e) => setNewKey({ ...newKey, provider: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px',
                      backgroundColor: 'rgba(168, 85, 247, 0.1)',
                      border: '1px solid rgba(168, 85, 247, 0.3)',
                      borderRadius: '6px',
                      color: '#fff',
                      boxSizing: 'border-box'
                    }}
                  >
                    <option value="groq">Groq</option>
                    <option value="cloudflare">Cloudflare</option>
                    <option value="elevenlabs">ElevenLabs</option>
                    <option value="youtube">YouTube</option>
                    <option value="instagram">Instagram</option>
                  </select>
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <label style={{ color: '#06b6d4', fontWeight: 'bold', fontSize: '14px', display: 'block', marginBottom: '8px' }}>
                    API Key
                  </label>
                  <input
                    type="password"
                    value={newKey.key}
                    onChange={(e) => setNewKey({ ...newKey, key: e.target.value })}
                    placeholder="Paste your API key here"
                    style={{
                      width: '100%',
                      padding: '10px',
                      backgroundColor: 'rgba(168, 85, 247, 0.1)',
                      border: '1px solid rgba(168, 85, 247, 0.3)',
                      borderRadius: '6px',
                      color: '#fff',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={handleAddKey}
                    style={{
                      flex: 1,
                      padding: '10px',
                      backgroundColor: '#10b981',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}
                  >
                    Add Key
                  </button>
                  <button
                    onClick={() => setAddingKey(false)}
                    style={{
                      flex: 1,
                      padding: '10px',
                      backgroundColor: 'transparent',
                      color: '#cbd5e1',
                      border: '1px solid rgba(168, 85, 247, 0.3)',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setAddingKey(true)}
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: 'rgba(6, 182, 212, 0.2)',
                  color: '#06b6d4',
                  border: '2px dashed rgba(6, 182, 212, 0.5)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                + Add New API Key
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
