var configValues = require('./config');

module.exports = {
  getDbConnectionString: (dev) => {
    //dev or prod environment
    return `mongodb://${configValues.username}:${configValues.password}@ds123933.mlab.com:23933/your-flat-is`;
  }
};