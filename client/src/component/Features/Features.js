import React from "react"
import "./Features.css"
import data from "./Features-Api"
import Card from "./Card"

const Features = () => {
  return (
    <>
      <section className='features top' id='tools'>
        <div className='container'>
          <div className='heading'>
            <h4>Features</h4>
            <h1>Technologies and Tools</h1>
          </div>

          <div className='content grids'>
            {data.map((val, index) => {
              return <Card key={index} image={val.image} title={val.title} desc={val.desc} color={val.color} photo={val.photo} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
