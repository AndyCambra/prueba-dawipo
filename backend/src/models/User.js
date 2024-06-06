const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('User', {
    id : {
      type : DataTypes.UUID,
      primaryKey : true,
      defaultValue : DataTypes.UUIDV4,
    },
    name : {
      type: DataTypes.STRING,
      allowNull: false,
    },            
  },
  {freezeTableName : true, timestamps : false}
  );
};