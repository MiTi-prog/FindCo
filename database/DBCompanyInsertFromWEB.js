/**
 * Module Dependencies
 */
const request = require('request');
const config = require('config');
const mongoose = require('mongoose');

//const User = require('../app/models/Application_user');
const Company = require('../app/models/Company');

// establish connection to mongodb
mongoose.Promise = global.Promise;
mongoose.connect(config.db.uri);
const db = mongoose.connection;
db.on('error', (err) => {
    console.log(`Sorry connection to DB: ${config.db.uri} failed`);
	console.error('Reason that DB Failed is: ${err}');
	process.exit(1);
});
db.once('open', () => {
    console.log(`DB is connected to: ${config.db.uri}`);
	
	//Request data from API
	var url = 'http://slo-podjetja-api.eu/api?search=';
	request(url, 
		{ json: true, "rejectUnauthorized": false },
		(err, res, data) => {
			if (err) { return console.log(err); }
			
			else if (res.statusCode !== 200) {
				console.log('Status:', res.statusCode);
			}
		else {
			
			//We have data so we save it into DB
			
			let dupcmp = "";
			let duptax = "";
			for (var i = 0; i < data.length; i++) {	
				
				const podjetje = new Company({
						"company_name": data[i].kratko_ime, 
						"tax_number": data[i].davčna_številkasi,
						"email": data[i].email,
						"phone": data[i].tel.replace(/\s/g, ''),
						"street_address": data[i].naslov,
						"city": data[i].naselje,
						"country": "Slovenia",
						"postal_code": data[i].pošta.split(" ")[0]
					});
					if (dupcmp !== data[i].kratko_ime)
					{
						dupcmp = data[i].kratko_ime
						podjetje.save();
					}
					else if (duptax !== data[i].davčna_številkasi)
					{
						duptax = data[i].davčna_številkasi;
						podjetje.save();
					}
					else
					{
						console.log(data[i].kratko_ime + " -- SKIPPED");
						continue;
					}
				//try {
					//podjetje.save();
					console.log(data[i].kratko_ime + " -- Dodano");
				//} catch (err) {
					//console.log(data[i].kratko_ime + " -- SKIPPED: \n" + err.message);
				//}
			}
			console.log("Podatki so uspešno dodani v bazo");
			//process.exit(0);	
		}
	});
});