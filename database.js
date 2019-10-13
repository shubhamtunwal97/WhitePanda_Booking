let mongoose = require('mongoose');

//const server = 'mongodb+srv://admin:admin123@cluster0-dwjis.mongodb.net/test?retryWrites=true&w=majority'; // REPLACE WITH YOUR DB SERVER
const database = 'test';      // REPLACE WITH YOUR DB NAME
const server = 'mongodb+srv://admin:admin123@cluster0-dwjis.mongodb.net'; // REPLACE WITH YOUR DB SERVER

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

