// const MongoClient = require( 'mongodb' ).MongoClient;
// const config = require('../config');
// // const client = new MongoClient( config.db.connectionString, { useNewUrlParser: true });
// const uri  = config.db.connectionString;
// var _db;

// const connectDB = async (callback) => {
//      try {

//         MongoClient.connect(uri, function(err, client) {
//             assert.equal(null, err);
//             console.log("Connected successfully to server");
          
//             _db = client.db('Employee');
          
//             return _db;
//           });
//      } catch (e) {
//          throw e
//      }
// }

//  const getDB = () => _db

//  const disconnectDB = () => _db.close()

//  module.exports = { connectDB, getDB, disconnectDB }