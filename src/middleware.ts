import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from './lib/auth'

// Define protected routes and their required roles
const protectedRoutes = {
  '/dashboard/admin': ['admin'],
  '/dashboard/teacher': ['teacher'],
  '/dashboard/student': ['student'],
  '/api/admin': ['admin'],
  '/api/teacher': ['teacher', 'admin'],
  '/api/student': ['student', 'teacher', 'admin']
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the route is protected
  const protectedRoute = Object.keys(protectedRoutes).find(route => 
    pathname.startsWith(route)
  )

  if (!protectedRoute) {
    return NextResponse.next()
  }

  // Get token from cookies
  const token = request.cookies.get('auth-token')?.value

  if (!token) {
    // Redirect to login if no token
    const loginUrl = new URL('/auth/login', request.url)
    loginUrl.searchParams.set('redirect', pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Verify token
  const decoded = verifyToken(token)
  
  if (!decoded) {
    // Redirect to login if token is invalid
    const loginUrl = new URL('/auth/login', request.url)
    loginUrl.searchParams.set('redirect', pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Check if user has required role
  const requiredRoles = protectedRoutes[protectedRoute as keyof typeof protectedRoutes]
  
  if (!requiredRoles.includes(decoded.role)) {
    // Redirect to appropriate dashboard based on user role
    const dashboardUrl = new URL(`/dashboard/${decoded.role}`, request.url)
    return NextResponse.redirect(dashboardUrl)
  }

  // Add user info to headers for API routes
  if (pathname.startsWith('/api/')) {
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-user-id', decoded.userId)
    requestHeaders.set('x-user-role', decoded.role)
    requestHeaders.set('x-user-email', decoded.email)

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/api/admin/:path*',
    '/api/teacher/:path*',
    '/api/student/:path*'
  ]
}
