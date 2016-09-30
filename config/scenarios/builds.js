/*jshint node:true*/

module.exports = {
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
  }, {
    name: 'ember-release',
    bower: {
      dependencies: {
        'ember': 'components/ember#release'
      },
      resolutions: {
        'ember': 'release'
      }
    }
  }, {
    name: 'ember-beta',
    allowedToFail: true,
    command: 'ALLOW_DEPRECATIONS=true ember test',
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
    command: 'ALLOW_DEPRECATIONS=true ember test',
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
