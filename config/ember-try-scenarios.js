/*jshint node:true*/

module.exports = {
  useVersionCompatibility: true,
  scenarios: [{
    name: 'ember-lts-2.4',
    bower: {
      dependencies: {
        'ember': 'components/ember#lts-2-4'
      },
      resolutions: {
        'ember': 'lts-2-4'
      }
    }
  }]
};
