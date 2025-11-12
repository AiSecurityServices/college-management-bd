import jwt from 'jsonwebtoken'
import { NextRequest } from 'next/server'

export interface User {
  id: string
  email: string
  role: 'admin' | 'teacher' | 'student'
  firstName: string
  lastName: string
  fullName: string
}

export interface AuthToken {
  userId: string
  email: string
  role: string
  iat: number
  exp: number
}

export function verifyToken(token: string): AuthToken | null {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret') as AuthToken
    return decoded
  } catch (error) {
    return null
  }
}

export function getTokenFromRequest(request: NextRequest): string | null {
  // Try to get token from Authorization header
  const authHeader = request.headers.get('authorization')
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7)
  }

  // Try to get token from cookies
  const token = request.cookies.get('auth-token')?.value
  return token || null
}

export function getUserFromRequest(request: NextRequest): AuthToken | null {
  const token = getTokenFromRequest(request)
  if (!token) return null
  
  return verifyToken(token)
}

export function requireAuth(allowedRoles?: string[]) {
  return (request: NextRequest) => {
    const user = getUserFromRequest(request)
    
    if (!user) {
      return { error: 'Authentication required', status: 401 }
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
      return { error: 'Insufficient permissions', status: 403 }
    }

    return { user }
  }
}

export function generateToken(payload: { userId: string; email: string; role: string }): string {
  return jwt.sign(
    payload,
    process.env.JWT_SECRET || 'fallback-secret',
    { expiresIn: '24h' }
  )
}
