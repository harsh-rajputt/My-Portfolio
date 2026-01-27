
import { Router } from 'express';
import {
     createProject,
    getAllProjects,
    getFeaturedProjects,
    getSingleProject,
    updateProject,
    deleteProject
} from '../controller/project.controller.js';

const router = Router();

router.post('/create', createProject);
router.get('/all', getAllProjects);
router.get('/featured', getFeaturedProjects);
router.get('/projects/:id', getSingleProject);
router.put('/update/:id', updateProject);
router.delete('/delete/:id', deleteProject);

export default router;