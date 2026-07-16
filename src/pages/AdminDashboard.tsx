import React from 'react'
import { Users, DollarSign, BarChart3, TrendingUp, UserCheck, AlertCircle } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function AdminDashboard() {
  const systemStats = [
    { label: 'Total Users', value: '142', icon: Users, color: '#a855f7', change: '+12' },
    { label: 'Total Revenue', value: '₹45,000', icon: DollarSign, color: '#10b981', change: '+8%' },
    { label: 'Total Videos', value: '1,240', icon: BarChart3, color: '#06b6d4', change: '+45' },
    { label: 'Total Views', value: '512K', icon: TrendingUp, color: '#f59e0b', change: '+23%' }
  ]

  const subscriptionTiers = [
    { tier: 'STARTER', users: 45, revenue: '₹13,500', percentage: 32 },
    { tier: 'CREATOR', users: 35, revenue: '₹13,300', percentage: 25 },
    { tier: 'PRO', users: 18, revenue: '₹18,200', percentage: 13 }
  ]

  const monthlyRevenue = [
    { month: 'Jan', revenue: 8200 },
    { month: 'Feb', revenue: 9500 },
    { month: 'Mar', revenue: 11200 },
    { month: 'Apr', revenue: 12500 },
    { month: 'May', revenue: 13000 },
    { month: 'Jun', revenue: 12500 }
  ]

  const topUsers = [
    { email: 'creator1@example.com', tier: 'PRO', videos: 87, views: 45000, revenue: '₹49' },
    { email: 'creator2@example.com', tier: 'CREATOR', videos: 62, views: 32000, revenue: '₹19' },
    { email: 'creator3@example.com', tier: 'STARTER', videos: 48, views: 18000, revenue: '₹9' }
  ]

  const platformStats = [
    { platform: 'YouTube', videos: 720, views: 320000, percentage: 62 },
    { platform: 'Instagram', videos: 520, views: 192000, percentage: 38 }
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
          👨‍💼 Admin Dashboard
        </h1>
        <p style={{ color: '#cbd5e1' }}>System overview and performance metrics</p>
      </div>

      {/* System Stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        {systemStats.map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <div
              key={index}
              style={{
                backgroundColor: 'rgba(168, 85, 247, 0.1)',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                borderRadius: '12px',
                padding: '25px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px' }}>
                <p style={{ color: '#cbd5e1', fontSize: '14px', fontWeight: 'bold', margin: '0' }}>
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
              <p style={{ fontSize: '28px', fontWeight: 'bold', color: stat.color, margin: '0 0 8px 0' }}>
                {stat.value}
              </p>
              <p style={{ color: '#10b981', fontSize: '12px', fontWeight: 'bold', margin: '0' }}>
                {stat.change} this month
              </p>
            </div>
          )
        })}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px', marginBottom: '30px' }}>
        {/* Revenue Chart */}
        <div style={{
          backgroundColor: 'rgba(168, 85, 247, 0.05)',
          border: '1px solid rgba(168, 85, 247, 0.2)',
          borderRadius: '12px',
          padding: '25px'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>
            💰 Monthly Revenue Trend
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(168, 85, 247, 0.1)" />
              <XAxis dataKey="month" stroke="#cbd5e1" />
              <YAxis stroke="#cbd5e1" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(26, 31, 58, 0.95)',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  borderRadius: '8px'
                }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#10b981"
                strokeWidth={2}
                dot={{ fill: '#10b981', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Subscription Breakdown */}
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>
            📊 Subscription Tiers
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {subscriptionTiers.map((tier, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'rgba(168, 85, 247, 0.1)',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  borderRadius: '12px',
                  padding: '15px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <p style={{ fontWeight: 'bold', margin: '0' }}>{tier.tier}</p>
                  <p style={{ color: '#a855f7', fontWeight: 'bold', margin: '0' }}>
                    {tier.users} users
                  </p>
                </div>
                <div style={{
                  backgroundColor: 'rgba(0,0,0,0.3)',
                  height: '6px',
                  borderRadius: '3px',
                  overflow: 'hidden',
                  marginBottom: '8px'
                }}>
                  <div style={{
                    backgroundColor: '#a855f7',
                    height: '100%',
                    width: `${tier.percentage}%`
                  }} />
                </div>
                <p style={{ color: '#cbd5e1', fontSize: '12px', margin: '0' }}>
                  {tier.revenue}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Platform Stats */}
      <div style={{
        backgroundColor: 'rgba(168, 85, 247, 0.05)',
        border: '1px solid rgba(168, 85, 247, 0.2)',
        borderRadius: '12px',
        padding: '25px',
        marginBottom: '30px'
      }}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>
          📱 Platform Distribution
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={platformStats}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(168, 85, 247, 0.1)" />
            <XAxis dataKey="platform" stroke="#cbd5e1" />
            <YAxis stroke="#cbd5e1" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(26, 31, 58, 0.95)',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                borderRadius: '8px'
              }}
            />
            <Legend />
            <Bar dataKey="videos" fill="#a855f7" radius={[8, 8, 0, 0]} />
            <Bar dataKey="views" fill="#06b6d4" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Top Users */}
      <div style={{
        backgroundColor: 'rgba(168, 85, 247, 0.05)',
        border: '1px solid rgba(168, 85, 247, 0.2)',
        borderRadius: '12px',
        padding: '25px'
      }}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          🌟 Top Creators
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(168, 85, 247, 0.2)' }}>
                <th style={{ padding: '15px', textAlign: 'left', color: '#a855f7', fontWeight: 'bold' }}>Email</th>
                <th style={{ padding: '15px', textAlign: 'center', color: '#a855f7', fontWeight: 'bold' }}>Tier</th>
                <th style={{ padding: '15px', textAlign: 'center', color: '#a855f7', fontWeight: 'bold' }}>Videos</th>
                <th style={{ padding: '15px', textAlign: 'center', color: '#a855f7', fontWeight: 'bold' }}>Views</th>
                <th style={{ padding: '15px', textAlign: 'right', color: '#a855f7', fontWeight: 'bold' }}>MRR</th>
              </tr>
            </thead>
            <tbody>
              {topUsers.map((user, index) => (
                <tr
                  key={index}
                  style={{ borderBottom: '1px solid rgba(168, 85, 247, 0.1)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  <td style={{ padding: '15px', color: '#fff' }}>{user.email}</td>
                  <td style={{ padding: '15px', textAlign: 'center', color: '#a855f7', fontWeight: 'bold' }}>
                    {user.tier}
                  </td>
                  <td style={{ padding: '15px', textAlign: 'center', color: '#cbd5e1' }}>
                    {user.videos}
                  </td>
                  <td style={{ padding: '15px', textAlign: 'center', color: '#cbd5e1' }}>
                    {user.views}
                  </td>
                  <td style={{ padding: '15px', textAlign: 'right', color: '#10b981', fontWeight: 'bold' }}>
                    {user.revenue}
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
