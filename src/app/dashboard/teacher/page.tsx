'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  BookOpen, 
  Calendar, 
  Clock,
  CheckCircle,
  XCircle,
  TrendingUp,
  FileText,
  MessageSquare,
  Award
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
  Line
} from 'recharts'
import DashboardLayout from '@/components/dashboard/DashboardLayout'

export default function TeacherDashboard() {
  // Mock data - replace with real API calls
  const stats = [
    {
      title: 'My Classes',
      value: '6',
      change: '+2 this semester',
      icon: BookOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Total Students',
      value: '180',
      change: '+15 new enrollments',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Assignments',
      value: '12',
      change: '3 pending review',
      icon: FileText,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Avg. Attendance',
      value: '87%',
      change: '+5% this month',
      icon: CheckCircle,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ]

  const attendanceData = [
    { week: 'Week 1', attendance: 85 },
    { week: 'Week 2', attendance: 88 },
    { week: 'Week 3', attendance: 82 },
    { week: 'Week 4', attendance: 90 },
    { week: 'Week 5', attendance: 87 },
    { week: 'Week 6', attendance: 92 }
  ]

  const classPerformance = [
    { class: 'React Basics', avgGrade: 85, students: 30 },
    { class: 'JavaScript', avgGrade: 78, students: 35 },
    { class: 'Node.js', avgGrade: 82, students: 25 },
    { class: 'Database', avgGrade: 88, students: 28 }
  ]

  const todayClasses = [
    {
      id: 1,
      subject: 'React Advanced Concepts',
      time: '9:00 AM - 10:30 AM',
      room: 'Room 301',
      students: 30,
      status: 'upcoming'
    },
    {
      id: 2,
      subject: 'JavaScript Fundamentals',
      time: '11:00 AM - 12:30 PM',
      room: 'Room 205',
      students: 35,
      status: 'in-progress'
    },
    {
      id: 3,
      subject: 'Database Design',
      time: '2:00 PM - 3:30 PM',
      room: 'Room 401',
      students: 28,
      status: 'upcoming'
    }
  ]

  const recentSubmissions = [
    {
      id: 1,
      student: 'Fatima Rahman',
      assignment: 'React Project',
      submittedAt: '2 hours ago',
      status: 'pending'
    },
    {
      id: 2,
      student: 'Mohammad Ali',
      assignment: 'JavaScript Quiz',
      submittedAt: '4 hours ago',
      status: 'graded'
    },
    {
      id: 3,
      student: 'Ayesha Khan',
      assignment: 'Database Schema',
      submittedAt: '1 day ago',
      status: 'pending'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'text-blue-600 bg-blue-50'
      case 'in-progress': return 'text-green-600 bg-green-50'
      case 'completed': return 'text-gray-600 bg-gray-50'
      case 'pending': return 'text-yellow-600 bg-yellow-50'
      case 'graded': return 'text-green-600 bg-green-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  return (
    <DashboardLayout userRole="teacher" userName="Dr. Sarah Ahmed">
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="glass-card p-6 rounded-2xl">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Good morning, Dr. Ahmed! 🌅
          </h1>
          <p className="text-gray-600">
            You have 3 classes scheduled for today. Ready to inspire minds?
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
                  <p className="text-sm text-green-600 mt-1">{stat.change}</p>
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
          {/* Attendance Trend */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card p-6 rounded-2xl"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Class Attendance Trend
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.3)" />
                <XAxis dataKey="week" stroke="#6B7280" />
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
                  dataKey="attendance" 
                  stroke="#006A4E" 
                  strokeWidth={3}
                  dot={{ fill: '#006A4E', strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Class Performance */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass-card p-6 rounded-2xl"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Class Performance
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={classPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.3)" />
                <XAxis dataKey="class" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255,255,255,0.9)', 
                    border: 'none', 
                    borderRadius: '8px',
                    backdropFilter: 'blur(10px)'
                  }} 
                />
                <Bar dataKey="avgGrade" fill="#006A4E" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Today's Classes and Recent Submissions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Today's Classes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="glass-card p-6 rounded-2xl"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Today's Classes</h3>
            <div className="space-y-4">
              {todayClasses.map((classItem) => (
                <div key={classItem.id} className="p-4 rounded-lg border border-white/20 hover:bg-white/10 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-800">{classItem.subject}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(classItem.status)}`}>
                      {classItem.status.replace('-', ' ')}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{classItem.time}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{classItem.room}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{classItem.students} students</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Submissions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="glass-card p-6 rounded-2xl"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Submissions</h3>
            <div className="space-y-4">
              {recentSubmissions.map((submission) => (
                <div key={submission.id} className="p-4 rounded-lg border border-white/20 hover:bg-white/10 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-800">{submission.student}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(submission.status)}`}>
                      {submission.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{submission.assignment}</p>
                  <p className="text-xs text-gray-500 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {submission.submittedAt}
                  </p>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 glass-button p-3 rounded-lg text-sm font-medium hover:bg-white/30 transition-all">
              View All Submissions
            </button>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="glass-card p-6 rounded-2xl"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="glass-button p-4 rounded-lg text-center hover:bg-white/30 transition-all">
              <Calendar className="w-6 h-6 text-bd-green mx-auto mb-2" />
              <span className="text-sm font-medium">Take Attendance</span>
            </button>
            <button className="glass-button p-4 rounded-lg text-center hover:bg-white/30 transition-all">
              <FileText className="w-6 h-6 text-bd-green mx-auto mb-2" />
              <span className="text-sm font-medium">Create Assignment</span>
            </button>
            <button className="glass-button p-4 rounded-lg text-center hover:bg-white/30 transition-all">
              <Award className="w-6 h-6 text-bd-green mx-auto mb-2" />
              <span className="text-sm font-medium">Grade Papers</span>
            </button>
            <button className="glass-button p-4 rounded-lg text-center hover:bg-white/30 transition-all">
              <MessageSquare className="w-6 h-6 text-bd-green mx-auto mb-2" />
              <span className="text-sm font-medium">Message Students</span>
            </button>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  )
}
