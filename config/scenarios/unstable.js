/*jshint node:true*/

module.exports = {
  scenarios: [{
    name: 'ember-beta',
    allowedToFail: true,
    bower: {
      dependencies: {
        'ember': 'components/ember#beta'
      },
      resolutions: {
        'ember': 'beta'
      }
    }
  }, {
    name: 'ember-canary',
    allowedToFail: true,
    bower: {
      dependencies: {
        'ember': 'components/ember#canary'
      },
      resolutions: {
        'ember': 'canary'
      }
    }
  }]
};
