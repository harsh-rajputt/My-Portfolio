import express from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// Routes

import contactRoutes from "./route/contact.route.js";
import projectRoutes from './route/project.route.js';
import authRoutes from './route/auth.route.js';

app.use('/api/v1/contacts', contactRoutes);
app.use('/api/v1/projects', projectRoutes);
app.use('/api/v1/auth', authRoutes);


export default app;