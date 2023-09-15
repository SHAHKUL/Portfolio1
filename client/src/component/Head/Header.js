import React, { useState } from "react"
import "./header.css"
import logo from "../pic/logo1.png"

const Header = (props) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)



  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            <img src={logo} className="logos" alt='' />
          </div>

          <div className='navlink'>
            <ul id="head" className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>

              <li>
                <a href='#home'>home</a>
              </li>
              <li>
                <a href='#tools'>Tools</a>
              </li>
              <li>
                <a href='#project'>Project</a>
              </li>
              <li>
                <a href='#resume'>resume</a>
              </li>
              <li>
                <a href='#skills'>skill set</a>
              </li>

              <li>
                <a href='#contact'>contact</a>
              </li>
            </ul>
            <ul>
              <li>

                <button className='home-btn' onClick={props.downloadPDF}><i className="fa-solid fa-download fa-2x"></i></button>
              </li>
            </ul>


          </div>
        </div>
      </header>
    </>
  )
}

export default Header
