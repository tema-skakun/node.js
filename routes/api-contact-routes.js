import express from 'express';
import { getContacts } from '../controllers/api-contact-controller.js';

const router = express.Router();

// Get All Contacts
router.get('/api/contacts', getContacts);

export default router;
