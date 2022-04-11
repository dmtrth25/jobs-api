const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
   name: {
      type: String,
      required: [true, 'Provide your name'],
      minLength: 4,
      maxLength: 20
   },
   email: {
      type: String,
      required: [true, 'Provide your email'],
      match: [
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
         'Provide valid email'
      ],
      unique: true
   },
   password: {
      type: String,
      required: [true, 'Provide your password'],
      minLength: 6,
      maxLength: 12
   }
})

module.exports = mongoose.model('User', UserSchema)