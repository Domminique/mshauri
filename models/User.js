import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: ['Please provide name'],
    minlength: 3,
    maxlength: 50,
    trim: true,
  },
  phonenumber: {
    type: String,
    required: [true, 'Please provide phonenumber'],
    minlength: 3,
    maxlength: 14,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email',
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
    select: false,
  },
  lastName: {
    type: String,
    trim: false,
    maxlength: 50,
    default: 'Female',
  },
  language: {
    type: String,
    trim: false,
    maxlength: 70,
    default: 'English',
  },

  location: {},
  longitude: {
    type: Number,
    trim: true,
    maxlength: 300,
    // default: 36.74296376960316,
  },
  latitude: {
    type: Number,
    trim: true,
    maxlength: 300,
    // default: -1.3964161387444496,
  },
  role: {
    type: String,
    enum: [false, 'admin', 'user'],
    default: 'user',
  },
  plan: {
    type: String,
    enum: [false, 'bora', 'nzuri', 'rahisi', 'admin', 'free'],
    default: 'free',
  },
  // language: {
  //   type: String,
  //   enum: [
  //     false,
  //     'Swahili',
  //     'Amharic',
  //     'Arabic',
  //     'French',
  //     'Portuguese',
  //     'English',
  //   ],
  //   default: 'Swahili',
  // },

  admin: {
    type: Boolean,
    default: false,
  },
})

UserSchema.pre('save', async function () {
  // console.log(this.modifiedPaths())
  if (!this.isModified('password')) return
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  })
}

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password)
  return isMatch
}

export default mongoose.model('User', UserSchema)
