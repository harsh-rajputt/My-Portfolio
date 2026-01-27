
import { Router } from 'express';
import {
    createContactMessage,
    getAllContactMessages,
    updateContactMessageStatus
} from '../controller/contact.controller.js';


const router = Router();

router.post('/create', createContactMessage);
router.get('/all', getAllContactMessages);
router.patch('/:id/status', updateContactMessageStatus);

export default router;