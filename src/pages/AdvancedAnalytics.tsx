import React from 'react'
import { LineChart, Line, PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'
import { TrendingUp } from 'lucide-react'

export default function AdvancedAnalytics() {
  const weeklyData = [
    { week: 'Week 1', views: 2400, likes: 340 },
    { week: 'Week 2', views: 3200, likes: 420 },
    { week: 'Week 3', views: 2800, likes: 380 },
    { week: 'Week 4', views: 3800, likes: 520 },
    { week: 'Week 5', views: 4200, likes: 610 },
    { week: 'Week 6', views: 3900, likes: 550 }
  ]

  const platformData = [
    { name: 'YouTube', value: 65, color: '#ef4444' },
    { name: 'Instagram', value: 35, color: '#ec4899' }
  ]

  const topVideos = [
    { name: 'Stoicism', views: 2100 },
    { name: 'Void Wisdom', views: 1800 },
    { name: 'Dark Truth', views: 1450 }
  ]

  const keyMetrics = [
    { label: 'Avg Views/Video', value: '376', change: '+12%', positive: true },
    { label: 'Avg Likes/Video', value: '55', change: '+8%', positive: true },
    { label: 'Engagement Rate', value: '15.3%', change: '+5%', positive: true },
    { label: 'Subscriber Growth', value: '+234', change: '+18%', positive: true }
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
          📊 Advanced Analytics
        </h1>
        <p style={{ color: '#cbd5e1' }}>Deep dive into your content performance with visual charts</p>
      </div>

      {/* Key Metrics */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        {keyMetrics.map((metric, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'rgba(168, 85, 247, 0.1)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              borderRadius: '12px',
              padding: '20px'
            }}
          >
            <p style={{ color: '#cbd5e1', fontSize: '14px', margin: '0 0 10px 0' }}>
              {metric.label}
            </p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
              <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#a855f7' }}>
                {metric.value}
              </span>
              <span style={{
                color: metric.positive ? '#10b981' : '#ef4444',
                fontSize: '14px',
                fontWeight: 'bold'
              }}>
                {metric.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px', marginBottom: '30px' }}>
        {/* Line Chart */}
        <div style={{
          backgroundColor: 'rgba(168, 85, 247, 0.05)',
          border: '1px solid rgba(168, 85, 247, 0.2)',
          borderRadius: '12px',
          padding: '25px'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <TrendingUp size={20} color="#a855f7" />
            Weekly Views & Likes
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(168, 85, 247, 0.1)" />
              <XAxis dataKey="week" stroke="#cbd5e1" />
              <YAxis stroke="#cbd5e1" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(26, 31, 58, 0.95)',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="views"
                stroke="#a855f7"
                strokeWidth={2}
                dot={{ fill: '#a855f7', r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="likes"
                stroke="#06b6d4"
                strokeWidth={2}
                dot={{ fill: '#06b6d4', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div style={{
          backgroundColor: 'rgba(168, 85, 247, 0.05)',
          border: '1px solid rgba(168, 85, 247, 0.2)',
          borderRadius: '12px',
          padding: '25px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px', width: '100%' }}>
            Platform Distribution
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={platformData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {platformData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(26, 31, 58, 0.95)',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  borderRadius: '8px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bar Chart */}
      <div style={{
        backgroundColor: 'rgba(168, 85, 247, 0.05)',
        border: '1px solid rgba(168, 85, 247, 0.2)',
        borderRadius: '12px',
        padding: '25px',
        marginBottom: '30px'
      }}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          🏆 Top 3 Videos by Views
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={topVideos}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(168, 85, 247, 0.1)" />
            <XAxis dataKey="name" stroke="#cbd5e1" />
            <YAxis stroke="#cbd5e1" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(26, 31, 58, 0.95)',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                borderRadius: '8px'
              }}
            />
            <Bar dataKey="views" fill="#a855f7" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Summary Stats */}
      <div style={{
        backgroundColor: 'rgba(6, 182, 212, 0.1)',
        border: '1px solid rgba(6, 182, 212, 0.3)',
        borderRadius: '12px',
        padding: '25px'
      }}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px', color: '#06b6d4' }}>
          📈 Summary
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px'
        }}>
          <div>
            <p style={{ color: '#cbd5e1', fontSize: '14px', margin: '0 0 5px 0' }}>Total Videos This Month</p>
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#06b6d4', margin: '0' }}>12</p>
          </div>
          <div>
            <p style={{ color: '#cbd5e1', fontSize: '14px', margin: '0 0 5px 0' }}>Total Views This Month</p>
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#06b6d4', margin: '0' }}>45.2K</p>
          </div>
          <div>
            <p style={{ color: '#cbd5e1', fontSize: '14px', margin: '0 0 5px 0' }}>Average Views/Video</p>
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#06b6d4', margin: '0' }}>3.7K</p>
          </div>
          <div>
            <p style={{ color: '#cbd5e1', fontSize: '14px', margin: '0 0 5px 0' }}>Best Day</p>
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#06b6d4', margin: '0' }}>Friday</p>
          </div>
        </div>
      </div>
    </div>
  )
}
