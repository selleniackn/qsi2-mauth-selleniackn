const bcrypt = require('bcrypt'); // https://github.com/kelektiv/node.bcrypt.js

module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define(
    'Group',
    {
      title: {
        // Avoid usage of auto-increment numbers, UUID is a better choice
        type: DataTypes.STRING,
        comment: 'group title',
        primaryKey: true,
        
      },
      description: {
        type: DataTypes.STRING,
        comment: 'group description',
        // setter to standardize
        set(val) {
          this.setDataValue(
            'description',
            val.charAt(0).toUpperCase() + val.substring(1).toLowerCase()
          );
        }
      },
      
 