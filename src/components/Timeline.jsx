import React from 'react';
import "./styles/Timeline.css";

const Timeline = () => {
  return (
    <section className="timeline-section" id="timeline">
      <div className="container">
        <h2 className="section-title">Tu Camino Hacia el Bienestar</h2>
        <p className="section-subtitle">Un proceso estructurado para tu crecimiento personal</p>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker">1</div>
            <div className="timeline-content">
              <h3>Primera Consulta</h3>
              <p>Conocemos tus necesidades y objetivos. Evaluación inicial sin compromiso.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">2</div>
            <div className="timeline-content">
              <h3>Plan Personalizado</h3>
              <p>Diseñamos un plan de tratamiento adaptado a ti y tus circunstancias.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">3</div>
            <div className="timeline-content">
              <h3>Sesiones Regulares</h3>
              <p>Trabajamos juntos en sesiones programadas para alcanzar tus metas.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">4</div>
            <div className="timeline-content">
              <h3>Seguimiento</h3>
              <p>Evaluamos el progreso y ajustamos el tratamiento según sea necesario.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
