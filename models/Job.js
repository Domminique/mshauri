import mongoose from 'mongoose'

const JobSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [false, 'Please provide name'],
      maxlength: 500,
    },
    availability: {
      type: String,
      required: [false, 'Please provide company'],
      maxlength: 500,
    },
    company: {
      type: String,
      required: [false, 'Please provide company'],
      maxlength: 500,
    },
    profession: {
      type: String,
      required: [false, 'Please provide profession'],
      maxlength: 500,
    },
    email: {
      type: String,
      required: [false, 'Please provide email'],
      maxlength: 500,
    },
    phonenumber: {
      type: String,
      required: [false, 'Please provide phonenumber'],
      maxlength: 50,
    },
    time: {
      type: String,
      required: [false, 'Please provide  time'],
      maxlength: 500,
    },
    date: {
      type: Date,
      required: [false, 'Please provide  date'],
      maxlength: 500,
    },
    price: {
      type: Number,
      required: [false, 'Please provide  price'],
      maxlength: 500,
    },
    status: {
      type: String,
      enum: [
        false,
        'registered',
        'unregistered',
        'pending',
        'help me regsiter',
      ],
      default: 'registered',
    },
    ApplicationStatus: {
      type: String,
      enum: [false, 'verified', 'pending'],
      default: 'pending',
    },
    // jobType: {
    //   type: String,
    //   enum: [false,'Professional', 'Service','Shop', 'Rider' ,'Gov','NGO'],
    //   default: 'Service',
    // },
    jobType: {
      type: String,
      enum: [false, 'Service', 'Doctor', 'Ambulance'],
      default: 'Service',
    },
    jobLocation: {
      type: String,
      default: 'mingles.erupted.puzzled',
      required: false,
    },
    description: {
      type: String,
      required: [false, 'Please provide product description'],
      maxlength: [1000, 'Description can not be more than 1000 characters'],
    },
    longitude: {
      type: Number,
      trim: true,
      maxlength: 300,
      default: 36.74296376960316,
    },
    latitude: {
      type: Number,
      trim: true,
      maxlength: 300,
      default: -1.3964161387444496,
    },
    location: {},
    image: {
      type: String,
      default: 'https://emedafrica.com/uploads/emedimage.png',
    },
    imageLogo: {
      type: String,
      default: '',
    },
    images: [],
    // category: {
    //   type: String,
    //   required: [false, 'Please provide product category'],
    //   enum: [
    //     'Medical Officer',
    //     'Nursing Homes',
    //     'Mental Health',
    //     'Birth Centers',
    //     'Hospice Care',
    //     'Nursing Home Care',
    //     'Primary Clinical',
    //     'Midwife Nurse',
    //     'Family Planning ',
    //     'Basic Lab',
    //     'Abortion Care ',
    //     'HIV/PREP/PEP',
    //     'Nutritionist',
    //     'GBV recovery',
    //     'Physiotherapy',
    //     'Doctor',
    //     'Physician',
    //     'Addiction Treatment',
    //     'Dialysis Facilities',
    //     'Imaging and Radiology ',
    //     'Orthopedic Rehabilitation',
    //     'Long-term Care',
    //     'Course & Training',
    //     'Security',
    //     'Appliance Repair',
    //     'Buiding & Trades',
    //     'Child Care',
    //     'DSTV Services',
    //     'Wedding Venues & Wedding',
    //     'Removal & Storage',
    //     'E-commerce',
    //     'Local Community Supermarkets',
    //     'Recruitment',
    //     'Electronics & IT',
    //     'Online Fitness',
    //     'Tutors & Education',
    //     'Landscaping & Gardening',
    //     'Automotive',
    //     'Tax and Financial',
    //     'Real Estate',
    //     'Photography & Video',
    //     'Travel Agents & Tours',
    //     'Cleaning',
    //     'Take Away',
    //     'Health & Beauty',
    //     'Party and Catering',
    //     'Appliance Repair',
    //     'Manufacturing',
    //     'Legal',
    //     'Kitchen',
    //     'Bedroom',
    //     'Data',
    //     'Apparel',
    //     'Healthcare',
    //     'Banking',
    //     'Clothing',
    //     'Computer Equipment',
    //     'Transport & Logistics',
    //     'Payments',
    //     'Food & Shopping',
    //     'Groceries',
    //     'Medicines',
    //     'Electronics',
    //     'DJ & entertainment',
    //     'Primary Physician',
    //     'Gynecologist',
    //     'Pediatric',
    //     'Dentist',
    //     'Physiotherapist',
    //     'Clinical Psychologist/ psychiatrist',
    //     'Dermatologist',
    //     'ENT',
    //     'Ophthalmologist',
    //   ],
    //   default: 'Online Fitness',
    // },

    category: {
      type: String,
      required: [false, 'Please provide product category'],
      enum: [
        'MEDICAL PHYSICIAN',
        'PRIMARY PHYSICIAN',
        'GYNAECOLOGIST',
        'PAEDRIATRICS',
        'DENTIST',
        'OPTHALMOLOY',
        'DERMATOLOGIST',
        'ENT DOCTOR',
        'PSYCHIATRIST',

        'NURSING CARE SERVICES',
        'CLINICAL SERVICES',
        'MIDWIFE SERVICES',
        'FAMILY PLANNING SERVICES',
        'BASICE LAB SERVICES',
        'ABORTION CARE SERVICES',
        'HIV/PREP/PEP SERVICES',
        'NUTRITIONIST SERVICES',
        'GBV RECOVERY SERVICES',
        'PHYSIOTHERAPIST SERVICES',
        'AMBULANCE SERVICES',
      ],
      default: 'MEDICAL PHYSICIAN',
    },

    sme: {
      type: String,
      required: [false, 'Please provide company'],
      enum: {
        values: [
          'ikea',
          'liddy',
          'adept advisory',
          'marcos',
          'giga bins africa',
          'haven beauty clinic',
          'saskia studios',
        ],
        message: '{VALUE} is not supported',
      },
    },
    colors: {
      type: [String],
      default: ['#222', '#f4511e', 'green'],
      required: false,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    freeShipping: {
      type: Boolean,
      default: true,
    },
    inventory: {
      type: Number,
      required: false,
      default: 15,
    },
    stock: {
      type: Number,
      required: false,
      default: 15,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    stars: {
      type: Number,
      default: 0,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true }
)

export default mongoose.model('Job', JobSchema)
