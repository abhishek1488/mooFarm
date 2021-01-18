var mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const Schema = mongoose.Schema;

const employeeDetail = new Schema({
  name: String,
  address: String,
  departMent: String,
  DOB:Date,
  mobile:String,
});

employeeDetail.plugin(timestamps);

module.exports = mongoose.model("employeeDetail", employeeDetail);
