import main from '../assets/images/svg-23.svg'
import appstore from '../assets/images/appstore.png'
import google from '../assets/images/googlestore.jpg'

import Wrapper from '../assets/wrappers/LandingPage'
import Logo  from '../assets/images/emedlogo.png'
import { Link } from 'react-router-dom'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import { Footer, QandA } from '../components';


const Landing = () => {
  return ( <>
    <Wrapper>
      <nav>
      <img src={Logo} alt='emedAfrica' className='img-logo ' />  <span className='logo-text'>EmedAfrica</span>
       
           
         
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            Emed<span>Africa</span>
          </h1>
          <p>
          Simpler, more efficient and more effective way for patients to find verified health service providers they love 
            and a smarter way for health service providers to find fantastic patients.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Get Started
          </Link>
          <br></br>
          <br></br>
          <br></br>
         
          <p></p>
          <h4>Download the EmedAfrica app today!</h4>
          <div className='store'>
          <img src={google} alt='emedAfrica' className='img ' />
          <img src={appstore} alt='emedAfrica' className='img' />
          </div>
         
        </div>
        <img src={main} alt='emedAfrica' className='img main-img' />
      </div>

      
    </Wrapper>
    <InfoSection {...homeObjOne} />
      <QandA />
      <InfoSection {...homeObjTwo} />

    </>
  )
}

export default Landing
