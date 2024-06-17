const users = {};

function addUserIP(ip) {
    if (users[ip]) return false;
    users[ip] = { chats: 0, lastReset: Date.now() };
    return true;
}

function getUserChats(ip) {
    const user = users[ip];
    if (!user) return null;

    // Reset chat count daily
    const now = Date.now();
    if (now - user.lastReset > 24 * 60 * 60 * 1000) {
        user.chats = 0;
        user.lastReset = now;
    }

    return user.chats;
}

function incrementUserChats(ip) {
    if (!users[ip]) return false;
    users[ip].chats += 1;
    return true;
}

module.exports = { addUserIP, getUserChats, incrementUserChats };
