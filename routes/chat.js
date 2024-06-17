const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const userMessage = req.body.message;
    const botReply = `You said: ${userMessage}`; // Simple echo response

    res.json({ reply: botReply });
});

module.exports = router;
