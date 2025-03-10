"use client"

import { useState, useEffect, useRef } from "react"
import "../statics/timeline.css"
import { Fade } from "react-awesome-reveal";

const timelineEvents = [
  {
    "year": "2020-2021",
    "title": "Discovery and Learning",
    "description": "I started my journey in UX/UI. I discovered the field by watching YouTube videos and tutorials, which captivated me and provided a solid foundation.",
    "details": "I explored UX/UI design through online resources, learning about user experience principles, wireframing, and prototyping. Experimenting with tools like Figma and Adobe XD, I created my first projects and built a strong foundation."
  },
  {
    "year": "2022-2023",
    "title": "Freelance Beginnings",
    "description": "I began working as a freelancer in UX/UI projects, enjoying the work and experiencing significant success in the field.",
    "details": "I took on my first freelance projects, applying my knowledge to real-world designs. Working with clients helped me refine my skills, improve communication, and understand industry expectations."
  },
  {
    "year": "2024",
    "title": "Continued Education",
    "description": "I committed to expanding my expertise by taking courses in UX/UI, Product Management, UX Writing, and Web Development to further develop my skills.",
    "details": "I deepened my knowledge through specialized courses, improving my understanding of design strategy, usability testing, and development principles to enhance my UX/UI expertise."
  },
  {
    "year": "2025",
    "title": "Professional Consolidation",
    "description": "Currently, I am pursuing a diploma in UX/UI Design with the goal of deepening my knowledge and dedicating myself to this field full-time.",
    "details": "Enrolled in a UX/UI diploma program, I am honing advanced design skills and preparing to transition into a full-time professional role, focusing on creating impactful digital experiences."
  }
]


export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)
  const [visibleEvents, setVisibleEvents] = useState<number[]>([])
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleEvents((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.3 },
    )

    const eventElements = document.querySelectorAll(".timeline-event")
    eventElements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      eventElements.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [])

  const toggleEvent = (index: number) => {
    setExpandedEvent(expandedEvent === index ? null : index)
  }

  return (
    <section className="timeline-section">
      <div className="container">
        <Fade><h2 className="section-title">MY JOURNEY</h2></Fade>
        <Fade><p className="section-description">The evolution of our creative agency through the years</p></Fade>

        <div className="timeline-container" ref={timelineRef}>
          <div className="timeline-line"></div>

          {timelineEvents.map((event, index) => (
            <div
              key={event.year}
              className={`timeline-event ${visibleEvents.includes(index) ? "fade-in" : ""}`}
              data-index={index}
            >
              <div className="timeline-spacer"></div>
              <div className="timeline-dot-container">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content" onClick={() => toggleEvent(index)}>
                <Fade><div className="timeline-card">
                  <span className="timeline-year">{event.year}</span>
                  <h3 className="timeline-title">{event.title}</h3>
                  <p className="timeline-description">{event.description}</p>
                  <div className={`timeline-details ${expandedEvent === index ? "expanded" : ""}`}>
                    <p>{event.details}</p>
                  </div>
                </div></Fade>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

