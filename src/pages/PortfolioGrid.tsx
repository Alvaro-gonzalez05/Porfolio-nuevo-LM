"use client"

import { useState, useEffect } from "react"
import "../statics/portfolioGrid.css"
import elsitio from "../assets/elsitio.jpg"
import wine from "../assets/wine.jpg"
import sophie from "../assets/sophie.jpg"
import sunne from "../assets/sunne.jpg"
import { Bounce,Fade,Slide } from "react-awesome-reveal"

const projects = [
  {
    id: 1,
    title: "Minimalist Brand Identity",
    description: "Clean and modern visual communication for a tech startup",
    imageUrl: elsitio,
    category: "Branding",
  },
  {
    id: 2,
    title: "Minimalist Brand Identity",
    description: "Clean and modern visual communication for a tech startup",
    imageUrl: wine,
    category: "Web Desing",
  },
  {
    id: 3,
    title: "Minimalist Brand Identity",
    description: "Clean and modern visual communication for a tech startup",
    imageUrl: sophie,
    category: "Web Desing",
  },
  {
    id: 4,
    title: "Minimalist Brand Identity",
    description: "Clean and modern visual communication for a tech startup",
    imageUrl: sunne,
    category: "Web Desing",
  },
  // ... (resto de los proyectos)
]

const categories = ["All", ...new Set(projects.map((project) => project.category))]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [animateItems, setAnimateItems] = useState(false)

  useEffect(() => {
    const newFilteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

    setAnimateItems(false)

    setTimeout(() => {
      setFilteredProjects(newFilteredProjects)
      setAnimateItems(true)
    }, 300)
  }, [filter])

  useEffect(() => {
    setAnimateItems(true)
  }, [])

  return (
    <section className="portfolio-section">
      <div className="container">
        <Fade><h2 className="section-title">MY WORKS</h2></Fade>
        <Fade><p className="section-description">A showcase of our minimalist designs and creative solutions.</p></Fade>

        <Slide direction="left"><div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`filter-button ${filter === category ? "active" : ""}`}
            >
              {category}
            </button>
          ))}
        </div></Slide>

        <div className={`portfolio-grid ${animateItems ? "fade-in" : "fade-out"}`}>
          {filteredProjects.map((project) => (
            <Bounce><div key={project.id} className="portfolio-item">
              <div className="portfolio-image-container">
                <img src={project.imageUrl || "/placeholder.svg"} alt={project.title} className="portfolio-image" />
                <div className="portfolio-overlay">
                  <p className="portfolio-overlay-text">{project.description}</p>
                </div>
              </div>
              <div className="portfolio-content">
                <div className="portfolio-category">{project.category}</div>
                <h3 className="portfolio-title">{project.title}</h3>
                <a href="#" className="portfolio-link">
                  View Project
                  <svg
                    className="portfolio-link-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div></Bounce>
          ))}
        </div>
      </div>
    </section>
  )
}

