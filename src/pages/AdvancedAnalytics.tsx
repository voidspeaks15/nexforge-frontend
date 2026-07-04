import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

export default function AdvancedAnalytics() {
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

  // Chart data
  const monthlyData = [
    { month: 'Week 1', views: 2100, likes: 400 },
    { month: 'Week 2', views: 2800, likes: 500 },
    { month: 'Week 3', views: 1800, likes: 300 },
    { month: 'Week 4', views: 4200, likes: 800 }
  ]

  const platformData = [
    { name: 'YouTube', value: analytics.platformStats.youtube.views, fill: '#FF0000' },
    { name: 'Instagram', value: analytics.platformStats.instagram.views, fill: '#E1306C' }
  ]

  const COLORS = ['#FF0000', '#E1306C']

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <h1>📊 Advanced Analytics</h1>

      {/* Views & Likes Chart */}
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h3>📈 Weekly Views & Likes</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="views" stroke="#8884d8" />
            <Line type="monotone" dataKey="likes" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Platform Distribution */}
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h3>🌐 Platform Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={platformData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value.toLocaleString()}`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {platformData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Video Performance */}
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h3>🎬 Top 3 Videos Performance</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={analytics.topPerforming}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" angle={-45} textAnchor="end" height={80} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="views" fill="#8884d8" />
            <Bar dataKey="likes" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Summary Stats */}
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h3>📊 Key Metrics</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px', marginTop: '15px' }}>
          <div style={{ padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '6px' }}>
            <p style={{ margin: 0, color: '#666' }}>Avg Views/Video</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '24px', fontWeight: 'bold' }}>{analytics.averageViewsPerVideo}</p>
          </div>
          <div style={{ padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '6px' }}>
            <p style={{ margin: 0, color: '#666' }}>Total Videos</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '24px', fontWeight: 'bold' }}>{analytics.totalVideos}</p>
          </div>
          <div style={{ padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '6px' }}>
            <p style={{ margin: 0, color: '#666' }}>Engagement Rate</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '24px', fontWeight: 'bold' }}>
              {((analytics.totalLikes / analytics.totalViews) * 100).toFixed(2)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
