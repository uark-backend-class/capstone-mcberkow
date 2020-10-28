// handle data storage here //

module.exports = (sequelize, Sequelize) => {
    return sequelize.define('zip', {
      id: {
        type: Sequelize.INTEGER,  
        primaryKey: true,
        autoIncrement: true,
      },
      zip: Sequelize.STRING,  // or string //
    }, { freezeTableName: true });
  }