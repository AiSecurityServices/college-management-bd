import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// Mock user database - replace with actual database
const users: any[] = []

export async function POST(request: NextRequest) {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      password,
      userType,
      studentId,
      department,
      semester,
      employeeId,
      subject
    } = await request.json()

    // Validate required fields
    if (!firstName || !lastName || !email || !password || !userType) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = users.find(u => u.email === email)
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create new user
    const newUser: any = {
      id: Date.now().toString(),
      firstName,
      lastName,
      email,
      phone,
      address,
      password: hashedPassword,
      role: userType,
      createdAt: new Date().toISOString(),
      isActive: true
    }

    // Add role-specific fields
    if (userType === 'student') {
      newUser.studentId = studentId
      newUser.department = department
      newUser.semester = semester
    } else if (userType === 'teacher') {
      newUser.employeeId = employeeId
      newUser.subject = subject
    } else if (userType === 'admin') {
      newUser.employeeId = employeeId
    }

    // Save user (in real app, save to database)
    users.push(newUser)

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: newUser.id, 
        email: newUser.email, 
        role: newUser.role 
      },
      process.env.JWT_SECRET || 'fallback-secret',
      { expiresIn: '24h' }
    )

    // Return user data and token (exclude password)
    const { password: _, ...userData } = newUser

    const response = NextResponse.json({
      message: 'Registration successful',
      user: userData,
      token
    }, { status: 201 })

    // Set HTTP-only cookie
    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    })

    return response

  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Register endpoint - use POST method' },
    { status: 405 }
  )
}
