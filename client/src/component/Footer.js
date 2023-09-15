import React from "react"
import logo1 from "./pic/logo1.png"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            <img className="logos" src={logo1} alt='' />
          </div>
          <p>© 2023. All rights reserved by Shahkul.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
