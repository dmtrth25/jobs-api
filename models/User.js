const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
      minLength: 6
   }
})

UserSchema.pre('save', async function() {
   const salt = await bcrypt.genSalt(10)
   this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createJWT = function() {
   return jwt.sign({userId: this._id, name: this.name}, 'jwtsecret', {
      expiresIn: '30d'
   })
}

module.exports = mongoose.model('User', UserSchema)