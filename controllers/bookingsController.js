import Job from '../models/Job.js'
import Booking from '../models/Bookings.js'
import { StatusCodes } from 'http-status-codes'
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from '../errors/index.js'
import checkPermissions from '../utils/checkPermissions.js'
import mongoose from 'mongoose'
import moment from 'moment'

const createBooking = async (req, res) => {
  console.log('req body', req.body)

  // const { customerName, date, email, description, phonenumber } = req.body

  // if (!date || !descriptiona) {
  //   throw new BadRequestError('Please provide all values')
  // }

  // req.body.createdBy = req.user.userId ....if for , if user is available and job ID

  //   const { id: jobId } = req.params

  //   const job = await Job.findOne({ _id: jobId })

  //   if (!job) {
  //     throw new NotFoundError(`No job with id :${jobId}`)
  //   }
  //   if (!job) {
  //     throw new NotFoundError(`No job with id :${jobId}`)
  //   }

  //const booking = await Booking.create({ _id: jobId }, req.body)

  const booking = await Booking.create(req.body)
  res.status(StatusCodes.CREATED).json({ booking })
}

// const getAllProducts = async (req, res) => {
//   const products = await Job.find({});

//   res.status(StatusCodes.OK).json({ products, count: products.length });
// };

const getAllBookings = async (req, res) => {
  const { status, jobType, sort, search } = req.query

  // add stuff based on condition

  //   if (status && status !== 'all') {
  //     status = status
  //   }
  //   if (jobType && jobType !== 'all') {
  //     jobType = jobType
  //   }
  //   if (search) {
  //     position = { $regex: search, $options: 'i' }
  //   }
  // NO AWAIT

  let result = Booking.find({})

  // chain sort conditions

  if (sort === 'latest') {
    result = result.sort('-createdAt')
  }
  if (sort === 'oldest') {
    result = result.sort('createdAt')
  }
  if (sort === 'a-z') {
    result = result.sort('position')
  }
  if (sort === 'z-a') {
    result = result.sort('-position')
  }

  //

  // setup pagination
  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 10
  const skip = (page - 1) * limit

  result = result.skip(skip).limit(limit)

  const bookings = await result

  const totalBookings = await Booking.countDocuments({})
  const numOfPages = Math.ceil(totalBookings / limit)

  res.status(StatusCodes.OK).json({ bookings, totalBookings, numOfPages })
}

const getAllJobs = async (req, res) => {
  const { status, jobType, sort, search } = req.query

  const queryObject = {
    createdBy: req.user.userId,
  }
  // add stuff based on condition

  if (status && status !== 'all') {
    queryObject.status = status
  }
  if (jobType && jobType !== 'all') {
    queryObject.jobType = jobType
  }
  if (search) {
    queryObject.position = { $regex: search, $options: 'i' }
  }
  // NO AWAIT

  let result = Job.find(queryObject)

  // chain sort conditions

  if (sort === 'latest') {
    result = result.sort('-createdAt')
  }
  if (sort === 'oldest') {
    result = result.sort('createdAt')
  }
  if (sort === 'a-z') {
    result = result.sort('position')
  }
  if (sort === 'z-a') {
    result = result.sort('-position')
  }

  //

  // setup pagination
  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 10
  const skip = (page - 1) * limit

  result = result.skip(skip).limit(limit)

  const jobs = await result

  const totalJobs = await Job.countDocuments(queryObject)
  const numOfPages = Math.ceil(totalJobs / limit)

  res.status(StatusCodes.OK).json({ jobs, totalJobs, numOfPages })
}

const updateAllProducts = async (req, res) => {
  console.log(req.body, res.body)

  const { id: jobId } = req.params
  const { email, date, phonenumber } = req.body

  //name: '',
  // email: '',
  // date: new Date(),
  // time: '',
  // payment: '',
  // description: '',
  // phonenumber: '',
  // startDate:'',
  // if (!email||!date||!phonenumber ) {

  //   throw new BadRequestError('Please provide all values')
  // }

  const job = await Job.findOne({ _id: jobId })

  if (!job) {
    throw new NotFoundError(`No job with id :${jobId}`)
  }
  // check permissions

  // checkPermissions(req.user, job.createdBy)

  const updatedJob = await Job.findOneAndUpdate({ _id: jobId }, req.body, {
    new: true,
    runValidators: true,
  })

  res.status(StatusCodes.OK).json({ updatedJob })
}
const updateJobs = async (req, res) => {
  const { id: jobId } = req.params
  const { company, position } = req.body

  if (!position || !company) {
    throw new BadRequestError('Please provide all values')
  }
  const job = await Job.findOne({ _id: jobId })

  if (!job) {
    throw new NotFoundError(`No job with id :${jobId}`)
  }
  // check permissions

  checkPermissions(req.user, job.createdBy)

  const updatedJob = await Job.findOneAndUpdate({ _id: jobId }, req.body, {
    new: true,
    runValidators: true,
  })

  res.status(StatusCodes.OK).json({ updatedJob })
}

const updateJob = async (req, res) => {
  const { id: jobId } = req.params
  const { company, position } = req.body

  if (!position || !company) {
    throw new BadRequestError('Please provide all values')
  }
  const job = await Job.findOne({ _id: jobId })

  if (!job) {
    throw new NotFoundError(`No job with id :${jobId}`)
  }
  // check permissions

  checkPermissions(req.user, job.createdBy)

  const updatedJob = await Job.findOneAndUpdate({ _id: jobId }, req.body, {
    new: true,
    runValidators: true,
  })

  res.status(StatusCodes.OK).json({ updatedJob })
}
const deleteJob = async (req, res) => {
  const { id: jobId } = req.params

  const job = await Job.findOne({ _id: jobId })

  if (!job) {
    throw new NotFoundError(`No job with id :${jobId}`)
  }

  checkPermissions(req.user, job.createdBy)

  await job.remove()

  res.status(StatusCodes.OK).json({ msg: 'Success! Job removed' })
}

const showStats = async (req, res) => {
  let stats = await Job.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: '$status', count: { $sum: 1 } } },
  ])
  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr
    acc[title] = count
    return acc
  }, {})

  const defaultStats = {
    pending: stats.pending || 0,
    fullfilled: stats.fullfilled || 0,
    declined: stats.declined || 0,
    verified: stats.verified || 0,
  }

  let monthlyApplications = await Job.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
        count: { $sum: 1 },
      },
    },
    { $sort: { '_id.year': -1, '_id.month': -1 } },
    { $limit: 6 },
  ])
  monthlyApplications = monthlyApplications
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item
      const date = moment()
        .month(month - 1)
        .year(year)
        .format('MMM Y')
      return { date, count }
    })
    .reverse()

  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications })
}

export {
  createBooking,
  deleteJob,
  getAllBookings,
  getAllJobs,
  updateJob,
  showStats,
  updateJobs,
  updateAllProducts,
}
