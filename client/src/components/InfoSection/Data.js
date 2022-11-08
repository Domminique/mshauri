import img1 from '../images/patient.svg'
import img2 from '../images/serviceprovider.svg'

import img3 from '../images/svg-11.svg'

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'For health care  service providers',
  headline: 'Aiming to bridge the gab between hospital care and treatment, home based and ambulance tranfer.',
  description:
    'We empower service providers with cutting edge technologies that help them  manage bookings, maximize their reach, minimize cost as they provide wholistic emergency and convinient care to clients per their health needs anywhere anytime! ',
  buttonLabel: 'Join as a service provider',
  imgStart: false,
  img: img1,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false,
}

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Advancing access to healthcare services for Patients',
  headline: 'Get the best health services, insurance, dental, inpatient and more, ',
  description:
    'Transforming the delivery of health services to patients by connecting them directly to doctors, helping them avoid unnecessary referrals and reduces costs for them while improving efficiency and bettering their care ',
  buttonLabel: 'Join as a patient',
  imgStart: true,
  img: img2,
  alt: 'API integration',
  dark: false,
  primary: false,
  darkText: true,
}

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Shop on their behalf,',
  headline: 'On-demand delivery to the mass market ',
  description:
    'Time is a precious commodity for today’s consumer ,help people make more time for what they enjoy most.',
  buttonLabel: 'Start Now',
  imgStart: false,
  img: img3,
  alt: 'Shop on your behalf',
  dark: false,
  primary: false,
  darkText: true,
}
