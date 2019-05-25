const smsService = require('../services/sms.service');
// const config = require('../config');

module.exports = {
    sendMessagesBulk,
};


function sendMessagesBulk(req, res) {
    // Send SMS
    const params = req.body;
    if (!params.toNumbers) return res.sendStatus(500);
    if (!params.message) return res.sendStatus(500);

    const actions = params.toNumbers.map(sendSingleSms); // run the function over all items

    Promise.all(actions)
        .then((results) => res.send(results));

    function sendSingleSms(number){
        return smsService.sendNexmoMessage(params.from, number, params.message);
    }
};
