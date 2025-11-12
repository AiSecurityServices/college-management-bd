'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Users, BookOpen, Award, ArrowRight, Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-Role Management",
      description: "Separate dashboards for students, teachers, and administrators"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Course Management",
      description: "Complete course, assignment, and grade tracking system"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Analytics & Reports",
      description: "Comprehensive analytics for admissions, attendance, and performance"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-0 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-bd-green" />
              <span className="text-xl font-bold text-gradient">CollegeBD</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-gray-700 hover:text-bd-green transition-colors">About</Link>
              <Link href="#features" className="text-gray-700 hover:text-bd-green transition-colors">Features</Link>
              <Link href="#contact" className="text-gray-700 hover:text-bd-green transition-colors">Contact</Link>
              <div className="flex space-x-4">
                <Link href="/auth/login" className="glass-button px-4 py-2 rounded-lg text-gray-700 hover:text-bd-green">
                  Login
                </Link>
                <Link href="/auth/register" className="bd-gradient px-4 py-2 rounded-lg text-white hover:opacity-90 transition-opacity">
                  Register
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden glass-button p-2 rounded-lg"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden glass-card border-t border-white/20"
          >
            <div className="px-4 py-4 space-y-4">
              <Link href="#about" className="block text-gray-700 hover:text-bd-green">About</Link>
              <Link href="#features" className="block text-gray-700 hover:text-bd-green">Features</Link>
              <Link href="#contact" className="block text-gray-700 hover:text-bd-green">Contact</Link>
              <div className="pt-4 space-y-2">
                <Link href="/auth/login" className="block w-full glass-button px-4 py-2 rounded-lg text-center">
                  Login
                </Link>
                <Link href="/auth/register" className="block w-full bd-gradient px-4 py-2 rounded-lg text-white text-center">
                  Register
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Modern College Management
              <span className="block text-gradient">for Bangladesh</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Streamline your educational institution with our comprehensive management system. 
              Built specifically for Bangladeshi colleges with modern glassmorphism design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register" className="bd-gradient px-8 py-4 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity inline-flex items-center">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="#features" className="glass-button px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to <span className="text-gradient">Manage Your College</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform provides all the tools necessary for efficient college administration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-card p-8 rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-bd-green mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Built for <span className="text-gradient">Bangladeshi Education</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our college management system is specifically designed to meet the needs of 
                Bangladeshi educational institutions, incorporating local requirements and 
                cultural considerations.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-bd-green rounded-full mr-3"></div>
                  Multi-language support (English & Bangla)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-bd-green rounded-full mr-3"></div>
                  Local academic calendar integration
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-bd-green rounded-full mr-3"></div>
                  Compliance with BD education standards
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-bd-green mb-2">500+</div>
                  <div className="text-gray-600">Students Managed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-bd-green mb-2">50+</div>
                  <div className="text-gray-600">Teachers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-bd-green mb-2">25+</div>
                  <div className="text-gray-600">Departments</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-bd-green mb-2">99%</div>
                  <div className="text-gray-600">Uptime</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <GraduationCap className="w-8 h-8 text-bd-green" />
            <span className="text-xl font-bold text-gradient">CollegeBD</span>
          </div>
          <p className="text-gray-600 mb-4">
            Professional College Management System for Bangladesh
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-bd-green transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-bd-green transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-bd-green transition-colors">Contact</Link>
          </div>
          <div className="mt-6 text-sm text-gray-500">
            © 2024 CollegeBD. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
