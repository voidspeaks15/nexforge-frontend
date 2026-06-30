import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Analytics() {
  const [analytics, setAnalytics] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.get(
          'https://nexforge-backend.onrender.com/api/analytics/dashboard',
          { headers: { Authorization: `Bearer ${token}` } }
        )
        setAnalytics(response.data)
      } catch (err) {
        console.error('Analytics fetch failed:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchAnalytics()
  }, [])

  if (loading) return <div style={{ padding: '40px' }}>Loading analytics...</div>
  if (!analytics) return <div style={{ padding: '40px' }}>No data available</div>

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <h1>📊 NEXFORGE Analytics</h1>

      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '20px', marginTop: '30px' }}>
        <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <p style={{ color: '#666', margin: 0 }}>Total Videos</p>
          <h2 style={{ margin: '10px 0 0 0', fontSize: '32px' }}>{analytics.totalVideos}</h2>
        </div>
        <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <p style={{ color: '#666', margin: 0 }}>Total Views</p>
          <h2 style={{ margin: '10px 0 0 0', fontSize: '32px' }}>{analytics.totalViews.toLocaleString()}</h2>
        </div>
        <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <p style={{ color: '#666', margin: 0 }}>Total Likes</p>
          <h2 style={{ margin: '10px 0 0 0', fontSize: '32px' }}>{analytics.totalLikes.toLocaleString()}</h2>
        </div>
        <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <p style={{ color: '#666', margin: 0 }}>Avg Views/Video</p>
          <h2 style={{ margin: '10px 0 0 0', fontSize: '32px' }}>{analytics.averageViewsPerVideo}</h2>
        </div>
      </div>

      {/* This Month Stats */}
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h3>📅 This Month</h3>
        <p>Videos: <strong>{analytics.thisMonth.videos}</strong> | Views: <strong>{analytics.thisMonth.views.toLocaleString()}</strong> | Likes: <strong>{analytics.thisMonth.likes}</strong></p>
      </div>

      {/* Platform Stats */}
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h3>🌐 Platform Performance</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '15px' }}>
          <div style={{ padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '6px' }}>
            <p style={{ margin: 0, color: '#666' }}>YouTube</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '18px', fontWeight: 'bold' }}>
              {analytics.platformStats.youtube.videos} videos | {analytics.platformStats.youtube.views.toLocaleString()} views
            </p>
          </div>
          <div style={{ padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '6px' }}>
            <p style={{ margin: 0, color: '#666' }}>Instagram</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '18px', fontWeight: 'bold' }}>
              {analytics.platformStats.instagram.videos} videos | {analytics.platformStats.instagram.views.toLocaleString()} views
            </p>
          </div>
        </div>
      </div>

      {/* Top Performing Videos */}
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h3>🔥 Top Performing Videos</h3>
        {analytics.topPerforming.map((video: any, index: number) => (
          <div key={index} style={{ padding: '15px', marginTop: '10px', backgroundColor: '#f9f9f9', borderRadius: '6px' }}>
            <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>{index + 1}. {video.title}</p>
            <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
              👀 {video.views.toLocaleString()} views | ❤️ {video.likes} likes
            </p>
          </div>
        ))}
      </div>

      {/* Subscription Info */}
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#000', color: '#fff', borderRadius: '8px' }}>
        <h3 style={{ margin: '0 0 10px 0' }}>🎯 Current Plan</h3>
        <p style={{ margin: 0 }}>
          Tier: <strong>{analytics.subscriptionTier}</strong> | 
          Videos Remaining: <strong>{analytics.videosRemainingThisMonth}</strong>
        </p>
      </div>
    </div>
  )
}
