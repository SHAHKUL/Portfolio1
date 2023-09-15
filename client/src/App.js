import React, { useRef } from "react"
import Header from "./component/Head/Header"
import Features from "./component/Features/Features"
import Home from "./component/Hero/Home"
import Portfolio from "./component/Portfolio/Portfolio"
import Resume from "./component/Resume/Resume"
import Skill from "./component/Skill/Skill"

import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer"
import "./App.css"
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const App = () => {
  const pdfRef = useRef()


  const downloadPDF = () => {
    const input = pdfRef.current
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4', true)
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      const imgWidth = canvas.width
      const imgHeight = canvas.height
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
      const imgX = (pdfWidth - imgWidth * ratio) / 2
      const imgY = 30
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio)
      pdf.save("shahkulPortfolio.pdf")
    })

  }

  return (
    <>
      <div ref={pdfRef}>
        <Header downloadPDF={downloadPDF} />
        <Home />
        <Features />
        <Portfolio />
        <Resume />
        <Skill/>
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
