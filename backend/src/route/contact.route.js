
import { Router } from 'express';
import {
    createContactMessage,
    getAllContactMessages,
    updateContactMessageStatus
} from '../controller/contact.controller.js';


const router = Router();

router.post('/', createContactMessage);
router.get('/', getAllContactMessages);
router.patch('/:id/status', updateContactMessageStatus);

export default router;