// load env data
const { nexmoApiKey, nexmoApiSecret } = require('../config');

const Nexmo = require('nexmo');
const nexmo = new Nexmo({
    apiKey: nexmoApiKey,
    apiSecret: nexmoApiSecret,
});

module.exports = {
    sendNexmoMessage,
}

function sendNexmoMessage(sender, toNumber, messageText) {
        nexmo.message.sendSms(
            sender,
            toNumber,
            messageText,
            (err, responseData) => {
                if (responseData) {
                    console.log(responseData);
                    return responseData;
                }
                if (err) {
                    console.error(err);
                    return err; // we'll see how to monitor unsent or errorous sms later
                }

            }
        );
}
