import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Project } from './src/model/project.model.js';

dotenv.config();

const sampleProjects = [
    {
        title: 'YouTube Clone - Video Streaming Backend',
        description: 'Engineered production-grade backend API for video streaming platform with secure JWT authentication and bcrypt password hashing. Implemented file upload system with Multer and Cloudinary and mongoose aggregation pipelines.',
        imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
        technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary', 'Multer'],
        github: 'https://github.com/harsh-rajputt/YouTube',
        liveUrl: '#',
        featured: true,
        order: 1
    },
    {
        title: 'MegaBlog - Full-Stack Blogging Platform',
        description: 'Architected full-stack blog application with React.js and Appwrite backend enabling CRUD operations with Redux state management for 100+ users. Integrated TinyMCE rich text editor.',
        imageUrl: 'https://images.unsplash.com/photo-1499750310159-5418f31b1e56?w=600&h=400&fit=crop',
        technologies: ['React.js', 'Appwrite', 'Redux', 'TinyMCE'],
        github: 'https://github.com/harsh-rajputt/MegaBlog',
        liveUrl: 'https://mega-blog-murex-gamma.vercel.app',
        featured: true,
        order: 2
    },
    {
        title: 'Wanderlust - Travel Listing Platform',
        description: 'Developed full-stack web application enabling users to create, read, update, and delete travel listings. Architected RESTful API backend with Express.js and MongoDB.',
        imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop',
        technologies: ['MERN Stack', 'EJS', 'MongoDB', 'Express.js'],
        github: 'https://github.com/harsh-rajputt',
        liveUrl: '#',
        featured: true,
        order: 3
    }
];

const seedProjects = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");

        await Project.deleteMany({}); // Clear existing projects
        console.log("Cleared existing projects");

        await Project.insertMany(sampleProjects);
        console.log("Sample projects inserted successfully");

        process.exit();
    } catch (error) {
        console.error("Error seeding database:", error);
        process.exit(1);
    }
};

seedProjects();
