import React from 'react'
import "./about.css"
import head from "../../img/uloko2.png"
import me from "../../img/me.jpg"
const About = () => {
    return (
        <div className='a'>

            <div className='a-left'>
                <div className='a-card bg'></div>
                <div className='a-card'>
                    <img className='a-img' src={me} alt="" />
                </div>
            </div>
            <div className='a-right'>
                <h1 className='a-title'>Meeeeee...</h1>
                <p className='a-sub'>
                    I am a 4th year BSIT student at Gordon College, Olongapo City. I aspire to be a web developer who is knowledgable on both frontend and backend.
                </p>
                <div className='a-desc'>
                    Throughout my stay at Gordon College, i tried and worked with technologies that are new to me and in short times, I always managed to get a grasp of everything.
                </div>
            </div>

        </div>
    )
}

export default About
