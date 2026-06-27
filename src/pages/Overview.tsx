import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'
import { Video, Eye, Heart, Zap } from 'lucide-react'
import api from '@/utils/api'

interface Stats {
  totalVideos: number
  totalViews: number
  totalLikes: number
  avgEngagementRate: number
  generatedCount: number
  failedCount: number
  publishedCount: number
}

const mockData = [
  { date: 'Mon', views: 240, likes: 24 },
  { date: 'Tue', views: 320, likes: 35 },
  { date: 'Wed', views: 410, likes: 48 },
  { date: 'Thu', views: 360, likes: 42 },
  { date: 'Fri', views: 520, likes: 61 },
  { date: 'Sat', views: 480, likes: 55 },
  { date: 'Sun', views: 630, likes: 72 }
]

export default function Overview() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await api.get('/api/videos/stats/summary')
        setStats(res.data)
      } catch (error) {
        console.error('Failed to fetch stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading) {
    return (
      <div className="p-8">
        <div className="animate-pulse space-y-4">
          <div className="h-20 bg-gray-800 rounded"></div>
          <div className="h-96 bg-gray-800 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Videos</p>
              <p className="text-3xl font-bold">{stats?.totalVideos || 0}</p>
            </div>
            <Video className="w-8 h-8 text-primary opacity-50" />
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Views</p>
              <p className="text-3xl font-bold">{stats?.totalViews || 0}</p>
            </div>
            <Eye className="w-8 h-8 text-accent opacity-50" />
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Likes</p>
              <p className="text-3xl font-bold">{stats?.totalLikes || 0}</p>
            </div>
            <Heart className="w-8 h-8 text-red-500 opacity-50" />
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Engagement Rate</p>
              <p className="text-3xl font-bold">{stats?.avgEngagementRate || '0'}%</p>
            </div>
            <Zap className="w-8 h-8 text-yellow-500 opacity-50" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Views Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                labelStyle={{ color: '#fff' }}
              />
              <Line type="monotone" dataKey="views" stroke="#7B2FFF" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Likes Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                labelStyle={{ color: '#fff' }}
              />
              <Bar dataKey="likes" fill="#00D9FF" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="flex gap-4">
          <button className="btn-primary">Create Config</button>
          <button className="btn-secondary">View Videos</button>
          <a href="/dashboard/settings" className="btn-secondary">
            Settings
          </a>
        </div>
      </div>
    </div>
  )
}
