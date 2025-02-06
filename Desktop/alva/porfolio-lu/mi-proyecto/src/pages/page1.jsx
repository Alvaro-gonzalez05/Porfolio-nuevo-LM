import React from 'react';
import "../statics/page1.css"; // Verifica si la ruta es correcta


const Page1 = () => {
    return (
        <div className='pagina1-body'>
               <nav class="navbar">
                    <div class="logo">UX UI DESIGNER</div>
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
                </div>
        </div>
    );
};

export default Page1;
