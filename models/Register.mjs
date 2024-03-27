import mongoose from 'mongoose';

const RegisterSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const RegisterModel = mongoose.model('register', RegisterSchema);
export default RegisterModel;
//----------------------------------------------END CODE---------------------------------------------//

//This is code for an experiment that did not work//