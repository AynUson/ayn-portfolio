import React, { useRef, useState } from 'react'
import './contact.css'
import phone from '../../img/smartphone.png'
import email from '../../img/email.png'
import address from '../../img/home-address.png'
import git from '../../img/github.png'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const Contact = () => {
    const MySwal = withReactContent(Swal)
    const formRef = useRef()
    // const [done, setDone] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_zxtmifs', 'template_2zlqpz3', formRef.current, 'user_OC9zewgkevfMUlqahWhf2')
            .then((result) => {
                return MySwal.fire(
                    {
                        icon: 'success',
                        title: <p>Message sent! Thank you!</p>,
                        showConfirmButton: false
                    }
                )
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className='c '>
            <div className='c-bg'></div>
            <div className='c-wrapper'>
                <div className='c-left'>
                    <div className='c-title'>Send me an email</div>
                    <div className='c-info'>
                        <div className='c-info-item'>
                            <img src={git} className='c-icon' alt="" />
                            <a href="https://github.com/AynUson" target="_blank">github.com/AynUson</a>
                        </div>
                        <div className='c-info-item'>
                            <img src={phone} className='c-icon' alt="" />
                            +63 9089842215
                        </div>
                        <div className='c-info-item'>
                            <img src={email} className='c-icon' alt="" />

                            <p className='email-sep'>personal email: usonayn@gmail.com</p>


                        </div>
                        {/* <div className='c-info-item'>
                            <img src={email} className='c-icon' alt="" />

                            <p>Gordon College student email: 201811226@gordoncollege.edu.ph</p>

                        </div> */}
                        <div className='c-info-item'>
                            <img src={address} className='c-icon' alt="" />
                            #221 Paguio St, San Nicolas, Castillejos, Zambales
                        </div>
                    </div>
                </div>
                <div className='c-right'>
                    <p className='c-desc'>
                        <b>THANKS FOR YOUR VISIT! </b>Have a good day.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' name='user_name' />
                        <input type="text" placeholder='Subject' name='user_subject' />
                        <input type="text" placeholder='Email' name='user_email' />
                        <textarea rows='5' placeholder='Say something...' name='user_message' />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
            <div className=" custom-shape-divider-bottom-1643356579">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill" ></path >
                </svg >
            </div >
            <div className='footer'>

            </div>
        </div >
    )
}

export default Contact
