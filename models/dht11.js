var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dht11Schema = new Schema({
    "humidity":{type: String},
    "temperature":{type: String}
});

module.exports = mongoose.model('Dht11', dht11Schema);