import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => (
  <div style={{ 
    padding: '40px', 
    fontFamily: 'Arial',
    maxWidth: '800px',
    margin: '0 auto'
  }}>
    <h1>🌑 NEXFORGE</h1>
    <h2>AI Content Automation SaaS</h2>
    
    <p>Auto-generate videos for YouTube, Instagram & TikTok</p>
    
    <h3>What it does:</h3>
    <ul>
      <li>Generates quotes using AI</li>
      <li>Creates images automatically</li>
      <li>Generates voiceovers</li>
      <li>Renders complete videos</li>
      <li>Posts to social media</li>
    </ul>
    
    <h3>Coming Soon:</h3>
    <ul>
      <li>User authentication</li>
      <li>Dashboard</li>
      <li>Genre selection</li>
      <li>Subscription plans</li>
    </ul>
    
    <p><strong>Backend API:</strong> {process.env.VITE_API_URL}</p>
    
    <p style={{color: '#666', fontSize: '12px'}}>
      Early MVP - Features launching soon
    </p>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
