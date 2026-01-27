import React, { useState } from "react"

const Card = (props) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <img src={props.image} alt='' onClick={toggleModal} />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.category}</span>
          <label>
           
          </label>
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i className='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content d_flex'>
            <div className='modal-img left'>
              <img src={props.image} alt='images' className="image-pop" rel="noreferrer"/>
            </div>
            <div className='modal-text right'>
              <span>Featured - Design</span>
              <h1>{props.title}</h1>
              <p id="passage">{props.desc}</p>
              <div className="special-code">
              <a href={props.frontendSource} target="_blank" rel="noreferrer" className='btn_shadow-code'>FrontEnd Source Code</a>
              <a href={props.backendSource} target="_blank" rel="noreferrer" className='btn_shadow-code'>BackEnd Source Code</a>
              </div>
              <div className="special-code">
              <a href={props.frontendDeployed} target="_blank" rel="noreferrer" className='btn_shadow-code'>FrontEnd Deployed Code</a>
              <a href={props.backendDeployed} target="_blank" rel="noreferrer" className='btn_shadow-code'>BackEnd Deployed Code</a>
              </div>
              {/* <div className='button f_flex mtop'>
                <button className='btn_shadow'>
                  LIKE THIS <i className='far fa-thumbs-up'></i>
                </button>
                <a href={props.link} target="_blank" rel="noreferrer">
                  <button className='btn_shadow'>
                    VIEW PROJECT<i className='fas fa-chevron-right'></i>

                  </button>
                </a>
              </div> */}
              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i className='fas fa-times'></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
