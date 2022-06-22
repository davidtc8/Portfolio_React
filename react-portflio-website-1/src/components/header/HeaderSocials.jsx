import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaMediumM} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/david-tc/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/davidtc8" target="_blank"><FaGithub/></a>
        <a href="https://medium.com/@davidtorresc" target="_blank"><FaMediumM/></a>
    </div>
  )
}

export default HeaderSocials