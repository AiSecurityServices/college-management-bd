// Mock authentication for static deployment
export interface User {
  id: string
  email: string
  role: 'admin' | 'teacher' | 'student'
  firstName: string
  lastName: string
  fullName: string
}

// Mock users database
const mockUsers = [
  {
    id: '1',
    email: 'admin@collegebd.com',
    password: 'admin123',
    role: 'admin' as const,
    firstName: 'Admin',
    lastName: 'User'
  },
  {
    id: '2',
    email: 'teacher@collegebd.com',
    password: 'teacher123',
    role: 'teacher' as const,
    firstName: 'Dr. Sarah',
    lastName: 'Ahmed'
  },
  {
    id: '3',
    email: 'student@collegebd.com',
    password: 'student123',
    role: 'student' as const,
    firstName: 'Fatima',
    lastName: 'Rahman'
  }
]

export class MockAuthService {
  private static instance: MockAuthService
  private currentUser: User | null = null

  static getInstance(): MockAuthService {
    if (!MockAuthService.instance) {
      MockAuthService.instance = new MockAuthService()
    }
    return MockAuthService.instance
  }

  async login(email: string, password: string, userType: string): Promise<User> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    const user = mockUsers.find(u => 
      u.email === email && 
      u.password === password && 
      u.role === userType
    )

    if (!user) {
      throw new Error('Invalid credentials')
    }

    const userData: User = {
      id: user.id,
      email: user.email,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
      fullName: `${user.firstName} ${user.lastName}`
    }

    this.currentUser = userData
    
    // Store in localStorage for persistence
    if (typeof window !== 'undefined') {
      localStorage.setItem('currentUser', JSON.stringify(userData))
    }

    return userData
  }

  async logout(): Promise<void> {
    this.currentUser = null
    if (typeof window !== 'undefined') {
      localStorage.removeItem('currentUser')
    }
  }

  getCurrentUser(): User | null {
    if (this.currentUser) {
      return this.currentUser
    }

    // Try to get from localStorage
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('currentUser')
      if (stored) {
        try {
          this.currentUser = JSON.parse(stored)
          return this.currentUser
        } catch (error) {
          localStorage.removeItem('currentUser')
        }
      }
    }

    return null
  }

  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null
  }
}
