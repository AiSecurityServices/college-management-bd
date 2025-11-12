# College Management System - Bangladesh

A modern, professional college management system built specifically for Bangladeshi educational institutions, featuring a beautiful glassmorphism UI and comprehensive functionality for students, teachers, and administrators.

## 🎨 Features

### Design
- **Glassmorphism UI**: Modern transparent design with blur effects
- **Responsive Layout**: Optimized for desktop, tablet, and mobile
- **Bangladesh Theme**: Colors inspired by the Bangladeshi flag (green, red, white)
- **Smooth Animations**: Powered by Framer Motion
- **Professional Typography**: Clean and readable fonts

### User Roles

#### Admin Dashboard
- Manage colleges, departments, courses, and semesters
- User management (students, teachers, staff) with CRUD operations
- Admission approvals and course registrations
- Analytics and reports (admissions, results, attendance)
- News, events, and notices management

#### Teacher Dashboard
- Class management and scheduling
- Attendance tracking and grading
- Assignment creation and management
- Student performance reports
- Communication with students and staff

#### Student Dashboard
- Personal dashboard with attendance and grades
- Course materials and lecture notes access
- Assignment submission portal
- Course registration for new semesters
- Notifications and announcements

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework with custom glassmorphism utilities
- **Framer Motion** - Animation library for smooth transitions
- **Lucide React** - Beautiful icon library
- **Recharts** - Charting library for analytics

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication and authorization
- **bcryptjs** - Password hashing

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or cloud instance)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/college-management-bd.git
   cd college-management-bd
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Update the `.env.local` file with your configuration:
   ```env
   MONGODB_URI=mongodb://localhost:27017/college_management_bd
   JWT_SECRET=your_super_secret_jwt_key_here
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret_here
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📤 GitHub Repository Setup

This project is ready to be uploaded to GitHub. Follow these steps:

### Initial Setup
```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: College Management System for Bangladesh"

# Add your GitHub repository as origin
git remote add origin https://github.com/yourusername/college-management-bd.git

# Push to GitHub
git push -u origin main
```

### For Existing Repository
```bash
# Add files
git add .

# Commit changes
git commit -m "Add College Management System"

# Push to GitHub
git push origin main
```

## 📁 Project Structure

```
college-management-bd/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── auth/              # Authentication pages
│   │   ├── dashboard/         # Dashboard pages for different roles
│   │   ├── api/               # API routes
│   │   └── globals.css        # Global styles with glassmorphism utilities
│   ├── components/            # Reusable React components
│   ├── lib/                   # Utility functions and configurations
│   └── types/                 # TypeScript type definitions
├── public/                    # Static assets
├── backend/                   # Express.js backend (if separate)
└── docs/                      # Documentation
```

## 🎯 Key Features Implementation

### Glassmorphism Design System
- Custom Tailwind utilities for glass effects
- Consistent blur and transparency values
- Bangladesh-inspired color palette
- Responsive breakpoints

### Authentication System
- Role-based access control (RBAC)
- JWT token management
- Secure password hashing
- Password reset functionality

### Dashboard Analytics
- Real-time charts and graphs
- Student performance tracking
- Attendance analytics
- Admission statistics

### Multi-language Support
- English and Bangla language support
- RTL text support for Bangla
- Localized date and number formats

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style
- ESLint configuration for consistent code style
- TypeScript for type safety
- Prettier for code formatting

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Other Platforms
- Netlify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by modern educational management systems
- Built for the Bangladeshi education sector
- Community feedback and contributions

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Email: support@collegebd.com
- Documentation: [docs.collegebd.com](https://docs.collegebd.com)

---

**Built with ❤️ for Bangladesh's educational future**
