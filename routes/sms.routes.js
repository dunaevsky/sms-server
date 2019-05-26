const smsService = require('../services/sms.service');

module.exports = {
    sendMessagesBulk,
};

async function sendMessagesBulk(req, res) {
    // Send SMS
    const params = req.body;
    if (!params.toNumbers) return res.sendStatus(500);
    if (!params.message) return res.sendStatus(500);

    const smsOptions = {
        sender: params.from,
        messageText: params.message,
        type: params.unicode ? 'unicode' : 'text',
    };

    if (typeof params.toNumbers === "string") {
        const singleSms = await sendSingleSms(params.toNumbers, smsOptions);
        return res.send(singleSms);
    }

    const actions = params.toNumbers.map(async toNumber => await sendSingleSms(toNumber, smsOptions)); // run the function over all items
    const results = await Promise.all(actions);

    res.send(results);

    async function sendSingleSms(number, options) {
        options['toNumber'] = number;

        return await smsService.sendNexmoMessage(options);
    }
};
