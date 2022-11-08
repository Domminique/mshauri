import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js'

const register = async (req, res) => {
  console.log(req.body)
  const { name, email, password, phonenumber, language } = req.body

  if (!name || !email || !password || !phonenumber) {
    throw new BadRequestError('please provide all values')
  }
  const userAlreadyExists = await User.findOne({ email })
  if (userAlreadyExists) {
    throw new BadRequestError('Email already in use')
  }

  // first registered user is an admin
  const isFirstAccount = (await User.countDocuments({})) === 2
  const role = isFirstAccount ? 'admin' : 'user'

  const user = await User.create({
    name,
    email,
    password,
    phonenumber,
    language,
    role,
  })

  const token = user.createJWT()
  res.status(StatusCodes.CREATED).json({
    user: {
      phonenumber: user.phonenumber,
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      language: user.language,
      name: user.name,
    },
    token,
    location: user.location,
    language: user.language,
  })
}
const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new BadRequestError('Please provide all values')
  }
  const user = await User.findOne({ email }).select('+password')
  if (!user) {
    throw new UnAuthenticatedError('Invalid Credentials')
  }

  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError('Invalid Credentials')
  }
  const token = user.createJWT()
  user.password = undefined
  res.status(StatusCodes.OK).json({ user, token, location: user.location })
}
const updateUser = async (req, res) => {
  console.log(req.body)
  const { email, name, lastName, location, phonenumber } = req.body
  if (!email || !name || !lastName) {
    throw new BadRequestError('Please provide all values')
  }
  const user = await User.findOne({ _id: req.user.userId })

  user.email = email
  user.name = name
  user.lastName = lastName
  // user.location = location
  user.phonenumber = phonenumber

  await user.save()

  const token = user.createJWT()

  res.status(StatusCodes.OK).json({ user, token })
}

export { register, login, updateUser }
