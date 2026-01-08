import React from "react";
import "./styles/Testimonials.css";

const Testimonials = () => {
  return (
    <section className="social-proof-section" id="testimonios">
      <div className="container">
        <h2 className="section-title">Lo que dicen nuestros pacientes</h2>
        <div className="testimonials-compact">
          <div className="testimonial-compact">
            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
            <p>"Desde el principio me he sentido escuchada, comprendida y acompañada. Una profesional excelente."</p>
            <div className="testimonial-author">- L.A.</div>
          </div>
          <div className="testimonial-compact">
            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
            <p>"Llevo unos meses con Carolina y solo puedo decir que es excelente. Me siento muy bien hablando con ella y noto el avance."</p>
            <div className="testimonial-author">- M.T.</div>
          </div>
          <div className="testimonial-compact">
            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
            <p>"Gracias a Carolina estoy descubriendo otra manera de vivir la vida. Me siento más conectada conmigo misma."</p>
            <div className="testimonial-author">- Cristina</div>
          </div>
          <div className="testimonial-compact">
            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
            <p>"Muy buena profesional, destaco su facilidad para hacerte sentir cómodo en su consulta."</p>
            <div className="testimonial-author">- MG</div>
          </div>
          <div className="testimonial-compact">
            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
            <p>"Carolina es encantadora, una gran profesional. Me escucha y me comprende."</p>
            <div className="testimonial-author">- Alicia</div>
          </div>
          <div className="testimonial-compact">
            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
            <p>"Escucha activa, cercanía y confianza para poder abrirte a tus emociones. 100% recomendada."</p>
            <div className="testimonial-author">- PNT</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
