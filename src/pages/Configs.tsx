import { useEffect, useState } from 'react'
import { Plus, Edit2, Trash2, ToggleLeft, ToggleRight } from 'lucide-react'
import api from '@/utils/api'

interface Config {
  id: string
  genre: string
  videosPerDay: number
  isActive: boolean
  postingTimes: string
}

const GENRES = [
  'Dark Stoicism',
  'Cosmic Horror',
  'Existential Philosophy',
  'Motivation Dark',
  'Ancient Mysteries',
  'Cyberpunk Noir',
  'Psychological Thriller'
]

export default function Configs() {
  const [configs, setConfigs] = useState<Config[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [selectedGenre, setSelectedGenre] = useState(GENRES[0])

  useEffect(() => {
    fetchConfigs()
  }, [])

  const fetchConfigs = async () => {
    try {
      const res = await api.get('/api/configs')
      setConfigs(res.data)
    } catch (error) {
      console.error('Failed to fetch configs:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await api.post('/api/configs', {
        genre: selectedGenre,
        videosPerDay: 3,
        postingTimes: ['08:00', '14:00', '20:00']
      })
      fetchConfigs()
      setShowForm(false)
    } catch (error) {
      console.error('Failed to create config:', error)
    }
  }

  const handleToggle = async (id: string) => {
    try {
      await api.patch(`/api/configs/${id}/toggle`)
      fetchConfigs()
    } catch (error) {
      console.error('Failed to toggle config:', error)
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure?')) {
      try {
        await api.delete(`/api/configs/${id}`)
        fetchConfigs()
      } catch (error) {
        console.error('Failed to delete config:', error)
      }
    }
  }

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Content Configurations</h1>
        <button onClick={() => setShowForm(!showForm)} className="btn-primary flex items-center gap-2">
          <Plus className="w-5 h-5" />
          New Config
        </button>
      </div>

      {showForm && (
        <div className="card">
          <h2 className="text-xl font-bold mb-4">Create New Configuration</h2>
          <form onSubmit={handleCreate} className="space-y-4">
            <div>
              <label className="label">Genre</label>
              <select
                className="input"
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
              >
                {GENRES.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-4">
              <button type="submit" className="btn-primary">
                Create
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="btn-secondary"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <div className="text-gray-400">Loading...</div>
      ) : configs.length === 0 ? (
        <div className="card text-center py-12">
          <p className="text-gray-400">No configurations yet. Create one to get started!</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {configs.map((config) => (
            <div key={config.id} className="card flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">{config.genre}</h3>
                <p className="text-gray-400 text-sm">{config.videosPerDay} videos/day</p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleToggle(config.id)}
                  className="p-2 hover:bg-gray-800 rounded"
                >
                  {config.isActive ? (
                    <ToggleRight className="w-6 h-6 text-primary" />
                  ) : (
                    <ToggleLeft className="w-6 h-6 text-gray-500" />
                  )}
                </button>
                <button className="p-2 hover:bg-gray-800 rounded">
                  <Edit2 className="w-5 h-5 text-accent" />
                </button>
                <button
                  onClick={() => handleDelete(config.id)}
                  className="p-2 hover:bg-gray-800 rounded"
                >
                  <Trash2 className="w-5 h-5 text-red-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
