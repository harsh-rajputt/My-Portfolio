
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

router.post('/', createProject);
router.get('/', getAllProjects);
router.get('/featured', getFeaturedProjects);
router.get('/:id', getSingleProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

export default router;