import { NextRequest, NextResponse } from 'next/server'
import { getUserFromRequest } from '@/lib/auth'

// Mock user database - replace with actual database
const users = [
  {
    id: '1',
    email: 'admin@collegebd.com',
    role: 'admin',
    firstName: 'Admin',
    lastName: 'User'
  },
  {
    id: '2',
    email: 'teacher@collegebd.com',
    role: 'teacher',
    firstName: 'Dr. Sarah',
    lastName: 'Ahmed'
  },
  {
    id: '3',
    email: 'student@collegebd.com',
    role: 'student',
    firstName: 'Fatima',
    lastName: 'Rahman'
  }
]

export const runtime = 'nodejs'

export async function GET(request: NextRequest) {
  try {
    const authUser = getUserFromRequest(request)
    
    if (!authUser) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }

    // Find user details
    const user = users.find(u => u.id === authUser.userId)
    
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    // Return user data
    const userData = {
      id: user.id,
      email: user.email,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
      fullName: `${user.firstName} ${user.lastName}`
    }

    return NextResponse.json({
      user: userData
    })

  } catch (error) {
    console.error('Get user error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
