const mongoose = require("mongoose");
var colors = require('colors');

const dbConnection = async() =>{
  try {
    let conn = await mongoose.connect('mongodb+srv://arslan:arsl1234@crud.izdbdth.mongodb.net/')
    console.log(`Database connected on ${conn.connection.host} host..!`.bgYellow.red)
  } catch (error) {
      console.log(`Error in connection ${error}`)
  }
}
module.exports = dbConnection;