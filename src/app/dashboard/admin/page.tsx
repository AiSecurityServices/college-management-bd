'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  TrendingUp, 
  Calendar,
  Award,
  Clock,
  DollarSign
} from 'lucide-react'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts'
import DashboardLayout from '@/components/dashboard/DashboardLayout'

export default function AdminDashboard() {
  // Mock data - replace with real API calls
  const stats = [
    {
      title: 'Total Students',
      value: '1,234',
      change: '+12%',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Total Teachers',
      value: '89',
      change: '+5%',
      icon: GraduationCap,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Active Courses',
      value: '156',
      change: '+8%',
      icon: BookOpen,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Revenue',
      value: '৳2.5M',
      change: '+15%',
      icon: DollarSign,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ]

  const enrollmentData = [
    { month: 'Jan', students: 120 },
    { month: 'Feb', students: 145 },
    { month: 'Mar', students: 180 },
    { month: 'Apr', students: 220 },
    { month: 'May', students: 280 },
    { month: 'Jun', students: 350 }
  ]

  const departmentData = [
    { name: 'Computer Science', students: 450, color: '#006A4E' },
    { name: 'Business Admin', students: 320, color: '#F42A41' },
    { name: 'Engineering', students: 280, color: '#0066CC' },
    { name: 'English', students: 184, color: '#FF6B35' }
  ]

  const recentActivities = [
    {
      id: 1,
      type: 'enrollment',
      message: 'New student enrolled in Computer Science',
      time: '2 hours ago',
      icon: Users
    },
    {
      id: 2,
      type: 'course',
      message: 'New course "Advanced React" added',
      time: '4 hours ago',
      icon: BookOpen
    },
    {
      id: 3,
      type: 'teacher',
      message: 'Dr. Rahman joined as Mathematics professor',
      time: '1 day ago',
      icon: GraduationCap
    },
    {
      id: 4,
      type: 'achievement',
      message: 'Student achieved 100% attendance milestone',
      time: '2 days ago',
      icon: Award
    }
  ]

  return (
    <DashboardLayout userRole="admin" userName="Admin User">
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="glass-card p-6 rounded-2xl">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome back, Admin! 👋
          </h1>
          <p className="text-gray-600">
            Here's what's happening at your college today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className="text-sm text-green-600 mt-1">{stat.change} from last month</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Enrollment Trend */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card p-6 rounded-2xl"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Student Enrollment Trend
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={enrollmentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.3)" />
                <XAxis dataKey="month" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255,255,255,0.9)', 
                    border: 'none', 
                    borderRadius: '8px',
                    backdropFilter: 'blur(10px)'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="students" 
                  stroke="#006A4E" 
                  strokeWidth={3}
                  dot={{ fill: '#006A4E', strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Department Distribution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass-card p-6 rounded-2xl"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Students by Department
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={departmentData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="students"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {departmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255,255,255,0.9)', 
                    border: 'none', 
                    borderRadius: '8px',
                    backdropFilter: 'blur(10px)'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Recent Activities and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="lg:col-span-2 glass-card p-6 rounded-2xl"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activities</h3>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/20 transition-colors">
                  <div className="p-2 bg-bd-green/10 rounded-lg">
                    <activity.icon className="w-5 h-5 text-bd-green" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">{activity.message}</p>
                    <p className="text-xs text-gray-500 flex items-center mt-1">
                      <Clock className="w-3 h-3 mr-1" />
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="glass-card p-6 rounded-2xl"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full glass-button p-3 rounded-lg text-left hover:bg-white/30 transition-all">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-bd-green" />
                  <span className="text-sm font-medium">Add New Student</span>
                </div>
              </button>
              <button className="w-full glass-button p-3 rounded-lg text-left hover:bg-white/30 transition-all">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-5 h-5 text-bd-green" />
                  <span className="text-sm font-medium">Add New Teacher</span>
                </div>
              </button>
              <button className="w-full glass-button p-3 rounded-lg text-left hover:bg-white/30 transition-all">
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-5 h-5 text-bd-green" />
                  <span className="text-sm font-medium">Create Course</span>
                </div>
              </button>
              <button className="w-full glass-button p-3 rounded-lg text-left hover:bg-white/30 transition-all">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-bd-green" />
                  <span className="text-sm font-medium">Schedule Event</span>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  )
}
