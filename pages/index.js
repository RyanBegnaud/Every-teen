import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Images from 'public/images/ColorBKG-Logo.jpg'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <div className='top-header'>
        <div className='top-header-items'>
          <p>EN ESPANOL</p>
          <p>CALENDER</p>
          <p>ABOUT</p>
          <p>DONATE</p>
        </div>
      </div>
      <div className='bottom-header-top-container'>
        <div className='bottom-header-container'>
          <div className="bottom-header-logo-container">
            <img className='bottom-header-logo' src='images/ColorBKG-Logo.jpg'></img>
          </div>
          <div className='bottom-header-items-container'>
            <div className='bottom-header-items'>
              <p>THE GOSPEL</p>
              <p>GET CONNECTED</p>
              <p>QUESTIONS</p>
              <p>NEED PRAYER?</p>
              <p>CONTACT US</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='banner-container'>
          <div className='banner'>
            <img className='banner-image-left' src='/images/worship.jpeg'></img>
            <img className='banner-image-right' src='/images/worship.jpeg'></img>
            <div className='banner-text'>
              Jesus loves you and wants to have a
              personal relationship with you!
            </div>
          </div>
        </div>
        <div className='gospel-container'>
          <div className='gospel-head-container'>
            <div className='gospel-head'>
              <p>WHAT IS THE GOSPEL?</p>
            </div>
          </div>
          <div className='gospel-info-container'>
            <div className='gospel-info'>
              <p><span className='gospel-cap'>G</span><span className='gospel-bold'>OD</span> created us to be with Him.</p>
              <p><span className='gospel-cap'>O</span><span className='gospel-bold'>UR</span> sins seperate us from God.</p>
              <p><span className='gospel-cap'>S</span><span className='gospel-bold'>INS</span> cannot be removed by good deeds.</p>
              <p><span className='gospel-cap'>P</span><span className='gospel-bold'>AYING</span> the price for sin, Jesus died and rose again.</p>
              <p><span className='gospel-cap'>E</span><span className='gospel-bold'>VERYONE</span> who trusts in Him alone has eternal life.</p>
              <p><span className='gospel-cap'>L</span><span className='gospel-bold'>IFE</span> with Jesus starts now and lasts forever.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mission-container'>
        <p className='mission-text'>Our Mission is for Every Teen in the Coachella Valley to hear the gospel from a friend.</p>
      </div>

      <div className='footer-top-container'>
        <p className='learn-more-text'>Learn more about Jesus and how you can help your friends come to know His love:</p>
        <div className='footer-top'>
          <button className='footer-button'>Get Connected</button>
          <button className='footer-button'>Learn More About the Gospel</button>
          <button className='footer-button'>Upcoming Events</button>
          <button className='footer-button'>Find Answers About Christianity</button>
          <button className='footer-button'>Find Your Closest Youth Group</button>
          <button className='footer-button'>Message a Pastor</button>
        </div>
      </div>
    </div>
  )
}
