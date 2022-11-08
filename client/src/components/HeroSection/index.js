import React, { useState } from 'react'
import Video from '../videos/VideoA.mp4'

import { Button } from '../ButtonElement'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          {' '}
          Providing total customer focused online listing and branding solutions
          to serve and satisfy clients.
        </HeroH1>
        <HeroP>
          Sign up for a new account and make more time for what you enjoy most,
          time is precious
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='/contactus'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
