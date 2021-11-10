const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    app: {
      name: 'FindCO',
      version: '0.0.1'
    },
    server: {
      port: process.env.API_PORT || 8080
    },
	db: {
		uri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/api',
	},
};