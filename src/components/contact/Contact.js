import React, { useRef, useState } from 'react'
import './contact.css'
import phone from '../../img/smartphone.png'
import email from '../../img/email.png'
import address from '../../img/home-address.png'
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
        <div className='c'>
            <div className='c-bg'></div>
            <div className='c-wrapper'>
                <div className='c-left'>
                    <div className='c-title'>Contacts</div>
                    <div className='c-info'>
                        <div className='c-info-item'>
                            <img src={phone} className='c-icon' alt="" />
                            +63 9089842215
                        </div>
                        <div className='c-info-item'>
                            <img src={email} className='c-icon' alt="" />

                            <p className='email-sep'>personal email: usonayn@gmail.com</p>


                        </div>
                        <div className='c-info-item'>
                            <img src={email} className='c-icon' alt="" />

                            <p>Gordon College student email: 201811226@gordoncollege.edu.ph</p>

                        </div>
                        <div className='c-info-item'>
                            <img src={address} className='c-icon' alt="" />
                            #221 Paguio St, San Nicolas, Castillejos, Zambales
                        </div>
                    </div>
                </div>
                <div className='c-right'>
                    <p className='c-desc'>
                        <b>Hello! </b>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto fuga debitis ducimus inventore porro earum aperiam similique beatae amet consequatur.
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
        </div>
    )
}

export default Contact
