const DataEngine = require('../engine/entry');
const ErrorsEngine  = require('../engine/errors');

module.exports = (app) => {

  const dataPath = '/data';

  app.get(dataPath, DataEngine.getEntry);
  app.get(`${dataPath}/:id`, DataEngine.getEntryById);
}