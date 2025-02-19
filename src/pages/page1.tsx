import "../statics/page1.css"; // Asegúrate de que la ruta es correcta
import { Fade } from "react-awesome-reveal";

const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
        const yOffset = -50; // Ajusta el margen si es necesario
        const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }
};

const Page1 = () => {
    return (
        <div className='pagina1-body'>
            <nav className="navbar">
                <div className="logo"><Fade>UX UI DESIGNER</Fade></div>
                <input type="checkbox" id="menu-toggle" className="menu-toggle"/>
                <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>

                <ul className="nav-links">
                    <li><a onClick={() => handleScroll("about")}>About Me</a></li>
                    <li><a onClick={() => handleScroll("jobs")}>My Jobs</a></li>
                    <li><a onClick={() => handleScroll("skills")}>Skills</a></li>
                    <li><a onClick={() => handleScroll("certificates")}>Certificates</a></li>
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
