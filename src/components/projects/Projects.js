import React, { useState } from 'react'
import './projects.css'
import Modal from 'react-modal'
import close from '../../img/close.png'
const Projects = ({ link, img, title, desc, role, tech }) => {

  Modal.setAppElement('#root')
  const [modalOpen, setModalOpen] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev);
  };

  const [style, setStyle] = useState("p-browser");

  const changeStyle = () => {
    setStyle("p-browser");
    setModalOpen(false)

  };

  const changeStyle2 = () => {
    setStyle("p-browser2");
    setModalOpen(true)

  };
  return (
    <>


      <div className='p '>
        <div className={style}>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>

        <a type='button' onClick={changeStyle2}>
          <img src={img.img} className='p-img' alt="ffff" />
        </a>
      </div>
      <div className='modal'>
        <Modal isOpen={modalOpen} onRequestClose={changeStyle}>
          <div className="modal-header modal-header--sticky">
            <span onClick={changeStyle} className="close">&times;</span>
            <div >
              <h2 >{title}</h2>
              <a href={link} target="_blank">{link}</a>
            </div>
            <p >  Tech used: <i> {tech} </i>&nbsp; | role: <i>{role}</i> </p>
          </div>
          <div className="modal-body">

            <div className='p-modal-body '>
              <div className={style}>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
              </div>

              <img src={img.img} className='modal-img' alt="ffff" />

            </div>
            <h3 className='p-modal-desc '>{desc}</h3>
          </div>
        </Modal>
      </div >


    </>
  )
}

export default Projects
