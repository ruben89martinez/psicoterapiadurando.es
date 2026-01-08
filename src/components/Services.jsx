import React, { useState } from "react";
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
      image: "/images/terapia_individual.jpg",
      content: [
        "La terapia individual es un espacio seguro y confidencial diseñado para ayudarte a explorar y comprender tus pensamientos, emociones y comportamientos. Nuestro enfoque está orientado a fortalecer tu bienestar emocional, fomentar tu crecimiento personal y proporcionarte herramientas para afrontar los retos de la vida con mayor confianza y resiliencia.",
        "En estas sesiones, trabajaremos juntos para identificar y superar barreras que puedan estar afectando tu calidad de vida, como el estrés, la ansiedad o el impacto de experiencias pasadas. También te ayudaremos a desarrollar una autoestima más sólida y a gestionar las emociones de manera saludable, promoviendo una mayor conexión contigo mismo.",
        "La terapia individual no solo trata de abordar problemas específicos, sino también de potenciar tus fortalezas y recursos internos. Nuestro objetivo es que encuentres claridad, equilibrio y un mayor sentido de propósito en tu día a día.",
      ],
    },
    {
      title: "Terapia de Pareja",
      image: "/images/terapia-pareja.jpg",
      content: [
        "La terapia de pareja está diseñada para fortalecer la comunicación, resolver conflictos y ayudar a las parejas a construir una relación más sana y enriquecedora. Juntos exploraremos las dinámicas de la relación y trabajaremos en estrategias para superar los desafíos que puedan estar enfrentando.",
        "Ya sea que estén atravesando una crisis o simplemente deseen mejorar su conexión, este espacio brinda herramientas prácticas y orientación profesional para fomentar la comprensión mutua y el respeto.",
      ],
    },
    {
      title: "Terapia Online",
      image: "/images/terapia_online.jpg",
      content: [
        "La terapia online ofrece la misma calidad y profesionalidad que las sesiones presenciales, con la comodidad de conectarte desde cualquier lugar. A través de videollamadas seguras y confidenciales, podrás acceder a apoyo psicológico sin barreras geográficas.",
        "Esta modalidad es ideal para quienes tienen agendas ocupadas, viven lejos o simplemente prefieren la comodidad de su hogar. Trabajaremos juntos en tus objetivos terapéuticos con la misma dedicación y eficacia que en consulta presencial.",
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
    </div>
  );
};

export default Services;
