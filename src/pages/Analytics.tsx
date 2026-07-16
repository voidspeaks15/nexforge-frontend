import React from 'react'
import { TrendingUp, Eye, Heart, MessageCircle, Share2 } from 'lucide-react'

export default function Analytics() {
  const stats = [
    { label: 'Total Videos', value: '42', icon: TrendingUp, color: '#a855f7' },
    { label: 'Total Views', value: '15.8K', icon: Eye, color: '#06b6d4' },
    { label: 'Total Likes', value: '2.3K', icon: Heart, color: '#ef4444' },
    { label: 'Total Comments', value: '456', icon: MessageCircle, color: '#f59e0b' },
    { label: 'Total Shares', value: '234', icon: Share2, color: '#10b981' }
  ]

  const topVideos = [
    { rank: 1, title: 'Stoicism Acceptance', views: 2100, likes: 340, engagement: '16.2%' },
    { rank: 2, title: 'Void Wisdom', views: 1800, likes: 289, engagement: '16.1%' },
    { rank: 3, title: 'Dark Truth', views: 1450, likes: 198, engagement: '13.7%' }
  ]

  const platformStats = [
    { platform: 'YouTube', videos: 25, views: 10200, percentage: 65 },
    { platform: 'Instagram', videos: 17, views: 5600, percentage: 35 }
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
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '10px' }}>
          📊 Analytics
        </h1>
        <p style={{ color: '#cbd5e1' }}>Track your content performance and engagement metrics</p>
      </div>

      {/* Key Metrics */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
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
                padding: '20px',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px' }}>
                <p style={{ color: '#cbd5e1', fontSize: '14px', margin: '0' }}>
                  {stat.label}
                </p>
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: `${stat.color}20`,
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <IconComponent size={20} color={stat.color} />
                </div>
              </div>
              <p style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: stat.color,
                margin: '0'
              }}>
                {stat.value}
              </p>
            </div>
          )
        })}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        {/* Top Videos */}
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>
            🎯 Top Performing Videos
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
                  <th style={{ padding: '15px', textAlign: 'left', color: '#a855f7', fontWeight: 'bold' }}>Rank</th>
                  <th style={{ padding: '15px', textAlign: 'left', color: '#a855f7', fontWeight: 'bold' }}>Title</th>
                  <th style={{ padding: '15px', textAlign: 'center', color: '#a855f7', fontWeight: 'bold' }}>Views</th>
                  <th style={{ padding: '15px', textAlign: 'center', color: '#a855f7', fontWeight: 'bold' }}>Likes</th>
                  <th style={{ padding: '15px', textAlign: 'right', color: '#a855f7', fontWeight: 'bold' }}>Engagement</th>
                </tr>
              </thead>
              <tbody>
                {topVideos.map((video) => (
                  <tr
                    key={video.rank}
                    style={{ borderBottom: '1px solid rgba(168, 85, 247, 0.1)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent'
                    }}
                  >
                    <td style={{ padding: '15px' }}>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '30px',
                        height: '30px',
                        backgroundColor: '#a855f7',
                        borderRadius: '50%',
                        fontWeight: 'bold'
                      }}>
                        {video.rank}
                      </span>
                    </td>
                    <td style={{ padding: '15px', color: '#fff' }}>{video.title}</td>
                    <td style={{ padding: '15px', textAlign: 'center', color: '#cbd5e1' }}>
                      👁️ {video.views}
                    </td>
                    <td style={{ padding: '15px', textAlign: 'center', color: '#cbd5e1' }}>
                      ❤️ {video.likes}
                    </td>
                    <td style={{ padding: '15px', textAlign: 'right', color: '#10b981', fontWeight: 'bold' }}>
                      {video.engagement}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Platform Stats */}
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>
            📱 By Platform
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {platformStats.map((platform, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'rgba(168, 85, 247, 0.1)',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  borderRadius: '12px',
                  padding: '20px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <p style={{ fontWeight: 'bold', margin: '0' }}>{platform.platform}</p>
                  <p style={{ color: '#a855f7', fontWeight: 'bold', margin: '0' }}>
                    {platform.percentage}%
                  </p>
                </div>
                <div style={{
                  backgroundColor: 'rgba(0,0,0,0.3)',
                  height: '8px',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  marginBottom: '10px'
                }}>
                  <div style={{
                    backgroundColor: '#a855f7',
                    height: '100%',
                    width: `${platform.percentage}%`
                  }} />
                </div>
                <p style={{
                  color: '#cbd5e1',
                  fontSize: '14px',
                  margin: '0'
                }}>
                  {platform.videos} videos • {platform.views} views
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Insights */}
      <div style={{
        marginTop: '40px',
        backgroundColor: 'rgba(6, 182, 212, 0.1)',
        border: '1px solid rgba(6, 182, 212, 0.3)',
        borderRadius: '12px',
        padding: '25px'
      }}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px', color: '#06b6d4' }}>
          💡 Performance Insights
        </h3>
        <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
          <li style={{ color: '#cbd5e1', marginBottom: '10px' }}>
            ✨ Your best performing category is <strong>Samurai</strong> with 16.2% engagement rate
          </li>
          <li style={{ color: '#cbd5e1', marginBottom: '10px' }}>
            ✨ YouTube drives 65% of your views - consider increasing YouTube content
          </li>
          <li style={{ color: '#cbd5e1' }}>
            ✨ Your average engagement rate is 15.3% - Great performance! 🎉
          </li>
        </ul>
      </div>
    </div>
  )
}
