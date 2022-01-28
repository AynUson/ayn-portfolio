import React from 'react'
import './projects.css'
const Projects = ({ img, title }) => {

  return (
    <div className='p'>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>

      <a href="">
        <img src={img.img} className='p-img' alt="ffff" />
      </a>



    </div>
  )
}

export default Projects
