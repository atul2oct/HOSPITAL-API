const mongoose = require('mongoose');

const DoctorSchema = mongoose.Schema({
    //name of the doctor
    name: {
        type: String,
        required: [true,"Please Enter Dr Name"]
    },

    //email id of the doctor
    email: {
        type: String,
        unique: true,
        required: true
    },

    //password for the doctor's account
    password: {
        type: String,
        required: [true,"Please Enter Your Password"],
    }
}, {
    timestamps: true
});

const Doctor = mongoose.model('Doctor', DoctorSchema); //modelling the schema
module.exports = Doctor;