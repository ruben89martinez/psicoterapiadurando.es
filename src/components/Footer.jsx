import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import "./styles/Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-info">
        <p className="footer-address">C. Infanta Elena 12, Murcia</p>
      </div>
      <div className="footer-icons">
        <a href="https://www.instagram.com/interiormivoz/" target="_blank" rel="noopener noreferrer" className="instagram-icon">
          <FaInstagram size={42} />
        </a>
        <a href="https://www.doctoralia.es/carolina-durango-piedrahita/psicologo/murcia" target="_blank" rel="noopener noreferrer">
          <img src="/images/doctoralia.png" alt="Doctoralia" className="icon-image" />
        </a>
        <a href="https://wa.me/34600647145" target="_blank" rel="noopener noreferrer" className="whatsapp-icon">
          <FaWhatsapp size={42} />
        </a>
      </div>
    </div>
    <p>&copy; Psicoterapia Durango. Todos los derechos reservados.</p>
  </footer>
);

export default Footer;
