'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Calendar, 
  Clock,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  FileText,
  Award,
  Target,
  Download
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
  RadialBarChart,
  RadialBar,
  PieChart,
  Pie,
  Cell
} from 'recharts'
import DashboardLayout from '@/components/dashboard/DashboardLayout'

export default function StudentDashboard() {
  // Mock data - replace with real API calls
  const stats = [
    {
      title: 'Enrolled Courses',
      value: '6',
      change: 'Current semester',
      icon: BookOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Overall GPA',
      value: '3.75',
      change: '+0.15 this semester',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Attendance',
      value: '92%',
      change: 'Above average',
      icon: CheckCircle,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Assignments',
      value: '8/10',
      change: '2 pending',
      icon: FileText,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ]

  const gradeData = [
    { semester: 'Sem 1', gpa: 3.2 },
    { semester: 'Sem 2', gpa: 3.4 },
    { semester: 'Sem 3', gpa: 3.6 },
    { semester: 'Sem 4', gpa: 3.75 }
  ]

  const courseGrades = [
    { course: 'React.js', grade: 'A-', points: 3.7, color: '#006A4E' },
    { course: 'Database', grade: 'A', points: 4.0, color: '#F42A41' },
    { course: 'Algorithms', grade: 'B+', points: 3.3, color: '#0066CC' },
    { course: 'Web Design', grade: 'A', points: 4.0, color: '#FF6B35' },
    { course: 'Mathematics', grade: 'B', points: 3.0, color: '#8B5CF6' }
  ]

  const attendanceData = [
    { name: 'Present', value: 92, color: '#006A4E' },
    { name: 'Absent', value: 8, color: '#F42A41' }
  ]

  const upcomingClasses = [
    {
      id: 1,
      subject: 'Advanced React Concepts',
      time: '9:00 AM',
      room: 'Room 301',
      instructor: 'Dr. Sarah Ahmed',
      type: 'lecture'
    },
    {
      id: 2,
      subject: 'Database Lab',
      time: '2:00 PM',
      room: 'Lab 205',
      instructor: 'Prof. Rahman',
      type: 'lab'
    },
    {
      id: 3,
      subject: 'Algorithm Analysis',
      time: '4:00 PM',
      room: 'Room 401',
      instructor: 'Dr. Khan',
      type: 'lecture'
    }
  ]

  const assignments = [
    {
      id: 1,
      title: 'React Portfolio Project',
      course: 'Advanced React',
      dueDate: 'Tomorrow',
      status: 'pending',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Database Schema Design',
      course: 'Database Systems',
      dueDate: '3 days',
      status: 'in-progress',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Algorithm Complexity Analysis',
      course: 'Algorithms',
      dueDate: '1 week',
      status: 'not-started',
      priority: 'low'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'text-red-600 bg-red-50'
      case 'in-progress': return 'text-yellow-600 bg-yellow-50'
      case 'completed': return 'text-green-600 bg-green-50'
      case 'not-started': return 'text-gray-600 bg-gray-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500'
      case 'medium': return 'border-l-yellow-500'
      case 'low': return 'border-l-green-500'
      default: return 'border-l-gray-500'
    }
  }

  return (
    <DashboardLayout userRole="student" userName="Fatima Rahman">
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="glass-card p-6 rounded-2xl">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome back, Fatima! 📚
          </h1>
          <p className="text-gray-600">
            You have 3 classes today and 2 assignments due this week. Keep up the great work!
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* GPA Trend */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card p-6 rounded-2xl"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              GPA Progress
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={gradeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.3)" />
                <XAxis dataKey="semester" stroke="#6B7280" />
                <YAxis domain={[0, 4]} stroke="#6B7280" />
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
                  dataKey="gpa" 
                  stroke="#006A4E" 
                  strokeWidth={3}
                  dot={{ fill: '#006A4E', strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Course Grades */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass-card p-6 rounded-2xl"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Current Grades
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={courseGrades} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.3)" />
                <XAxis type="number" domain={[0, 4]} stroke="#6B7280" />
                <YAxis dataKey="course" type="category" stroke="#6B7280" width={80} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255,255,255,0.9)', 
                    border: 'none', 
                    borderRadius: '8px',
                    backdropFilter: 'blur(10px)'
                  }} 
                />
                <Bar dataKey="points" fill="#006A4E" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Attendance */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="glass-card p-6 rounded-2xl"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Attendance Overview
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={attendanceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {attendanceData.map((entry, index) => (
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
            <div className="text-center mt-2">
              <p className="text-2xl font-bold text-gray-800">92%</p>
              <p className="text-sm text-gray-600">Overall Attendance</p>
            </div>
          </motion.div>
        </div>

        {/* Today's Classes and Assignments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Today's Classes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="glass-card p-6 rounded-2xl"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Today's Classes</h3>
            <div className="space-y-4">
              {upcomingClasses.map((classItem) => (
                <div key={classItem.id} className="p-4 rounded-lg border border-white/20 hover:bg-white/10 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-800">{classItem.subject}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      classItem.type === 'lab' ? 'text-purple-600 bg-purple-50' : 'text-blue-600 bg-blue-50'
                    }`}>
                      {classItem.type}
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
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{classItem.instructor}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Assignments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="glass-card p-6 rounded-2xl"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Assignments</h3>
            <div className="space-y-4">
              {assignments.map((assignment) => (
                <div key={assignment.id} className={`p-4 rounded-lg border border-white/20 border-l-4 ${getPriorityColor(assignment.priority)} hover:bg-white/10 transition-colors`}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-800">{assignment.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(assignment.status)}`}>
                      {assignment.status.replace('-', ' ')}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{assignment.course}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      Due in {assignment.dueDate}
                    </p>
                    <span className={`text-xs font-medium ${
                      assignment.priority === 'high' ? 'text-red-600' : 
                      assignment.priority === 'medium' ? 'text-yellow-600' : 'text-green-600'
                    }`}>
                      {assignment.priority} priority
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 glass-button p-3 rounded-lg text-sm font-medium hover:bg-white/30 transition-all">
              View All Assignments
            </button>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="glass-card p-6 rounded-2xl"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="glass-button p-4 rounded-lg text-center hover:bg-white/30 transition-all">
              <BookOpen className="w-6 h-6 text-bd-green mx-auto mb-2" />
              <span className="text-sm font-medium">Course Materials</span>
            </button>
            <button className="glass-button p-4 rounded-lg text-center hover:bg-white/30 transition-all">
              <FileText className="w-6 h-6 text-bd-green mx-auto mb-2" />
              <span className="text-sm font-medium">Submit Assignment</span>
            </button>
            <button className="glass-button p-4 rounded-lg text-center hover:bg-white/30 transition-all">
              <Calendar className="w-6 h-6 text-bd-green mx-auto mb-2" />
              <span className="text-sm font-medium">View Schedule</span>
            </button>
            <button className="glass-button p-4 rounded-lg text-center hover:bg-white/30 transition-all">
              <Download className="w-6 h-6 text-bd-green mx-auto mb-2" />
              <span className="text-sm font-medium">Download Transcript</span>
            </button>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  )
}
