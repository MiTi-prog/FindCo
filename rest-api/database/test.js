/**
 * Module Dependencies
 */
const request = require('request');
const config = require('config');
const Sequelize = require('sequelize');

//var initModels = require("../app/models/MySQL_models/init-models");
//var models = initModels(sequelize);


//const User = Sequelize.Model;

// establish connection to mongodb
  var sequelize = new Sequelize(config.db.name, config.db.user, config.db.password, {
        host: config.db.host,
        dialect: 'mysql',
        port: 3306,
		logging: false,
		define: {
            paranoid: true,
			//timestamps: false #Sequilize is wierd, I have my own timestamp trigger and it wants his own
        }
  });
 
//Init models 
var initModels = require("../app/models/MySQL_models/init-models").initModels; 
var models = initModels(sequelize);

sequelize.authenticate()
    .then(() => {
        console.log("Connection to the DB was successful");
		
		//console.log(data.tables);
		
		//const UserM = models.application_user.findOne({ where: { first_name: "Test" }});
		//console.log(UserM);
		
    })
   .catch(err => {
        console.error('Unable to connect to the database:', err);
        process.exit(1);
    });
	
/*	
var test = models.application_user.build({
    first_name: "Roman",
    last_name: "Koman",
    email: "info@romun.si",
    password: "test",
    date_birth: "2021-01-01T23:00:00.000+00:00",
    phone: "031112779",
    street_address: "Jurckova 215",
    city: "Maribor",
    postal_code: "1200",
    country: "Slovenia",
    role: "admin"
});

test.save().catch(err => {console.error('Unable to connect to the database:', err);process.exit(1);});
*/

const User = models.application_user;
// Find all users
//const users = User.findAll();

//const users = User.findOne({ where: {email: 'info@test.test'}, raw: true });

//console.log(users);

const email = 'info@romun.si'
User.findOne({ where: { email:email }}).then(data => {
    console.log(data);
}).catch(err => {console.error(err);})

/*
User.findOne({ where: {email: 'info@test.test'} }).then(user => {
    console.log(user)
})
*/

//console.log(users.every(user => user instanceof User)); // true
//console.log("All users:", JSON.stringify(users, null, 2));

/*
models.application_user.findOne({ where: { first_name: "Test" }}).then((result)=>
{
	console.log(result);

}).catch((err)=>{
   console.log(err);
})
*/



/*
var test = User.Create(
{
    first_name: "Roman",
    last_name: "Koman",
    email: "info@romun.si",
    password: "test",
    date_birth: "2021-01-01T23:00:00.000+00:00",
    phone: "031112779",
    street_address: "Jurckova 215",
    city: "Maribor",
    postal_code: "1200",
    country: "Slovenia",
    role: "admin"
});
*/
/*	
var test = User.build({
    first_name: "Roman",
    last_name: "Koman",
    email: "info@romun.si",
    password: "test",
    date_birth: "2021-01-01T23:00:00.000+00:00",
    phone: "031112779",
    street_address: "Jurckova 215",
    city: "Maribor",
    postal_code: "1200",
    country: "Slovenia",
    role: "admin"
});

test.save();*/