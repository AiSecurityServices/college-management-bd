'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface User {
  id: string
  email: string
  role: 'admin' | 'teacher' | 'student'
  firstName: string
  lastName: string
  fullName: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string, userType: string) => Promise<void>
  logout: () => Promise<void>
  loading: boolean
  error: string | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  // Check for existing session on mount
  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      // Use mock authentication for static deployment
      const { MockAuthService } = await import('@/lib/mockAuth')
      const authService = MockAuthService.getInstance()
      
      const userData = authService.getCurrentUser()
      if (userData) {
        setUser(userData)
      }
    } catch (error) {
      console.error('Auth check failed:', error)
    } finally {
      setLoading(false)
    }
  }

  const login = async (email: string, password: string, userType: string) => {
    try {
      setLoading(true)
      setError(null)

      // Use mock authentication for static deployment
      const { MockAuthService } = await import('@/lib/mockAuth')
      const authService = MockAuthService.getInstance()
      
      const userData = await authService.login(email, password, userType)
      setUser(userData)
      
      // Redirect to appropriate dashboard
      router.push(`/dashboard/${userData.role}`)
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Login failed')
      throw error
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    try {
      setLoading(true)
      
      // Use mock authentication for static deployment
      const { MockAuthService } = await import('@/lib/mockAuth')
      const authService = MockAuthService.getInstance()
      
      await authService.logout()
      setUser(null)
      router.push('/')
    } catch (error) {
      console.error('Logout failed:', error)
    } finally {
      setLoading(false)
    }
  }

  const value = {
    user,
    login,
    logout,
    loading,
    error
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
