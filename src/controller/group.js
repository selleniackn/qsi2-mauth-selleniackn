const omit = require('lodash.omit');
const { Group } = require('../model');
const createGroup = ({ title, description, metadata }) =>
  Group.create({
    title,
    description: description || '',
    metadata
    
  }).then(user =>
    omit(
      user.get({
        plain: true
      }),
      Users.excludeAttributes
    )
  );

