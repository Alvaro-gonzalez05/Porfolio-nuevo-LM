import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import "../statics/Carousel.css";
import imagen1 from "../assets/certificado-ui.png";
import imagen2 from "../assets/certificado-product.png";
import imegen3 from "../assets/certificado-web.png";
import certificado1 from "../assets/certificado1.png";
import certificado2 from "../assets/certificado2.png";
import certificado3 from "../assets/certificado3.png";
import { Slide, Fade, Bounce } from "react-awesome-reveal";



const slides = [
  {
    image: imagen1,
    title: "CERTIFICADO UI",
    text: "aca iria una breve explicacion de cada cosa hecha ",
    certificado: certificado2
  },
  {
    image: imagen2,
    title: "CERTIFICADO PRODUCT ",
    text: "Description of the second certificate.",
    certificado: certificado1
  },
  {
    image: imegen3,
    title: "CERTIFICADO DEV/WEB",
    text: "Description of the third certificate.",
    certificado:certificado3
  }
];

export default function Carousel() {
    const [current, setCurrent] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
  
    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  
    useEffect(() => {
      const interval = setInterval(nextSlide, 5000); // Cambia la diapositiva cada 5 segundos
  
      // Limpiar intervalo si el componente se desmonta o cuando cambia la diapositiva
      return () => clearInterval(interval);
    }, [current]); // El intervalo se reinicia cada vez que cambia "current"
  
    return (
      <div className="carousel-container">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="carousel-slide"
        >
        <div className="carousel-image-container">
            <Fade><img src={slides[current].image} alt="Slide" className="carousel-image" /></Fade>
        </div>
        <div className="textcontent">
            <Slide direction="right"><h2 className="carousel-title">{slides[current].title}</h2></Slide>
            <Slide direction="right"><p className="carousel-text">{slides[current].text}</p></Slide >
            <Slide direction="right"><button className="carousel-button" onClick={() => setIsOpen(true)}>See</button></Slide>
        </div>  
          
        </motion.div>
        
        <button onClick={prevSlide} className="carousel-arrow left">◀</button>
        <button onClick={nextSlide} className="carousel-arrow right">▶</button>
        
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="modal-overlay">
          <div className="modal-content">
            <img src={slides[current].certificado} alt="Slide" className="modal-image" />
            <button className="modal-button" onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </Dialog>
      </div>
    );
  }