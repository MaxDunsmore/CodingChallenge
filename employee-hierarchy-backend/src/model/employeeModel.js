import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const employeeSchema = new Schema({
  //assuming employee id is always unique
  id: { type: Number, required: true, unique: true }, 
  name: { type: String, required: true },
  // Normally world separate mangerId into separate modal to reduce redundant data and allow
  // further fields such as 'title', 'level' but need more information on to store this
  managerId: { type: Number, default: null },
});

const Employee = model('Employee', employeeSchema);
export default Employee;


