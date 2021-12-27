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
		host: process.env.DB_HOST || 'localhost',
		name: process.env.DB_NAME || 'findco',
		user: process.env.DB_USER || 'root',
		password: process.env.DB_PASS || 'not4you',
	},
    JWT_SECRET: process.env.JWT_SECRET || "not4you",
    JWT_EXPIRATION: process.env.JWT_EXPIRATION || "15m"
};
