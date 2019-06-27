// load env data
const { nexmoApiKey, nexmoApiSecret } = require('../config');

const Nexmo = require('nexmo');
const nexmo = new Nexmo({
    apiKey: nexmoApiKey,
    apiSecret: nexmoApiSecret,
});

module.exports = {
    sendNexmoMessage:sendNexmoMessage,
}

// https://developer.nexmo.com/api/sms#send-an-sms
async function sendNexmoMessage(smsOptions) {
    const {sender, toNumber, messageText, type} = {...smsOptions}
    return new Promise((resolve, reject) => {
        nexmo.message.sendSms(
            sender,
            toNumber,
            messageText,
            {type: type},
            (err, responseData) => { //TODO: handle callback
                if (responseData) {
                    console.log(responseData);
                    resolve(responseData);
                }
                if (err) {
                    console.error(err);
                    resolve(err); // we'll see how to monitor unsent or errorous sms later
                }
            }
        );
    });
}
