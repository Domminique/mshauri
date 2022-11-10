import main from '../assets/images/svg-23.svg'
import appstore from '../assets/images/appstore.png'
import google from '../assets/images/googlestore.jpg'

import Wrapper from '../assets/wrappers/LandingPage'
import Logo from '../assets/images/emedlogo.png'
import { Link } from 'react-router-dom'
import InfoSection from '../components/InfoSection'
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from '../components/InfoSection/Data'
import { Footer, QandA } from '../components'

const Landing = () => {
  return (
    <>
      <Wrapper>
        <nav>
          {/* <img src={Logo} alt='Mshauri' className='img-logo ' />{' '} */}
          <span className='logo-text'>Mshauri</span>
        </nav>
        <div className='container page'>
          {/* info */}
          <div className='info'>
            <h1>
              M<span>shauri</span>
            </h1>
            <h2>Mentors Magemagment System</h2>
            <p>
              Simpler, more efficient and more effective way for project
              managers to find verified mentors they love and a smarter way for
              meentes to find fantastic mentors.
            </p>
            <Link to='/register' className='btn btn-hero'>
              Get Started
            </Link>
            <br></br>
            <br></br>
            <br></br>

            <p></p>
            <h4>Download Mshauri app today!</h4>
            <div className='store'>
              <img src={google} alt='Mshauri' className='img ' />
              <img src={appstore} alt='Mshauri' className='img' />
            </div>
          </div>
          <img src={main} alt='Mshauri' className='img main-img' />
        </div>
      </Wrapper>
      <InfoSection {...homeObjOne} />
      <QandA />
      <InfoSection {...homeObjTwo} />
    </>
  )
}

export default Landing
