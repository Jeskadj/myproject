const mongoose = require('mongoose')
// define the schema
const Schema = mongoose.Schema;
const UserModelSchema = new Schema({
  firstname: String,
  lastname:String,
  email:String,
  phone:String,
  password:String,
  address:String,
  id_type:String,
  id_num:String,
  vehicle_image:String,
  upload_image:String,

});

const UserModel = mongoose.model('UserModel',UserModelSchema);

module.exports = UserModel ;