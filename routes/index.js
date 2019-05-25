const express = require('express');
const bodyParser = require('body-parser');
const smsRoutes = require('./sms.routes');

module.exports = (app) => {
    /**
     * sms routes
     */
    const smsRouter = express.Router();
    smsRouter.use(bodyParser.urlencoded({extended: true}));
    smsRouter.use(bodyParser.json());

    smsRouter.post('/send', smsRoutes.sendMessagesBulk);
    app.use('/sms', smsRouter);
};
