'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  Menu, 
  X, 
  Home, 
  Users, 
  BookOpen, 
  Calendar, 
  BarChart3, 
  Settings, 
  LogOut,
  Bell,
  Search,
  User
} from 'lucide-react'
import Link from 'next/link'

interface DashboardLayoutProps {
  children: React.ReactNode
  userRole: 'admin' | 'teacher' | 'student'
  userName: string
  userAvatar?: string
}

export default function DashboardLayout({ children, userRole, userName, userAvatar }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const getNavigationItems = () => {
    const commonItems = [
      { name: 'Dashboard', href: `/dashboard/${userRole}`, icon: Home },
      { name: 'Profile', href: `/dashboard/${userRole}/profile`, icon: User },
      { name: 'Settings', href: `/dashboard/${userRole}/settings`, icon: Settings },
    ]

    const roleSpecificItems = {
      admin: [
        { name: 'Users', href: '/dashboard/admin/users', icon: Users },
        { name: 'Departments', href: '/dashboard/admin/departments', icon: BookOpen },
        { name: 'Analytics', href: '/dashboard/admin/analytics', icon: BarChart3 },
        { name: 'Calendar', href: '/dashboard/admin/calendar', icon: Calendar },
      ],
      teacher: [
        { name: 'Classes', href: '/dashboard/teacher/classes', icon: BookOpen },
        { name: 'Students', href: '/dashboard/teacher/students', icon: Users },
        { name: 'Attendance', href: '/dashboard/teacher/attendance', icon: Calendar },
        { name: 'Grades', href: '/dashboard/teacher/grades', icon: BarChart3 },
      ],
      student: [
        { name: 'Courses', href: '/dashboard/student/courses', icon: BookOpen },
        { name: 'Grades', href: '/dashboard/student/grades', icon: BarChart3 },
        { name: 'Schedule', href: '/dashboard/student/schedule', icon: Calendar },
        { name: 'Assignments', href: '/dashboard/student/assignments', icon: Users },
      ]
    }

    return [
      ...commonItems.slice(0, 1), // Dashboard first
      ...roleSpecificItems[userRole],
      ...commonItems.slice(1) // Profile and Settings last
    ]
  }

  const navigationItems = getNavigationItems()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="glass-card h-full border-r border-white/20 rounded-none">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b border-white/20">
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-bd-green" />
              <span className="text-xl font-bold text-gradient">CollegeBD</span>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden glass-button p-2 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* User Info */}
          <div className="p-6 border-b border-white/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-bd-green to-bd-red rounded-full flex items-center justify-center text-white font-semibold">
                {userName.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-semibold text-gray-800">{userName}</p>
                <p className="text-sm text-gray-600 capitalize">{userRole}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6">
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-white/20 transition-all duration-200 group"
                  >
                    <item.icon className="w-5 h-5 group-hover:text-bd-green transition-colors" />
                    <span className="group-hover:text-bd-green transition-colors">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logout */}
          <div className="p-6 border-t border-white/20">
            <button className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 w-full">
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:ml-64">
        {/* Top bar */}
        <header className="glass-card border-b border-white/20 rounded-none">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden glass-button p-2 rounded-lg"
              >
                <Menu className="w-5 h-5" />
              </button>
              <h1 className="text-xl font-semibold text-gray-800 capitalize">
                {userRole} Dashboard
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="glass-input pl-10 pr-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-bd-green/50"
                />
              </div>

              {/* Notifications */}
              <button className="relative glass-button p-2 rounded-lg">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>

              {/* User menu */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-bd-green to-bd-red rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {userName.charAt(0).toUpperCase()}
                </div>
                <span className="hidden md:block text-sm font-medium text-gray-700">{userName}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  )
}
