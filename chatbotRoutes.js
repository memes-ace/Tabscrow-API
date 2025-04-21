const express = require('express');
const router = express.Router();

const { getChatbotResponse } = require('../services/chatbotService');

// Chatbot functionality
router.post('/query', async (req, res) => {
    const userQuery = req.body.query;
    try {
        const response = await getChatbotResponse(userQuery);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send('Error processing the request');
    }

});

module.exports = router;
