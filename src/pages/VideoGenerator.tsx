import React, { useState } from 'react'
import axios from 'axios'
import { Sparkles, Image, Volume2, Play, Download } from 'lucide-react'

export default function VideoGenerator() {
  const [selectedGenre, setSelectedGenre] = useState('samurai')
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(false)
  const [pipelineData, setPipelineData] = useState<any>(null)
  const [error, setError] = useState('')

  const genres = [
    { id: 'samurai', name: '🗡️ Samurai', emoji: '⛩️' },
    { id: 'comedy', name: '😂 Comedy', emoji: '🎭' },
    { id: 'motivation', name: '💪 Motivation', emoji: '🚀' },
    { id: 'philosophy', name: '🧠 Philosophy', emoji: '📚' },
    { id: 'mystery', name: '🔍 Mystery', emoji: '👻' },
    { id: 'horror', name: '😱 Horror', emoji: '🎃' },
    { id: 'fantasy', name: '🐉 Fantasy', emoji: '✨' },
    { id: 'scifi', name: '🌌 Sci-Fi', emoji: '🚀' }
  ]

  const handleGenerate = async () => {
    if (!title.trim()) {
      setError('Please enter a title')
      return
    }

    setLoading(true)
    setError('')
    try {
      const token = localStorage.getItem('token')
      const response = await axios.post(
        'https://nexforge-backend.onrender.com/api/pipeline/create-complete',
        { genre: selectedGenre, title },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      setPipelineData(response.data)
    } catch (err: any) {
      setError(err.response?.data?.error || 'Generation failed')
    } finally {
      setLoading(false)
    }
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
          ✨ Create Video
        </h1>
        <p style={{ color: '#cbd5e1' }}>Generate AI-powered video content in 3 easy steps</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', maxWidth: '1200px' }}>
        {/* Input Section */}
        <div>
          {/* Genre Selection */}
          <div style={{ marginBottom: '40px' }}>
            <label style={{
              display: 'block',
              fontSize: '16px',
              fontWeight: 'bold',
              marginBottom: '15px',
              color: '#a855f7'
            }}>
              Step 1: Choose Genre
            </label>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '12px'
            }}>
              {genres.map((genre) => (
                <button
                  key={genre.id}
                  onClick={() => setSelectedGenre(genre.id)}
                  style={{
                    padding: '15px',
                    backgroundColor: selectedGenre === genre.id
                      ? '#a855f7'
                      : 'rgba(168, 85, 247, 0.1)',
                    border: selectedGenre === genre.id
                      ? '2px solid #a855f7'
                      : '1px solid rgba(168, 85, 247, 0.3)',
                    color: '#fff',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {genre.name}
                </button>
              ))}
            </div>
          </div>

          {/* Title Input */}
          <div style={{ marginBottom: '40px' }}>
            <label style={{
              display: 'block',
              fontSize: '16px',
              fontWeight: 'bold',
              marginBottom: '12px',
              color: '#a855f7'
            }}>
              Step 2: Enter Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., The Path of the Warrior"
              style={{
                width: '100%',
                padding: '15px',
                backgroundColor: 'rgba(168, 85, 247, 0.1)',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* Error Message */}
          {error && (
            <div style={{
              padding: '15px',
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

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={loading}
            style={{
              width: '100%',
              padding: '16px',
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
            <Sparkles size={20} />
            {loading ? 'Generating...' : 'Generate Video'}
          </button>
        </div>

        {/* Preview Section */}
        <div>
          {pipelineData ? (
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px', color: '#a855f7' }}>
                Step 3: Preview & Publish
              </h3>

              {/* Quote */}
              <div style={{
                backgroundColor: 'rgba(168, 85, 247, 0.1)',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '20px'
              }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <Sparkles size={18} color="#a855f7" />
                  <p style={{ fontSize: '12px', color: '#a855f7', margin: '0', fontWeight: 'bold' }}>QUOTE</p>
                </div>
                <p style={{ color: '#fff', marginBottom: '0' }}>
                  {pipelineData.steps?.quote?.content || 'Loading quote...'}
                </p>
              </div>

              {/* Image */}
              <div style={{
                backgroundColor: 'rgba(168, 85, 247, 0.1)',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '20px'
              }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <Image size={18} color="#06b6d4" />
                  <p style={{ fontSize: '12px', color: '#06b6d4', margin: '0', fontWeight: 'bold' }}>IMAGE</p>
                </div>
                <img
                  src={pipelineData.steps?.image?.url}
                  alt="Generated"
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
              </div>

              {/* Voice */}
              <div style={{
                backgroundColor: 'rgba(168, 85, 247, 0.1)',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                borderRadius: '12px',
                padding: '20px'
              }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                  <Volume2 size={18} color="#10b981" />
                  <p style={{ fontSize: '12px', color: '#10b981', margin: '0', fontWeight: 'bold' }}>VOICE</p>
                </div>
                <audio
                  controls
                  src={pipelineData.steps?.voice?.url}
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    borderRadius: '8px'
                  }}
                />
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '20px' }}>
                <button style={{
                  padding: '12px',
                  backgroundColor: '#06b6d4',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}>
                  <Play size={16} />
                  YouTube
                </button>
                <button style={{
                  padding: '12px',
                  backgroundColor: '#ec4899',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}>
                  <Play size={16} />
                  Instagram
                </button>
              </div>
            </div>
          ) : (
            <div style={{
              backgroundColor: 'rgba(168, 85, 247, 0.05)',
              border: '2px dashed rgba(168, 85, 247, 0.3)',
              borderRadius: '12px',
              padding: '60px 20px',
              textAlign: 'center'
            }}>
              <Sparkles size={48} color="#a855f7" style={{ margin: '0 auto 20px', opacity: 0.5 }} />
              <p style={{ color: '#cbd5e1', fontSize: '16px' }}>
                Your generated content will appear here
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
