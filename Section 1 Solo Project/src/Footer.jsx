import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <div className='container'>
        <div>
            {/*Im not linking my information or putting my picture */}
            <TwitterIcon/>
            <FacebookIcon/>
            <InstagramIcon/>
            <GitHubIcon/>
        </div>
    </div>
  )
}
