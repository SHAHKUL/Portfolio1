import React from "react"
import logo1 from "./pic/logo1.png"

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            <img className="logos" src={logo1} alt='' />
          </div>
          <p>© {currentYear}. All rights reserved by Shahkul.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
