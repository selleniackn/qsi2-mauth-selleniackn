const express = require('express');
const jwt = require('jwt-simple');
const { createGroup } = require('../controller/users');

Users.associate = models => {
    Users.hasOne(models.Groups, { foreignKey: 'owner_id', as: 'Owner' });
    Users.belongsToMany(models.Groups, { through: 'Member' });
  }; 