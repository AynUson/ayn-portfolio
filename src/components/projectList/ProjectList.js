import React from 'react'
import Projects from '../projects/Projects'
import './projectList.css'
import { projects } from './data'
const ProjectList = () => {


  return (
    <div className="pl">
      <div className='pl-text'>
        <h1 className='pl-title'> Works </h1>
        <p className='pl-desc'>Here are some of projects I worked on this past few years while studying on Gordon College.</p>
      </div>
      <div className='pl-list'>
        {projects.map((item) => (
          <Projects img={item.img} title={item.title} key={item.id} />
        ))}

      </div>
    </div>
  )
}

export default ProjectList
