/*jshint node:true*/

module.exports = {
  useVersionCompatibility: true,
  scenarios: [{
    name: 'default',
    command: 'COVERAGE=true ember test',
    bower: {
      dependencies: {}
    }
  }]
};
