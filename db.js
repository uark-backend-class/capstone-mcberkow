// contains database initialization / migration //

const Sequelize = require('sequelize').Sequelize;
const ZipModel = require('./models/zip.model');

const sequelize = new Sequelize(process.env.DATABASE_CONNECTION);
  

// Create our models //
const Zip = ZipModel(sequelize, Sequelize);

// Create our tables using sync force: true will destroy previous tables and start over
// sequelize.sync({force: true}).then(() => console.log("database created."));

sequelize.sync().then(() => {
  console.log("database created");
});

// Export our models //
module.exports = {
  Zip
}

/*

Notes

views is the location of any templates rendered by the application

const Sequelize = require('sequelize').Sequelize;
const CityModel = require('./models/city.model');

const sequelize = new Sequelize('postgres://classroom:classroom@localhost:32770/classroom');

// Create our models
const City = CityModel(sequelize, Sequelize);

// Create our tables using sync
sequelize.sync({force: true}).then(() => console.log("Tables are created."));

// Export our models
module.exports = {
  City
}

*/