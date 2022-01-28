import React from 'react'
import Projects from '../projects/Projects'
import './projectList.css'
import { projects } from './data'
const ProjectList = () => {


  return (
    <div className="pl">
      <div className='pl-text'>
        <h1 className='pl-title'> Works </h1>
        <p className='pl-desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor animi a totam blanditiis! Eaque sint quod expedita sit, delectus sunt.</p>
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
