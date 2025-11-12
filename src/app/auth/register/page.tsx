'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, EyeOff, GraduationCap, ArrowLeft, User, Mail, Lock, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [userType, setUserType] = useState('student')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: '',
    studentId: '',
    department: '',
    semester: '',
    employeeId: '',
    subject: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    // Handle registration logic here
    console.log('Registration attempt:', { ...formData, userType })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Back to Home */}
        <Link href="/" className="inline-flex items-center text-bd-green hover:text-bd-red transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Register Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 rounded-2xl"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <GraduationCap className="w-8 h-8 text-bd-green" />
              <span className="text-xl font-bold text-gradient">CollegeBD</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Create Account</h1>
            <p className="text-gray-600">Join our college management system</p>
          </div>

          {/* User Type Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">Register as</label>
            <div className="grid grid-cols-3 gap-2">
              {['student', 'teacher', 'admin'].map((type) => (
                <button
                  key={type}
                  onClick={() => setUserType(type)}
                  className={`p-3 rounded-lg text-sm font-medium transition-all ${
                    userType === type
                      ? 'bd-gradient text-white'
                      : 'glass-button text-gray-700 hover:bg-white/30'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-1" />
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full glass-input px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-bd-green/50"
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-1" />
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full glass-input px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-bd-green/50"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4 inline mr-1" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full glass-input px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-bd-green/50"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-1" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full glass-input px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-bd-green/50"
                  placeholder="01XXXXXXXXX"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  className="w-full glass-input px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-bd-green/50"
                  placeholder="Enter address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Role-specific fields */}
            {userType === 'student' && (
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-2">
                    Student ID
                  </label>
                  <input
                    type="text"
                    id="studentId"
                    name="studentId"
                    required
                    className="w-full glass-input px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-bd-green/50"
                    placeholder="e.g., 2024001"
                    value={formData.studentId}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                    Department
                  </label>
                  <select
                    id="department"
                    name="department"
                    required
                    className="w-full glass-input px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-bd-green/50"
                    value={formData.department}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Department</option>
                    <option value="cse">Computer Science</option>
                    <option value="eee">Electrical Engineering</option>
                    <option value="bba">Business Administration</option>
                    <option value="english">English</option>
                    <option value="math">Mathematics</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="semester" className="block text-sm font-medium text-gray-700 mb-2">
                    Semester
                  </label>
                  <select
                    id="semester"
                    name="semester"
                    required
                    className="w-full glass-input px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-bd-green/50"
                    value={formData.semester}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Semester</option>
                    <option value="1">1st Semester</option>
                    <option value="2">2nd Semester</option>
                    <option value="3">3rd Semester</option>
                    <option value="4">4th Semester</option>
                    <option value="5">5th Semester</option>
                    <option value="6">6th Semester</option>
                    <option value="7">7th Semester</option>
                    <option value="8">8th Semester</option>
                  </select>
                </div>
              </div>
            )}

            {userType === 'teacher' && (
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700 mb-2">
                    Employee ID
                  </label>
                  <input
                    type="text"
                    id="employeeId"
                    name="employeeId"
                    required
                    className="w-full glass-input px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-bd-green/50"
                    placeholder="e.g., EMP001"
                    value={formData.employeeId}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject/Department
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full glass-input px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-bd-green/50"
                    value={formData.subject}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Subject</option>
                    <option value="cse">Computer Science</option>
                    <option value="eee">Electrical Engineering</option>
                    <option value="bba">Business Administration</option>
                    <option value="english">English</option>
                    <option value="math">Mathematics</option>
                  </select>
                </div>
              </div>
            )}

            {userType === 'admin' && (
              <div>
                <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700 mb-2">
                  Admin ID
                </label>
                <input
                  type="text"
                  id="employeeId"
                  name="employeeId"
                  required
                  className="w-full glass-input px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-bd-green/50"
                  placeholder="e.g., ADMIN001"
                  value={formData.employeeId}
                  onChange={handleInputChange}
                />
              </div>
            )}

            {/* Password Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  <Lock className="w-4 h-4 inline mr-1" />
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    required
                    className="w-full glass-input px-4 py-3 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-bd-green/50"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  <Lock className="w-4 h-4 inline mr-1" />
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    required
                    className="w-full glass-input px-4 py-3 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-bd-green/50"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                required
                className="rounded border-gray-300 text-bd-green focus:ring-bd-green"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I agree to the{' '}
                <Link href="/terms" className="text-bd-green hover:text-bd-red transition-colors">
                  Terms and Conditions
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="text-bd-green hover:text-bd-red transition-colors">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bd-gradient py-3 px-4 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-bd-green hover:text-bd-red font-semibold transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
