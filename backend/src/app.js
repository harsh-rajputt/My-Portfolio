import express from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// Routes

import contactRoutes from "./route/contact.route.js";
import projectRoutes from './route/project.route.js';

app.use('/api/v1/contacts', contactRoutes);
app.use('/api/v1/projects', projectRoutes);


export default app;