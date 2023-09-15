import React from "react"
import './Features.css'

const Card = (props) => {
  return (
    <>
      <div className='box btn_shadow' >
        {
          props.image ? <i id="fa_image" className={props.image} style={{ color: `${props.color}` }}></i> : <img id="icon" src={props.photo} alt='' />
        }
        <h2>{props.title}</h2>
      </div>
    </>
  )
}

export default Card
