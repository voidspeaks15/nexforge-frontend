import React from 'react'
import { Play, Eye, Heart, TrendingUp } from 'lucide-react'

export default function Dashboard() {
  const email = localStorage.getItem('email') || 'user@example.com'

  const stats = [
    { label: 'Videos Generated', value: '42', icon: Play, color: '#a855f7' },
    { label: 'Total Views', value: '15.8K', icon: Eye, color: '#06b6d4' },
    { label: 'Total Likes', value: '2.3K', icon: Heart, color: '#ef4444' },
    { label: 'Engagement Rate', value: '8.2%', icon: TrendingUp, color: '#10b981' }
  ]

  const recentVideos = [
    { id: 1, title: 'Stoicism Acceptance', views: 2100, likes: 340, date: '2 days ago' },
    { id: 2, title: 'Void Wisdom', views: 1800, likes: 289, date: '4 days ago' },
    { id: 3, title: 'Dark Truth', views: 1450, likes: 198, date: '6 days ago' }
  ]

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
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '5px' }}>
          Welcome back! 👋
        </h1>
        <p style={{ color: '#cbd5e1', fontSize: '14px' }}>
          {email}
        </p>
      </div>

      {/* Stats Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        {stats.map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <div
              key={index}
              style={{
                backgroundColor: 'rgba(168, 85, 247, 0.1)',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                borderRadius: '12px',
                padding: '25px',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.15)'
                e.currentTarget.style.transform = 'translateY(-5px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.1)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: `${stat.color}20`,
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <IconComponent size={24} color={stat.color} />
                </div>
                <div>
                  <p style={{ color: '#cbd5e1', fontSize: '14px', margin: '0' }}>
                    {stat.label}
                  </p>
                  <p style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                    color: stat.color,
                    margin: '0'
                  }}>
                    {stat.value}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Recent Videos */}
      <div>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>
          Recent Videos
        </h2>
        <div style={{
          backgroundColor: 'rgba(168, 85, 247, 0.05)',
          border: '1px solid rgba(168, 85, 247, 0.2)',
          borderRadius: '12px',
          overflow: 'hidden'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(168, 85, 247, 0.2)' }}>
                <th style={{ padding: '15px', textAlign: 'left', color: '#a855f7', fontWeight: 'bold' }}>Title</th>
                <th style={{ padding: '15px', textAlign: 'center', color: '#a855f7', fontWeight: 'bold' }}>Views</th>
                <th style={{ padding: '15px', textAlign: 'center', color: '#a855f7', fontWeight: 'bold' }}>Likes</th>
                <th style={{ padding: '15px', textAlign: 'right', color: '#a855f7', fontWeight: 'bold' }}>Date</th>
              </tr>
            </thead>
            <tbody>
              {recentVideos.map((video) => (
                <tr
                  key={video.id}
                  style={{
                    borderBottom: '1px solid rgba(168, 85, 247, 0.1)',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  <td style={{ padding: '15px', color: '#fff' }}>{video.title}</td>
                  <td style={{ padding: '15px', textAlign: 'center', color: '#cbd5e1' }}>
                    👁️ {video.views}
                  </td>
                  <td style={{ padding: '15px', textAlign: 'center', color: '#cbd5e1' }}>
                    ❤️ {video.likes}
                  </td>
                  <td style={{ padding: '15px', textAlign: 'right', color: '#cbd5e1' }}>
                    {video.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
