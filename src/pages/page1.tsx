"use client"

import type React from "react"

import "../statics/page1.css"
import { useState } from "react"
import { Fade } from "react-awesome-reveal"
import { motion, AnimatePresence } from "framer-motion"

const handleScroll = (id: string) => {
  const section = document.getElementById(id)
  if (section) {
    const yOffset = -50 // Ajusta el margen si es necesario
    const y = section.getBoundingClientRect().top + window.scrollY + yOffset
    window.scrollTo({ top: y, behavior: "smooth" })
  }
}

const Page1 = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
    name: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=alvarogonzalez7070@gmail.com&su=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name}\n\n${formData.message}`)}`
    window.open(gmailLink, "_blank")
  }

  return (
    <div className="pagina1-body">
      <nav className="navbar">
        <div className="logo">
          <Fade>UX UI DESIGNER</Fade>
        </div>
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          &#9776;
        </label>

        <ul className="nav-links">
          <li>
            <a onClick={() => handleScroll("about")}>About Me</a>
          </li>
          <li>
            <a onClick={() => handleScroll("jobs")}>My Jobs</a>
          </li>
          <li>
            <a onClick={() => handleScroll("skills")}>Skills</a>
          </li>
          <li>
            <a onClick={() => handleScroll("certificates")}>Certificates</a>
          </li>
        </ul>
      </nav>

      <div className="texto1">
        <h1 className="titulo-grande">
          <span className="linea">MIRANDA</span>
          <span className="linea">LUCIA</span>
        </h1>
        <div className="textohijo">
          <p>
            Welcome to my portfolio! I'm a UX/UI Designer with a background in engineering and work experience in construction management. I used to work in teams that transformed drawings into buildings. Now I transform business and user needs into digital products.
          </p>
          <button className="contact-me-btn" onClick={() => setIsDialogOpen(true)}>
            CONTACT ME
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isDialogOpen && (
          <motion.div
            className="dialog-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsDialogOpen(false)}
          >
            <motion.div
              className="dialog-content"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2>Get in Touch</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter subject"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your message here"
                  ></textarea>
                </div>
                <div className="form-actions">
                  <button type="button" className="cancel-btn" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="submit-btn">
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Page1