import "./Resume.css"
import ResumeApi from "./ResumeApi"
import Card from "./Card"

const Resume = () => {
  return (
    <>
      <section className='Resume' id='resume'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>3 YEARS OF EXPERIENCE</h4>
            <h1>My Resume</h1>
          </div>

          <div className='content-section mtop d_flex'>
            <div className='left' >
              <div className='heading'>
                <h4>2012-2018</h4>
                <h1>Education Qualification</h1>
              </div>

              <div className='content' >
               {ResumeApi
  .filter(val => val.category === "education")
  .map((val, id) => (
    <Card
      key={id}
      title={val.title}
      year={val.year}
      rate={val.rate}
      desc={val.desc}
    />
  ))}



              </div>
            </div>
            <div className='left'>
              <div className='heading'>
                <h4>2018-2025</h4>
                <h1>Job Experience</h1>
              </div>

              <div className='content'>
               {ResumeApi
  .filter(val => val.category === "experience")
  .map((val, id) => (
    <Card
      key={id}
      title={val.title}
      year={val.year}
      rate={val.rate}
      desc={val.desc}
    />
  ))}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resume
