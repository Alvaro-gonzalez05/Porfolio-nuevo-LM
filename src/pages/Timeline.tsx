"use client"

import { useState, useEffect, useRef } from "react"
import "../statics/timeline.css"

const timelineEvents = [
  {
    year: 2018,
    title: "Flowers & Saints Founded",
    description: "Our journey began with a passion for minimal design and floral artistry.",
    details:
      "Founded by Jane Doe and John Smith, Flowers & Saints started as a small studio in Sydney's Surry Hills, combining their love for minimalist design and botanical beauty.",
  },
  {
    year: 2019,
    title: "First Major Exhibition",
    description: "Showcased our unique blend of digital art and floral arrangements at the Sydney Design Festival.",
    details:
      "Our exhibition 'Digital Bloom' attracted over 10,000 visitors and received critical acclaim for its innovative approach to merging technology with natural elements.",
  },
  {
    year: 2020,
    title: "Launch of Online Store",
    description: "Expanded our reach by bringing our creations to the digital world.",
    details:
      "In response to global changes, we pivoted to e-commerce, offering our unique designs and virtual floral workshops to a worldwide audience.",
  },
  {
    year: 2021,
    title: "Collaboration with Top Brands",
    description: "Partnered with leading lifestyle brands to create exclusive collections.",
    details:
      "Our collaborations included limited edition prints with Australian fashion label Zimmermann and a bespoke fragrance line with Aesop.",
  },
  {
    year: 2022,
    title: "International Recognition",
    description: "Received the prestigious International Floral Design Award.",
    details:
      "Our 'Ethereal Echoes' installation, which combined holographic projections with live flowers, won the gold medal at the Chelsea Flower Show.",
  },
  {
    year: 2023,
    title: "Expansion to Physical Stores",
    description: "Opened our first flagship store in the heart of Sydney.",
    details:
      "Our Bondi Beach location features an immersive retail experience, blending digital installations with a curated selection of floral arrangements and lifestyle products.",
  },
  // ... (resto de los eventos)
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
        <h2 className="section-title">MY JOURNEY</h2>
        <p className="section-description">The evolution of our creative agency through the years</p>

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
                <div className="timeline-card">
                  <span className="timeline-year">{event.year}</span>
                  <h3 className="timeline-title">{event.title}</h3>
                  <p className="timeline-description">{event.description}</p>
                  <div className={`timeline-details ${expandedEvent === index ? "expanded" : ""}`}>
                    <p>{event.details}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

