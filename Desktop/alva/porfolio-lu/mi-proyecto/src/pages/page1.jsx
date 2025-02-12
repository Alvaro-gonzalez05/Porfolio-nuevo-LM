import React from 'react';
import "../statics/page1.css"; // Verifica si la ruta es correcta
import { Slide, Fade, Bounce } from "react-awesome-reveal";





const Page1 = () => {
    return (
        <div className='pagina1-body'>
            
               <nav class="navbar">
                    
                    <div class="logo"><Fade>UX UI DESIGNER</Fade></div>
                    <input type="checkbox" id="menu-toggle" class="menu-toggle"/>
                    <label for="menu-toggle" class="menu-icon">&#9776;</label>
                    
                    
                    <ul class="nav-links">
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#jobs">My Jobs</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#certificates">Certificates</a></li>
                    </ul>
                </nav>
                
                    <div className="texto1">
                        <h1 className="titulo-grande">
                            <span className="linea">MIRANDA</span>
                            <span className="linea">LUCIA</span>
                        </h1>
                        <div className="textohijo">
                            <p>Welcome to my portfolio! Here you’ll find a showcase of my work, passion, and creativity. I hope you enjoy the journey and find what you're looking for.</p>
                            <button className='see'>SEE</button>
                        </div>
                    </div>
    
                
                
                
                
        </div>
    );
};

export default Page1;
