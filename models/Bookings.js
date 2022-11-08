import mongoose from 'mongoose'

const BookingSchema = new mongoose.Schema(
  {
    job: {},
    user: {},
    customerName: {
      type: String,
      required: [false, 'Please provide name'],
      maxlength: 500,
    },
    email: {
      type: String,
      required: [false, 'Please provide email'],
      maxlength: 500,
    },
    location: {},

    phonenumber: {
      type: String,
      required: [false, 'Please provide phonenumber'],
      maxlength: 50,
    },
    description: {
      type: String,
      required: [false, 'Please provide product description'],
      maxlength: [1000, 'Description can not be more than 1000 characters'],
    },
    date: {
      type: String,
      required: [false, 'Please provide  date'],
      maxlength: 500,
    },
    time: {
      type: String,
      required: [false, 'Please provide  date'],
      maxlength: 500,
    },
    jobId: {
      type: String,
      required: [false, 'Please provide  date'],
    },
    serviceProviderID: {
      type: String,
      required: [false, 'Please provide  date'],
    },
    userId: {
      type: String,
      required: [false, 'Please provide  date'],
    },
    serviceProviderId: {
      type: String,
      required: [false, 'Please provide  date'],
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    stars: {
      type: Number,
      default: 0,
    },

    patientId: {
      type: String,
      required: [false, 'Please provide  date'],
    },
    description: {
      type: String,
      required: [false, 'Please provide  date'],
    },
    patientLocation: {
      type: String,
      required: [false, 'Please provide  date'],
    },
    patientName: {
      type: String,
      required: [false, 'Please provide  date'],
    },
    patientPhonenumber: {
      type: String,
      required: [false, 'Please provide  date'],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [false, 'Please provide user'],
    },
  },
  { timestamps: true }
)


export default mongoose.model('Booking', BookingSchema)
