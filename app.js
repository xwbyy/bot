const express = require('express');
const bodyParser = require('body-parser');
const chatRoute = require('./routes/chat');
const adminRoute = require('./routes/admin');
const chatLimitMiddleware = require('./chatLimitMiddleware');

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/chat', chatLimitMiddleware, chatRoute);
app.use('/admin', adminRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
