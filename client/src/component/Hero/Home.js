import React from "react"
import "./Home.css"
import hero from "../pic/image.png"

import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left_top'>
            <h2>Hello, It's Me</h2>
            <h1>
              <span>Shahkul </span>
            </h1>
            <h2>
              And I'm a
              <span>
                <Typewriter words={[" Full Stack Devloper...", " Web Developer..."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p id="para">To learn more, improve my knowledge & professional skills and contribute my best as proficient to the
              growth of the organization.My skills and experience in a more meaningful way I'm confident that switching to this new domain will enable me to grow professionally. </p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
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
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
