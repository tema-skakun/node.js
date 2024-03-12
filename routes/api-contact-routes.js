const express = require('express');
const { getContacts } = require('../controllers/api-contact-controller')

const router = express.Router();

// Get All Contacts
router.get('/api/contacts', getContacts);

module.exports = router;
