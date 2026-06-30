import React, { useState } from 'react'
import axios from 'axios'

export default function VideoGenerator() {
  const [genre, setGenre] = useState('Dark Stoicism')
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(false)
  const [videoData, setVideoData] = useState<any>(null)
  const [generatedVideos, setGeneratedVideos] = useState<any[]>([])

  const genres = [
    'Dark Stoicism',
    'Philosophy',
    'Motivation',
    'Self-Improvement',
    'Cosmic Horror',
    'Wisdom',
    'Mental Health',
    'Productivity'
  ]

  const handleGenerateVideo = async () => {
    if (!title.trim()) {
      alert('Enter video title')
      return
    }

    setLoading(true)
    try {
      const token = localStorage.getItem('token')
      
      // Call complete pipeline
      const response = await axios.post(
        'https://nexforge-backend.onrender.com/api/pipeline/create-complete',
        { genre, title },
        { headers: { Authorization: `Bearer ${token}` } }
      )

      setVideoData(response.data)
      setGeneratedVideos([response.data, ...generatedVideos])
      setTitle('')
      alert('Video generated successfully!')
    } catch (err) {
      alert('Failed to generate video')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <h1>🎬 Video Generator</h1>

      {/* Video Creation Form */}
      <div style={{ marginTop: '30px', padding: '30px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', maxWidth: '600px' }}>
        <h3>Create New Video</h3>

        <label style={{ display: 'block', marginBottom: '15px', fontWeight: 'bold' }}>
          Genre:
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            style={{ marginLeft: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', width: '100%', marginTop: '5px' }}
          >
            {genres.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </label>

        <label style={{ display: 'block', marginBottom: '15px', fontWeight: 'bold' }}>
          Video Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., The Power of Acceptance"
            style={{ marginLeft: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', width: '100%', marginTop: '5px' }}
          />
        </label>

        <button
          onClick={handleGenerateVideo}
          disabled={loading}
          style={{
            width: '100%',
            padding: '15px',
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
            fontSize: '16px'
          }}
        >
          {loading ? '⏳ Generating...' : '🚀 Generate Video'}
        </button>
      </div>

      {/* Generated Video Preview */}
      {videoData && (
        <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h3>✨ Latest Generated Video</h3>
          
          <div style={{ marginTop: '15px', padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '6px' }}>
            <p><strong>Title:</strong> {videoData.title}</p>
            <p><strong>Genre:</strong> {videoData.genre}</p>
            <p><strong>Pipeline ID:</strong> {videoData.pipelineId}</p>
            <p><strong>Status:</strong> <span style={{ color: '#4caf50', fontWeight: 'bold' }}>✓ Ready</span></p>
          </div>

          <div style={{ marginTop: '15px' }}>
            <h4>📝 Quote:</h4>
            <p style={{ padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '4px', fontStyle: 'italic' }}>
              "{videoData.steps.quote.content}"
            </p>
          </div>

          <div style={{ marginTop: '15px' }}>
            <h4>🖼️ Image:</h4>
            <img src={videoData.steps.image.url} alt="Generated" style={{ width: '100%', maxWidth: '400px', borderRadius: '4px' }} />
          </div>

          <div style={{ marginTop: '15px' }}>
            <h4>🔊 Voice:</h4>
            <audio controls style={{ width: '100%' }}>
              <source src={videoData.steps.voice.url} type="audio/mpeg" />
            </audio>
          </div>

          <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
            <button style={{ padding: '10px 20px', backgroundColor: '#4caf50', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
              📤 Upload to YouTube
            </button>
            <button style={{ padding: '10px 20px', backgroundColor: '#e91e63', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
              📤 Upload to Instagram
            </button>
          </div>
        </div>
      )}

      {/* Recent Videos */}
      {generatedVideos.length > 0 && (
        <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h3>📹 Recent Videos ({generatedVideos.length})</h3>
          
          <div style={{ marginTop: '15px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            {generatedVideos.slice(0, 6).map((video, index) => (
              <div key={index} style={{ padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '6px', border: '1px solid #e0e0e0' }}>
                <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>{video.title}</p>
                <p style={{ margin: '0 0 5px 0', fontSize: '12px', color: '#666' }}>Genre: {video.genre}</p>
                <p style={{ margin: '0', fontSize: '12px', color: '#4caf50' }}>✓ Ready to publish</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
