const express = require('express');
const router = express.Router();
const { addUserIP } = require('../database');

router.post('/add-ip', (req, res) => {
    const { ip } = req.body;
    if (addUserIP(ip)) {
        res.status(200).send('IP added successfully');
    } else {
        res.status(400).send('IP already exists');
    }
});

module.exports = router;
