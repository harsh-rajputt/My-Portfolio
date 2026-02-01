
import { Router } from 'express';
import {
    createProject,
    getAllProjects,
    getFeaturedProjects,
    getSingleProject,
    updateProject,
    deleteProject
} from '../controller/project.controller.js';


import { verifyJWT, verifyAdmin } from '../middleware/auth.middleware.js';

const router = Router();

// Public routes
router.get('/all', getAllProjects);
router.get('/featured', getFeaturedProjects);
router.get('/projects/:id', getSingleProject);

// Protected routes (Admin only)
router.post('/create', verifyJWT, verifyAdmin, createProject);
router.put('/update/:id', verifyJWT, verifyAdmin, updateProject);
router.delete('/delete/:id', verifyJWT, verifyAdmin, deleteProject);

export default router;