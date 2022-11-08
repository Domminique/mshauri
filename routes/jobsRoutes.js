import express from 'express'
const router = express.Router()

import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStats,
  updateJobs,
  getAllProducts,
  updateAllProducts, 
 
} from '../controllers/jobsController.js'
import {
  // createJob,
  // deleteJob,
  // getAllJobs,
  // updateJob,
  // showStats,
  // updateJobs,
  // getAllProducts,
  // updateAllProducts,
  // getAllBookings
  
  getAllBookings, 
  createBooking
} from '../controllers/bookingsController.js'


import authenticateUser from '../middleware/auth.js'

router
.route('/')
.post(authenticateUser, createJob)
.get(authenticateUser, getAllJobs)
.patch(updateJobs)

router
.route('/all')
.get(getAllProducts)
.patch(updateAllProducts)


// remember about :id
router
.route('/stats')
.get(authenticateUser, showStats)

router
.route('/bookings')
.post(createBooking)
.get(getAllBookings)

router
.route('/:id')
.delete(authenticateUser, deleteJob)
.patch(authenticateUser, updateJob)

export default router
