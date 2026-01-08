import React from 'react';
import "./styles/Features.css";

const Features = () => {
  return (
    <section className="features-section bg-light p-5">
      <div className="container">
        {/* Primera Sección: Imagen a la izquierda, texto a la derecha */}
        <div className="row align-items-center">
          <div className="col-md-6 image-column">
            <img
              src="/images/despacho_sereno.jpg"
              alt="Paisaje sereno"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 text-column ">
            <h2 className="mb-4">Encuentra Paz y Comprensión</h2>
            <p className="lead primerbloque">
              "Tu bienestar emocional es nuestra prioridad. Aquí encontrarás un espacio seguro donde puedes ser tú mismo, sin juicios, sin prisas.
              A través de la empatía y la comprensión, te ayudamos a conectar contigo mismo, superar desafíos y construir una vida más plena y equilibrada.
              Respira, estás en el lugar correcto."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
