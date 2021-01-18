// const mongoose = require("mongoose");
// mongoose.Promise = global.Promise; // Connecting to the database //

// mongoose
//   .connect("mongodb://localhost:27017/test_db", {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Successfully connected to the database");
//   })
//   .catch((err) => {
//     console.log(err);
//     console.log("Could not connect to the database. Exiting now...");
//     process.exit();
//   });

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'test',
  database : 'employee'
});

connection.connect((err)=>{
  if(err){
    console.log("err",err)
  }else{
    console.log("connected")
  }})

  connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });
   
  module.exports = connection;