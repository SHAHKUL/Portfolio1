import React, { useState } from "react"

import "./Contact.css"

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()
    alert(
      `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
    )
  }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img id="con" src="https://media.istockphoto.com/id/1256603011/photo/business-network-concept-customer-support-shaking-hands.jpg?s=612x612&w=0&k=20&c=uRYJ6c2EyNO92w0wQlCScEVwbdoyHaXzfIxw1q7zNLA=" alt='' />
                </div>
                <div className='details'>
                  <h1>Shahkul Hameed J</h1>
                  <h3>Full Stack Developer</h3>
                  <p>No 1120,Mariyamman Kovil Street,</p>
                  <p>Panruti,Cuddalore</p>
                  <p>Tamil Nadu-607 106, India</p> <br />
                  <p>Phone: +91 8668026463</p>
                  <p>Email: shahkulhameed@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className='button'>
                    <button className='btn_shadow'>
                      <a href='shahkulhameed@gmail.com' target="_blank"><i style={{ color: "#c71610" }} id='face' className="fa-solid fa-envelope fa-4x"></i></a>
                    </button>
                    <button className='btn_shadow'>
                      <a href='https://github.com/SHAHKUL' target="_blank"><i style={{ color: "#333" }} id='face' className="fa-brands fa-github  fa-2x"></i></a>
                    </button>
                    <button className='btn_shadow'>
                      <a href='https://www.linkedin.com/in/shahkulhameedj725822b4/' target="_blank"><i style={{ color: "#0077b5" }} id='face' className="fa-brands fa-linkedin  fa-2x"></i></a>
                    </button>
                    <button className='btn_shadow'>
                      <a href='https://leetcode.com/SHAHKUL/' target="_blank"><i style={{ color: "#f48024" }} id='face' className="fa-brands fa-stack-overflow fa-2x"></i></a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
