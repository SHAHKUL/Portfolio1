import React from "react"
import "./skill.css"
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
export const data = {
  labels: ["Out of", 'HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'NODE JS', 'MONGO DB', "SQL"],
  datasets: [
    {
      label: '# of Rating my self',
      data: [10, 9, 8, 8.5, 8, 8, 7.5, 6],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
      ],
      borderColor: 'red',
      borderWidth: 2,
    },
  ],
};


const Skill = () => {
  return (
    <>
      <section className='Testimonial' id='skills'>
        <div className='container'>
          <div className='heading text-center'>
            <h4>Depends Upon Technologies</h4>
            <h1>My Skill Set</h1>
          </div>
          <div className="radar">
            <Radar data={data} />;
          </div>
        </div>
      </section>
    </>
  )
}

export default Skill
