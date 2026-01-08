import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./styles/Contact.css";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Enviando...");
    const formData = new FormData(event.target);

    formData.append("access_key", "cd0dcb7d-946b-4117-8051-3e1f2d6d45c3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("¡Correo enviado correctamente! Gracias por contactarnos.");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("Hubo un error. Por favor, intenta de nuevo.");
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//platform.docplanner.com/js/widget.js";
    script.id = "zl-widget-s";
    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById("zl-widget-s");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="contact-container" id="contact">
      <div className="contact-column contact-form">
        <h2 className="form-title">Envíanos un correo</h2>
        <form onSubmit={onSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              required
            />
          </label>
          <label>
            Correo Electrónico:
            <input
              type="email"
              name="email"
              required
            />
          </label>
          <label>
            Tipo de Terapia:
            <select
              name="terapia"
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="Terapia Individual">Terapia Individual</option>
              <option value="Terapia de Pareja">Terapia de Pareja</option>
              <option value="Terapia Online">Terapia Online</option>
            </select>
          </label>
          <label>
            Mensaje:
            <textarea
              name="message"
              rows="5"
              required
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
        {result && <p className="feedback-message">{result}</p>}
      </div>
      <div className="contact-column contact-calendar">
        <h2 className="calendar-title">Reserva tu cita con nosotros</h2>
        <a
          id="zl-url"
          className="zl-url"
          href="https://www.doctoralia.es/carolina-durango-piedrahita/psicologo/murcia"
          rel="nofollow"
          data-zlw-doctor="carolina-durango-piedrahita"
          data-zlw-type="big_with_calendar"
          data-zlw-opinion="false"
          data-zlw-hide-branding="true"
          data-zlw-saas-only="true"
        >
          Carolina Durango Piedrahita - Doctoralia.es
        </a>
      </div>

      {/* WhatsApp Section */}
      <div className="contact-column contact-whatsapp">
        <a
          href="https://wa.me/34600647145"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <FaWhatsapp size={32} style={{ marginRight: '0.75rem' }} />
          <h2 className="whatsapp-title">Contáctanos por WhatsApp</h2>
        </a>
      </div>

      {/* Map Section */}
      <div className="contact-column contact-map">
        <h2 className="map-title">Dónde estamos</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d813.4464564814604!2d-1.1332683!3d38.0000392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63822729ad0d91%3A0x8634be7edc0bb906!2sC.%20Infanta%20Elena%2C%2012%2C%2030008%20Murcia!5e0!3m2!1ses!2ses!4v1736268000000!5m2!1ses!2ses"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación"
        ></iframe>
        <p className="map-address">C. Infanta Elena 12, Murcia</p>
      </div>
    </div>
  );
};

export default Contact;
