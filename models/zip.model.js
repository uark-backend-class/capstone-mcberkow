// handle data storage here //

module.exports = (sequelize, Sequelize) => {
    return sequelize.define('zip', {
      id: {
        type: Sequelize.INTEGER,  
        primaryKey: true,
        autoIncrement: true,
      },
      zip_code: Sequelize.INTEGER,  // or string //
    }, { freezeTableName: true });
  }