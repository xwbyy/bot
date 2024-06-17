const { getUserChats, incrementUserChats } = require('./database');

module.exports = (req, res, next) => {
    const userIP = req.ip;

    if (!getUserChats(userIP)) {
        res.status(403).send('You need admin approval to chat.');
        return;
    }

    if (getUserChats(userIP) >= 10) {
        res.status(403).send('Chat limit reached for today.');
        return;
    }

    incrementUserChats(userIP);
    next();
};
