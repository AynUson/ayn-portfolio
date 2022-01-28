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
                    <img className='a-img'  src={me} alt="" />
                </div>
            </div>
            <div className='a-right'>
                <h1 className='a-title'>Meeeeee...</h1>
                <p className='a-sub'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, laboriosam. Enim laudantium eum blanditiis veniam!
                </p>
                <div className='a-desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic deserunt vel repellendus magnam pariatur deleniti placeat. Temporibus eveniet quam tenetur, molestias ipsam officia, nesciunt aliquid nisi iusto minima placeat, autem facilis maxime. Blanditiis cum illum recusandae facere, maiores perferendis tempore voluptatibus pariatur dolores veniam et repellat, consequatur, aut nam similique.
                </div>
            </div>

        </div>
    )
}

export default About
