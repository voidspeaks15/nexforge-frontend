import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function AdminDashboard() {
  const [adminData, setAdminData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.get(
          'https://nexforge-backend.onrender.com/api/admin/dashboard',
          { headers: { Authorization: `Bearer ${token}` } }
        )
        setAdminData(response.data)
      } catch (err) {
        console.error('Admin data fetch failed:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchAdminData()
  }, [])

  if (loading) return <div style={{ padding: '40px' }}>Loading admin dashboard...</div>
  if (!adminData) return <div style={{ padding: '40px' }}>No data available</div>

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <h1>👨‍💼 Admin Dashboard</h1>

      {/* Key Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', gap: '15px', marginTop: '30px' }}>
        <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <p style={{ color: '#666', margin: 0, fontSize: '12px' }}>TOTAL USERS</p>
          <h2 style={{ margin: '10px 0 0 0', fontSize: '32px' }}>{adminData.totalUsers}</h2>
        </div>
        <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <p style={{ color: '#666', margin: 0, fontSize: '12px' }}>TOTAL REVENUE</p>
          <h2 style={{ margin: '10px 0 0 0', fontSize: '32px' }}>₹{adminData.totalRevenue.toLocaleString()}</h2>
        </div>
        <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <p style={{ color: '#666', margin: 0, fontSize: '12px' }}>MRR</p>
          <h2 style={{ margin: '10px 0 0 0', fontSize: '32px' }}>₹{adminData.monthlyMetrics.mrr.toLocaleString()}</h2>
        </div>
        <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <p style={{ color: '#666', margin: 0, fontSize: '12px' }}>TOTAL VIDEOS</p>
          <h2 style={{ margin: '10px 0 0 0', fontSize: '32px' }}>{adminData.totalVideos.toLocaleString()}</h2>
        </div>
        <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <p style={{ color: '#666', margin: 0, fontSize: '12px' }}>TOTAL VIEWS</p>
          <h2 style={{ margin: '10px 0 0 0', fontSize: '32px' }}>{adminData.totalViews.toLocaleString()}</h2>
        </div>
      </div>

      {/* Subscription Breakdown */}
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h3>📊 Subscription Breakdown</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px', marginTop: '15px' }}>
          <div style={{ padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '6px' }}>
            <p style={{ margin: 0, color: '#666' }}>STARTER</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '24px', fontWeight: 'bold' }}>{adminData.subscriptionBreakdown.starter}</p>
            <p style={{ margin: '5px 0 0 0', color: '#999', fontSize: '12px' }}>₹{adminData.revenueByTier.starter.toLocaleString()}</p>
          </div>
          <div style={{ padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '6px' }}>
            <p style={{ margin: 0, color: '#666' }}>CREATOR</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '24px', fontWeight: 'bold' }}>{adminData.subscriptionBreakdown.creator}</p>
            <p style={{ margin: '5px 0 0 0', color: '#999', fontSize: '12px' }}>₹{adminData.revenueByTier.creator.toLocaleString()}</p>
          </div>
          <div style={{ padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '6px' }}>
            <p style={{ margin: 0, color: '#666' }}>PRO</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '24px', fontWeight: 'bold' }}>{adminData.subscriptionBreakdown.pro}</p>
            <p style={{ margin: '5px 0 0 0', color: '#999', fontSize: '12px' }}>₹{adminData.revenueByTier.pro.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Monthly Metrics */}
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h3>📈 Monthly Metrics</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '15px', marginTop: '15px' }}>
          <div style={{ padding: '15px', backgroundColor: '#f0f8ff', borderRadius: '6px' }}>
            <p style={{ margin: 0, color: '#666' }}>New Users</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '24px', fontWeight: 'bold', color: '#1976d2' }}>{adminData.monthlyMetrics.newUsers}</p>
          </div>
          <div style={{ padding: '15px', backgroundColor: '#fff3e0', borderRadius: '6px' }}>
            <p style={{ margin: 0, color: '#666' }}>Churn Rate</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '24px', fontWeight: 'bold', color: '#f57c00' }}>{adminData.monthlyMetrics.churnRate}%</p>
          </div>
          <div style={{ padding: '15px', backgroundColor: '#e8f5e9', borderRadius: '6px' }}>
            <p style={{ margin: 0, color: '#666' }}>MRR</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '24px', fontWeight: 'bold', color: '#388e3c' }}>₹{adminData.monthlyMetrics.mrr.toLocaleString()}</p>
          </div>
          <div style={{ padding: '15px', backgroundColor: '#f3e5f5', borderRadius: '6px' }}>
            <p style={{ margin: 0, color: '#666' }}>ARR</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '24px', fontWeight: 'bold', color: '#7b1fa2' }}>₹{adminData.monthlyMetrics.arr.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Platform Stats */}
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h3>🌐 Platform Performance</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '15px' }}>
          <div style={{ padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '6px' }}>
            <p style={{ margin: 0, color: '#666', fontWeight: 'bold' }}>YouTube</p>
            <p style={{ margin: '5px 0 0 0' }}>{adminData.platformStats.youtube.videos} videos | {adminData.platformStats.youtube.views.toLocaleString()} views</p>
          </div>
          <div style={{ padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '6px' }}>
            <p style={{ margin: 0, color: '#666', fontWeight: 'bold' }}>Instagram</p>
            <p style={{ margin: '5px 0 0 0' }}>{adminData.platformStats.instagram.videos} videos | {adminData.platformStats.instagram.views.toLocaleString()} views</p>
          </div>
        </div>
      </div>

      {/* Top Users */}
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h3>👥 Top Users</h3>
        <div style={{ marginTop: '15px' }}>
          {adminData.topUsers.map((user: any, index: number) => (
            <div key={index} style={{ padding: '15px', marginBottom: '10px', backgroundColor: '#f9f9f9', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>{index + 1}. {user.email}</p>
                <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>Tier: {user.tier}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ margin: 0, fontWeight: 'bold' }}>{user.videos} videos</p>
                <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>{user.views.toLocaleString()} views</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
