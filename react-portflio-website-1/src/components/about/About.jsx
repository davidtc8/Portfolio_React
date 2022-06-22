import React from 'react'
import './about.css'
import ME from '../../assets/Malaysia.png'
import {FaAward} from 'react-icons/fa'
import {RiCodeBoxLine} from 'react-icons/ri'
import {BiGame} from 'react-icons/bi'

function About() {
  return (
    <section id='about'>
      <h5>A little bit of my life</h5>
      <h2>About me!</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>2+ Years Experience</small>
            </article>
            <article className='about_card'>
              <RiCodeBoxLine className='about_icon'/>
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
            <article className='about_card'>
              <BiGame className='about_icon'/>
              <h5>Fav Game</h5>
              <small>Starcraft 2</small>
            </article>
          </div>
          <p>
            Hi! I enjoy creating things that live on the internet. My interest is Python/JS Development.
            Back when took an MIT Course in Machine Learning, I loved and I learned its syntax by coding games - who would have 
            taught that creating random games would have taught me a lot about OOP.
            <br />
            <br />
            I've worked at medium and large companies, mainly in new developing teams. As someone who has IBD, 
            I'm proud to say that I have managed to thrive in multiple companies leading sucessful projects.
          </p>
          <a href="#contact" className='btn btn-primary'>Get in touch</a>
        </div>
      </div>
    </section>
  )
}

export default About