import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/context/authStore'
import {
  BarChart3,
  Settings,
  Video,
  Zap,
  LogOut,
  Menu,
  X,
  ChevronDown
} from 'lucide-react'

export default function Dashboard() {
  const navigate = useNavigate()
  const { user, logout } = useAuthStore()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const navItems = [
    { icon: BarChart3, label: 'Overview', path: '/dashboard' },
    { icon: Settings, label: 'Configs', path: '/dashboard/configs' },
    { icon: Video, label: 'Videos', path: '/dashboard/videos' },
    { icon: Zap, label: 'Analytics', path: '/dashboard/analytics' }
  ]

  return (
    <div className="flex h-screen bg-secondary">
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-gray-900 border-r border-gray-800 transition-all duration-300 hidden md:block`}
      >
        <div className="p-6 flex items-center justify-between">
          {sidebarOpen && (
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              NEXFORGE
            </h1>
          )}
        </div>

        <nav className="space-y-2 px-3">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-300 hover:text-white transition"
            >
              <item.icon className="w-5 h-5" />
              {sidebarOpen && <span>{item.label}</span>}
            </a>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 hover:bg-gray-800 rounded"
            >
              {sidebarOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
            <h2 className="text-2xl font-bold">Dashboard</h2>
          </div>

          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 rounded-lg"
            >
              <div className="text-right">
                <p className="font-medium text-sm">{user?.name}</p>
                <p className="text-xs text-gray-400">{user?.tier}</p>
              </div>
              <ChevronDown className="w-4 h-4" />
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg border border-gray-700 shadow-lg">
                <a
                  href="/dashboard/settings"
                  className="block px-4 py-2 hover:bg-gray-700 text-sm"
                >
                  <Settings className="w-4 h-4 inline mr-2" />
                  Settings
                </a>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-700 text-sm border-t border-gray-700 text-red-400"
                >
                  <LogOut className="w-4 h-4 inline mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </header>

        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
