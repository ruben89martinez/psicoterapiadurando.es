import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Services.css"; // Importamos los estilos desde el archivo CSS

const Services = () => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleAccordion = (index) => {
    setActiveIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const services = [
    {
      title: "Terapia Individual",
      image: "/images/personas/terapia_individual.jpg",
      content: [
        "La terapia individual es un espacio seguro y confidencial donde explorarás tus pensamientos, emociones y comportamientos. Te ayudaremos a fortalecer tu bienestar emocional, desarrollar herramientas para afrontar los retos de la vida y potenciar tu crecimiento personal, promoviendo mayor claridad, equilibrio y conexión contigo mismo.",
      ],
    },
    {
      title: "Terapia de Pareja",
      image: "/images/personas/terapia-pareja.jpg",
      content: [
        "La terapia de pareja está diseñada para fortalecer la comunicación, resolver conflictos y ayudar a las parejas a construir una relación más sana y enriquecedora. Juntos exploraremos las dinámicas de la relación y trabajaremos en estrategias para superar los desafíos que puedan estar enfrentando.",
        "Ya sea que estén atravesando una crisis o simplemente deseen mejorar su conexión, este espacio brinda herramientas prácticas y orientación profesional para fomentar la comprensión mutua y el respeto.",
      ],
    },
    {
      title: "Terapia Online",
      image: "/images/personas/terapia_online.jpg",
      content: [
        "La terapia online ofrece la misma calidad y profesionalidad que las sesiones presenciales, con la comodidad de conectarte desde cualquier lugar. A través de videollamadas seguras y confidenciales, podrás acceder a apoyo psicológico sin barreras geográficas.",
        "Esta modalidad es ideal para quienes tienen agendas ocupadas, viven lejos o simplemente prefieren la comodidad de su hogar. Trabajaremos juntos en tus objetivos terapéuticos con la misma dedicación y eficacia que en consulta presencial.",
      ],
    },
    {
      title: "Terapia Adolescente",
      image: "/images/personas/terapia_adolescente.jpg",
      content: [
        "La adolescencia es una etapa de cambios profundos y desafíos únicos. La terapia para adolescentes proporciona un espacio seguro donde pueden expresar sus emociones, enfrentar presiones sociales y desarrollar habilidades para gestionar el estrés y la ansiedad.",
        "Trabajamos en fortalecer su autoestima, mejorar las relaciones familiares y ayudarles a construir una identidad saludable. Nuestro enfoque respeta su autonomía mientras les brindamos el apoyo necesario para navegar esta importante etapa de sus vidas.",
      ],
    },
    {
      title: "Terapia para Diversidad Sexual y de Género",
      image: "/images/personas/expresar-confiar.jpg",
      content: [
        "Ofrecemos un espacio seguro, inclusivo y libre de juicios para personas de la comunidad LGBTIQ+. Entendemos los desafíos únicos relacionados con la identidad de género, orientación sexual y los procesos de aceptación personal y social.",
        "Trabajamos en el fortalecimiento de la autoestima, el manejo del estrés minoritario, la gestión del proceso de salida del armario y el apoyo en transiciones de género. Nuestro objetivo es acompañarte en tu proceso de autodescubrimiento y bienestar emocional.",
      ],
    },
    {
      title: "Terapia Familiar",
      image: "/images/personas/terapia_familiar.jpg",
      content: [
        "La terapia familiar es un espacio donde trabajamos con todo el sistema familiar para mejorar la comunicación, resolver conflictos y fortalecer los vínculos entre sus miembros. Entendemos que los desafíos de un miembro afectan a toda la familia, y por eso abordamos las dinámicas relacionales de manera integral.",
        "Este tipo de terapia ayuda a identificar patrones de interacción, mejorar la comprensión mutua y desarrollar estrategias efectivas para enfrentar juntos los retos familiares. Trabajamos en crear un ambiente de respeto, apoyo y colaboración entre todos los miembros.",
      ],
    },
  ];

  return (
    <div className="services-container" id="servicios">
      <h1 className="services-title">Servicios</h1>
      <div className="services-columns">
        {services.map((service, index) => (
          <div
            key={index}
            className={`services-column ${
              activeIndexes.includes(index) ? "active" : ""
            }`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <button
              className={`accordion-button ${
                activeIndexes.includes(index) ? "active" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              {service.title}
            </button>
            {activeIndexes.includes(index) && (
              <div className="accordion-content">
                {service.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="services-footer">
        <Link to="/la-terapia" className="saber-mas-button-center">
          Saber más sobre la terapia
        </Link>
      </div>
    </div>
  );
};

export default Services;
