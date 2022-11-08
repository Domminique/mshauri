import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa'

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to='# '>How it works</FooterLink>
              <FooterLink to='# '>Testimonials</FooterLink>
              <FooterLink to='# '>Careers</FooterLink>
              <FooterLink to='/blogs'>Blog</FooterLink>
              <FooterLink to=' '>Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Contact Us</FooterLinkTitle>
              <FooterLink to='/contactus'>Contact</FooterLink>
              <FooterLink to='/contactus'>Support</FooterLink>
              <FooterLink to=' '>Destinations</FooterLink>
              <FooterLink to='/blogs'>Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Customers</FooterLinkTitle>
              <FooterLink to=' contactus'>Submit Video</FooterLink>
              <FooterLink to=' contactus'> Ambassadors</FooterLink>
              <FooterLink to=' '>Agency</FooterLink>
              <FooterLink to=' '>Influencer</FooterLink>
              <FooterLink to=' '>Reviews </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Business</FooterLinkTitle>
              <FooterLink to='/shops '>Shops</FooterLink>
              <FooterLink to='/services'>Services</FooterLink>
              <FooterLink to='/professionals'>Professionals</FooterLink>
              <FooterLink to='/addbusiness'>Add Business</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <p>EmedAfrica</p>

            <WebsiteRights>
              {' '}
              EmedAfrica {new Date().getFullYear()} All rights
              reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href='https://www.facebook.com/ongatarongaionline/'
                target='_blank '
                arial-label='Facebook'
              >
                {' '}
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank ' arial-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.youtube.com/channel/UC1-Ny_Vuh3dYsG63McDtHwg'
                target='_blank '
                arial-label='Youtube'
              >
                {' '}
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.twitter.com/ongatarongaionline/ '
                target='_blank '
                arial-label='Twitter'
              >
                {' '}
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.linkedin.com/company/ongata-rongai-online/'
                target='_blank '
                arial-label='LinkedIn'
              >
                {' '}
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
