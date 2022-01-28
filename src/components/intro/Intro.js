import React from 'react'
import "./intro.css"
import me from "../../img/rick&mortAYN.png"
const Intro = () => {
  const name = "Ayn Uson"
  return (
    <div className='i'>
      <div className='i-left'>
        <div className='i-left-wrapper'>
          <h2 className='i-intro'>Hello, I am </h2>
          <h2 className='i-name'>{name}</h2>
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
              <div className='i-title-item'>Web Developer</div>
              <div className='i-title-item'>Full Stackoverflow Programmer</div>
              <div className='i-title-item'>To be discovered</div>
              <div className='i-title-item'>
                To be discovered(1)
              </div>
            </div>
          </div>
          <div className='i-desc'>
            I am a 4th year BSIT student of Gordon College, Olongapo City. I had build interesting projects on my four years of taking BSIT.
          </div>
        </div>
      </div>

      <div className='i-right'>
        <div className='i-bg'></div>
        <img src={me} className='i-img' alt="" />
      </div>
    </div>
  )
}

export default Intro
