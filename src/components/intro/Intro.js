import React from 'react'
import "./intro.css"
import me from "../../img/rick&mortAYN.png"

import git from '../../img/github.png'
const Intro = () => {
  const name = "Ayn Uson"
  return (
    <div className='i'>
      <div className="custom-shape-divider-top-1643356136">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
      <div className='i-left'>
        <div className='i-left-wrapper'>
          <h2 className='i-intro'>Hello, I am </h2>
          <div className='i-name-git'>
            <h2 className='i-name'>{name}</h2>


          </div>

          {/* <div className='i-title2'>
            <div className='i-title2-wrapper'>
              <p className='i-title2-item'>Web Developer</p>
              <p className='i-title2-item'>Full Stackoverflow Programmer</p>
              <p className='i-title2-item'>To be discovered</p>
              <p className='i-title2-item'>To be discovered(1)</p>
            </div>
          </div> */}
          <div className='i-title'>
            <div className='i-title-wrapper'>
              <div className='i-title-item'>Student</div>
              <div className='i-title-item'>Web Developer</div>
              <div className='i-title-item'>Full Stackoverflow Programmer</div>
              <div className='i-title-item'>To be discovered</div>
              <div className='i-title-item'>
                To be discovered(1)
              </div>
            </div>
          </div>

          <div className='i-desc'>
            <div className='i-git'>
              <img src={git} className='c-icon' alt="" />
              <a href="https://github.com/AynUson" target="_blank">github.com/AynUson</a>
            </div>

          </div>
        </div>
      </div>

      <div className='i-right'>
        {/* <div className='i-bg'></div> */}

        <img src={me} className='i-img' alt="" />
      </div>

    </div>
  )
}

export default Intro
