import { create } from 'zustand'
import axios from 'axios'

interface User {
  id: string
  email: string
  name: string
  tier: 'STARTER' | 'CREATOR' | 'PRO'
  avatar?: string
}

interface AuthState {
  user: User | null
  token: string | null
  isLoading: boolean
  error: string | null
  
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string, name: string) => Promise<void>
  logout: () => void
  setUser: (user: User) => void
  setToken: (token: string) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: localStorage.getItem('nexforge_token'),
  isLoading: false,
  error: null,

  login: async (email, password) => {
    set({ isLoading: true, error: null })
    try {
      const res = await axios.post('/api/auth/login', { email, password })
      const { token, user } = res.data
      
      localStorage.setItem('nexforge_token', token)
      set({ token, user })
    } catch (error: any) {
      const message = error.response?.data?.error || 'Login failed'
      set({ error: message })
      throw error
    } finally {
      set({ isLoading: false })
    }
  },

  signup: async (email, password, name) => {
    set({ isLoading: true, error: null })
    try {
      const res = await axios.post('/api/auth/signup', { email, password, name })
      const { token, user } = res.data
      
      localStorage.setItem('nexforge_token', token)
      set({ token, user })
    } catch (error: any) {
      const message = error.response?.data?.error || 'Signup failed'
      set({ error: message })
      throw error
    } finally {
      set({ isLoading: false })
    }
  },

  logout: () => {
    localStorage.removeItem('nexforge_token')
    set({ user: null, token: null })
  },

  setUser: (user) => set({ user }),
  setToken: (token) => set({ token })
}))
