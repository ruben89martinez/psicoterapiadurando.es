import React, { useState } from 'react';
import "./styles/TestBlocks.css";

const TestBlocks = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="test-blocks-page">

      {/* Hero Educativo */}
      <section className="hero-cta-section" id="hero-cta">
        <div className="container">
          <div className="hero-cta-content">
            <h1 className="hero-title">Un Espacio para Ti</h1>
            <p className="hero-subtitle">
              La terapia es un viaje de autodescubrimiento donde aprenderás a conocerte mejor,
              gestionar tus emociones y construir el bienestar que mereces.
            </p>
          </div>
        </div>
      </section>

      {/* ¿Qué es la Terapia? */}
      <section className="what-is-therapy-section" id="what-is-therapy">
        <div className="container">
          <h2 className="section-title">¿Qué es Realmente la Terapia?</h2>
          <div className="therapy-explanation">
            <p className="therapy-intro">
              La terapia es un espacio seguro y confidencial donde puedes explorar tus pensamientos,
              emociones y experiencias sin juicios. No se trata de que alguien te diga qué hacer,
              sino de acompañarte en tu proceso de autoconocimiento.
            </p>
            <div className="therapy-points">
              <div className="therapy-point">
                <div className="point-icon">💭</div>
                <h3>Un espacio para ti</h3>
                <p>Donde tus emociones y experiencias son válidas y respetadas</p>
              </div>
              <div className="therapy-point">
                <div className="point-icon">🤝</div>
                <h3>Acompañamiento profesional</h3>
                <p>Te guío con técnicas científicas adaptadas a tus necesidades</p>
              </div>
              <div className="therapy-point">
                <div className="point-icon">🌱</div>
                <h3>Crecimiento personal</h3>
                <p>Desarrollas herramientas para afrontar los desafíos de la vida</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Cuándo ir a Terapia? */}
      <section className="when-therapy-section" id="when-therapy">
        <div className="container">
          <h2 className="section-title">¿Cuándo Puede Ayudarte la Terapia?</h2>
          <p className="section-subtitle">No necesitas estar en crisis para beneficiarte de la terapia</p>
          <div className="when-grid">
            <div className="when-card">
              <div className="when-icon">😰</div>
              <h3>Ansiedad y Estrés</h3>
              <p>Cuando sientes que las preocupaciones te superan o el estrés afecta tu día a día</p>
            </div>
            <div className="when-card">
              <div className="when-icon">💔</div>
              <h3>Duelo y Pérdidas</h3>
              <p>Atravesando la pérdida de un ser querido, una ruptura o cambios importantes</p>
            </div>
            <div className="when-card">
              <div className="when-icon">😔</div>
              <h3>Tristeza Prolongada</h3>
              <p>Cuando la tristeza persiste y afecta tu motivación y disfrute de la vida</p>
            </div>
            <div className="when-card">
              <div className="when-icon">🔄</div>
              <h3>Cambios Vitales</h3>
              <p>Mudanzas, nuevos trabajos, maternidad/paternidad o cualquier transición importante</p>
            </div>
            <div className="when-card">
              <div className="when-icon">💑</div>
              <h3>Relaciones Difíciles</h3>
              <p>Conflictos de pareja, familiares o problemas para relacionarte con otros</p>
            </div>
            <div className="when-card">
              <div className="when-icon">🎯</div>
              <h3>Autoconocimiento</h3>
              <p>Simplemente quieres conocerte mejor y desarrollar tu potencial personal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mitos vs Realidad */}
      <section className="myths-section" id="myths">
        <div className="container">
          <h2 className="section-title">Mitos y Realidades sobre la Terapia</h2>
          <p className="section-subtitle">Desmontando prejuicios comunes</p>
          <div className="myths-grid">
            <div className="myth-card">
              <div className="myth-label">MITO</div>
              <p className="myth-text">"La terapia es solo para personas con problemas graves"</p>
              <div className="reality-label">REALIDAD</div>
              <p className="reality-text">La terapia es para cualquier persona que quiera mejorar su bienestar emocional, conocerse mejor o desarrollar herramientas para la vida.</p>
            </div>
            <div className="myth-card">
              <div className="myth-label">MITO</div>
              <p className="myth-text">"Ir al psicólogo significa que estás loco"</p>
              <div className="reality-label">REALIDAD</div>
              <p className="reality-text">Acudir a terapia es un acto de valentía y autocuidado. Es buscar ayuda profesional como harías con cualquier otro aspecto de tu salud.</p>
            </div>
            <div className="myth-card">
              <div className="myth-label">MITO</div>
              <p className="myth-text">"La terapia dura años y años"</p>
              <div className="reality-label">REALIDAD</div>
              <p className="reality-text">La duración depende de tus objetivos. Algunas personas notan mejoras en pocos meses, otras prefieren un acompañamiento más prolongado.</p>
            </div>
            <div className="myth-card">
              <div className="myth-label">MITO</div>
              <p className="myth-text">"Puedo resolverlo solo/a"</p>
              <div className="reality-label">REALIDAD</div>
              <p className="reality-text">Pedir ayuda no es debilidad. A veces necesitamos una perspectiva profesional externa para ver claramente y avanzar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline - Proceso Terapéutico */}
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

      {/* FAQ Section - Preguntas Frecuentes */}
      <section className="faq-section" id="faq">
        <div className="container">
          <h2 className="section-title">Preguntas Frecuentes</h2>
          <p className="section-subtitle">Resolvemos tus dudas más comunes</p>

          <div className="faq-list">
            <div className="faq-item">
              <button
                className={`faq-question ${activeQuestion === 0 ? 'active' : ''}`}
                onClick={() => toggleQuestion(0)}
              >
                <span>¿Cuánto dura una sesión de terapia?</span>
                <span className="faq-icon">{activeQuestion === 0 ? '−' : '+'}</span>
              </button>
              {activeQuestion === 0 && (
                <div className="faq-answer">
                  <p>Cada sesión tiene una duración aproximada de 50-60 minutos. Este tiempo nos permite trabajar profundamente en tus necesidades sin que resulte agotador.</p>
                </div>
              )}
            </div>

            <div className="faq-item">
              <button
                className={`faq-question ${activeQuestion === 1 ? 'active' : ''}`}
                onClick={() => toggleQuestion(1)}
              >
                <span>¿Con qué frecuencia debo asistir a terapia?</span>
                <span className="faq-icon">{activeQuestion === 1 ? '−' : '+'}</span>
              </button>
              {activeQuestion === 1 && (
                <div className="faq-answer">
                  <p>La frecuencia recomendada es una sesión por semana, aunque esto puede variar según tus necesidades específicas y el tipo de tratamiento. En algunos casos, pueden ser sesiones quincenales o mensuales.</p>
                </div>
              )}
            </div>

            <div className="faq-item">
              <button
                className={`faq-question ${activeQuestion === 2 ? 'active' : ''}`}
                onClick={() => toggleQuestion(2)}
              >
                <span>¿Cuánto tiempo dura el tratamiento completo?</span>
                <span className="faq-icon">{activeQuestion === 2 ? '−' : '+'}</span>
              </button>
              {activeQuestion === 2 && (
                <div className="faq-answer">
                  <p>La duración del tratamiento varía según cada persona y sus objetivos. Algunos pacientes experimentan mejoras significativas en 3-6 meses, mientras que otros prefieren un acompañamiento más prolongado.</p>
                </div>
              )}
            </div>

            <div className="faq-item">
              <button
                className={`faq-question ${activeQuestion === 3 ? 'active' : ''}`}
                onClick={() => toggleQuestion(3)}
              >
                <span>¿Las sesiones son confidenciales?</span>
                <span className="faq-icon">{activeQuestion === 3 ? '−' : '+'}</span>
              </button>
              {activeQuestion === 3 && (
                <div className="faq-answer">
                  <p>Absolutamente. La confidencialidad es uno de los pilares fundamentales de la terapia. Todo lo que compartes en sesión está protegido por el secreto profesional.</p>
                </div>
              )}
            </div>

            <div className="faq-item">
              <button
                className={`faq-question ${activeQuestion === 4 ? 'active' : ''}`}
                onClick={() => toggleQuestion(4)}
              >
                <span>¿Ofrecen terapia online?</span>
                <span className="faq-icon">{activeQuestion === 4 ? '−' : '+'}</span>
              </button>
              {activeQuestion === 4 && (
                <div className="faq-answer">
                  <p>Sí, ofrecemos sesiones de terapia online mediante videollamada, lo que te permite recibir atención profesional desde la comodidad de tu hogar con la misma efectividad que las sesiones presenciales.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Variation */}
      <section className="social-proof-section" id="social-proof">
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

      {/* Trust Badges - Certificaciones */}
      <section className="trust-section" id="trust">
        <div className="container">
          <h2 className="section-title">Confianza y Profesionalidad</h2>
          <div className="trust-grid">
            <div className="trust-badge">
              <div className="trust-icon">🎓</div>
              <h4>Titulación Oficial</h4>
              <p>Psicóloga Colegiada</p>
            </div>
            <div className="trust-badge">
              <div className="trust-icon">🔒</div>
              <h4>100% Confidencial</h4>
              <p>Secreto Profesional</p>
            </div>
            <div className="trust-badge">
              <div className="trust-icon">⭐</div>
              <h4>Alta Satisfacción</h4>
              <p>Valoraciones Positivas</p>
            </div>
            <div className="trust-badge">
              <div className="trust-icon">📋</div>
              <h4>Método Probado</h4>
              <p>Técnicas Validadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Suave */}
      <section className="cta-final-section" id="cta-final">
        <div className="container">
          <div className="cta-final-content">
            <h2>¿Listo para empezar tu cambio?</h2>
            <p>Si sientes que es el momento de dar el paso, estoy aquí para acompañarte. Sin presiones, a tu ritmo.</p>
            <div className="cta-final-buttons">
              <button className="btn btn-primary btn-lg">Contactar</button>
            </div>
            <div className="cta-benefits">
              <div className="cta-benefit">
                <span>✓</span> Sin compromiso
              </div>
              <div className="cta-benefit">
                <span>✓</span> Atención personalizada
              </div>
              <div className="cta-benefit">
                <span>✓</span> Primera consulta informativa
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TestBlocks;
