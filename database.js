let mongoose = require('mongoose');

const server = 'pawan64:feelsgood64@ds263590.mlab.com:63590'; // REPLACE WITH YOUR DB SERVER
const database = 'user64';      // REPLACE WITH YOUR DB NAME

//this.url = 'mongodb://pawan64:feelsgood64@ds263590.mlab.com:63590/user64
module.exports  = class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect(`mongodb://${server}/${database}`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

