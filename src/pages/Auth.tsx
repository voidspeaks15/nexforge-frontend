import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/context/authStore'
import { Mail, Lock, User, Loader } from 'lucide-react'

export default function Auth() {
  const navigate = useNavigate()
  const { login, signup, isLoading, error } = useAuthStore()
  const [isSignup, setIsSignup] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (isSignup) {
        await signup(formData.email, formData.password, formData.name)
      } else {
        await login(formData.email, formData.password)
      }
      navigate('/dashboard')
    } catch (err) {
      // Error is handled in the store
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            NEXFORGE
          </h1>
          <p className="text-gray-400 mt-2">AI Content Automation Platform</p>
        </div>

        <div className="card">
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setIsSignup(false)}
              className={`flex-1 py-2 rounded font-medium transition ${
                !isSignup
                  ? 'bg-primary text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsSignup(true)}
              className={`flex-1 py-2 rounded font-medium transition ${
                isSignup
                  ? 'bg-primary text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              Signup
            </button>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-900/20 border border-red-800 rounded text-red-200 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignup && (
              <div>
                <label className="label">
                  <User className="w-4 h-4 inline mr-2" />
                  Name
                </label>
                <input
                  type="text"
                  className="input"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required={isSignup}
                />
              </div>
            )}

            <div>
              <label className="label">
                <Mail className="w-4 h-4 inline mr-2" />
                Email
              </label>
              <input
                type="email"
                className="input"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label className="label">
                <Lock className="w-4 h-4 inline mr-2" />
                Password
              </label>
              <input
                type="password"
                className="input"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              {isLoading && <Loader className="w-4 h-4 animate-spin" />}
              {isSignup ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          <p className="text-center text-gray-400 text-sm mt-6">
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              onClick={() => setIsSignup(!isSignup)}
              className="text-primary hover:text-purple-400 font-medium"
            >
              {isSignup ? 'Login' : 'Sign up'}
            </button>
          </p>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>Start free with STARTER tier</p>
          <p>3 videos/day • 5 genres • No credit card required</p>
        </div>
      </div>
    </div>
  )
}
