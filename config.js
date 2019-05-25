const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    endpoint: process.env.NEXMO_URI,
    nexmoApiKey: process.env.NEXMO_API_KEY,
    nexmoApiSecret: process.env.NEXMO_API_SECRET,
    port: process.env.PORT
};
