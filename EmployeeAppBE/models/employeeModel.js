var mangoose = require('mongoose');

var schema = mangoose.Schema;

var employeeSchema = new schema({
    name: String,
    designation: String,
    salary: Number,
    joiningDate: Date,
    type: String,
})

var emp = mangoose.model('employee',employeeSchema);

module.exports = emp;