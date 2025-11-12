#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 College Management System - Auto Deployment Script');
console.log('====================================================');

// Check if we're in the right directory
if (!fs.existsSync('package.json')) {
    console.error('❌ Error: package.json not found. Please run this script from the project root.');
    process.exit(1);
}

// Function to run commands safely
function runCommand(command, description) {
    try {
        console.log(`\n📋 ${description}...`);
        console.log(`💻 Running: ${command}`);
        const output = execSync(command, { 
            stdio: 'inherit', 
            cwd: process.cwd(),
            encoding: 'utf8'
        });
        console.log(`✅ ${description} completed successfully!`);
        return true;
    } catch (error) {
        console.error(`❌ Error during ${description}:`);
        console.error(error.message);
        return false;
    }
}

// Function to create environment file for production
function createProductionEnv() {
    const crypto = require('crypto');
    
    const envContent = `# Production Environment Variables
JWT_SECRET=${crypto.randomBytes(32).toString('hex')}
NEXTAUTH_SECRET=${crypto.randomBytes(32).toString('hex')}
NEXTAUTH_URL=https://your-app-name.vercel.app
NEXT_PUBLIC_API_URL=https://your-app-name.vercel.app/api
`;

    fs.writeFileSync('.env.production', envContent);
    console.log('✅ Production environment file created!');
}

async function main() {
    console.log('\n🔍 Pre-deployment checks...');
    
    // Check Node.js version
    const nodeVersion = process.version;
    console.log(`📦 Node.js version: ${nodeVersion}`);
    
    // Install dependencies if needed
    if (!fs.existsSync('node_modules')) {
        if (!runCommand('npm install', 'Installing dependencies')) {
            process.exit(1);
        }
    } else {
        console.log('✅ Dependencies already installed');
    }
    
    // Create production environment
    createProductionEnv();
    
    // Build the project
    if (!runCommand('npm run build', 'Building project for production')) {
        console.log('\n⚠️  Build failed. Trying to fix common issues...');
        
        // Try to fix build issues
        runCommand('npm install --legacy-peer-deps', 'Fixing dependency conflicts');
        
        if (!runCommand('npm run build', 'Retrying build')) {
            console.error('\n❌ Build failed. Please check the errors above.');
            process.exit(1);
        }
    }
    
    // Initialize git if not already done
    if (!fs.existsSync('.git')) {
        runCommand('git init', 'Initializing Git repository');
        runCommand('git add .', 'Adding files to Git');
        runCommand('git commit -m "Initial commit: College Management System"', 'Creating initial commit');
    }
    
    console.log('\n🎉 Pre-deployment completed successfully!');
    console.log('\n📋 Next Steps (Manual):');
    console.log('1. 🌐 Go to https://vercel.com and sign up/login');
    console.log('2. 📁 Click "New Project"');
    console.log('3. 📤 Drag and drop this entire folder to Vercel');
    console.log('4. ⚙️  Set environment variables from .env.production file');
    console.log('5. 🚀 Click Deploy!');
    
    console.log('\n🔗 Alternative - GitHub + Vercel:');
    console.log('1. 📂 Create new repository on GitHub');
    console.log('2. 💻 Run: git remote add origin https://github.com/yourusername/college-management-bd.git');
    console.log('3. 📤 Run: git push -u origin main');
    console.log('4. 🔗 Connect Vercel to your GitHub repository');
    
    console.log('\n📱 Demo Credentials for testing:');
    console.log('   Admin: admin@collegebd.com / admin123');
    console.log('   Teacher: teacher@collegebd.com / teacher123');
    console.log('   Student: student@collegebd.com / student123');
    
    console.log('\n✨ Your College Management System is ready for deployment!');
}

main().catch(console.error);
