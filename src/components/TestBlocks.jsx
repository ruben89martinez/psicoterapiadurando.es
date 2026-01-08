import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./styles/TestBlocks.css";
import "./styles/Features.css";

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

      {/* El Poder de la Terapia */}
      <div className="therapy-overlap-container mt-5">
        <div className="therapy-content-card">
          <div className="text-column">
            <h2 className="mb-4">El Poder de la Terapia</h2>
            <div className="segundobloque">
              <p>
                La psicoterapia puede ayudarte a comprender tus emociones, pensamientos y comportamientos, y te brindará herramientas efectivas para lidiar con ellos de manera saludable. También te ofrecerá un espacio seguro y confidencial donde puedas expresarte libremente y recibir apoyo y comprensión.
              </p>
              <p>
                Por naturaleza los seres humanos tendemos a restarle importancia a aquello que nos angustia por evitar contactar con el dolor. Frases como <em>"yo puedo solo"</em>, <em>"seré más fuerte si atravieso este problema sin ayuda"</em> o <em>"no estoy tan mal"</em> suelen formar parte de nuestro discurso mental cuando nos planteamos si deberíamos ir a terapia o no.
              </p>
              <p>
                Pues bien, buscar ayuda es un acto de <em>valentía, coraje y responsabilidad</em> sobre nosotros mismos y sobre nuestro bienestar emocional. Desarrollar herramientas que aún no conoces te servirán para vivir mejor y desarrollarte con más plenitud.
              </p>
              <p>
                Además, es importante recordar que no siempre es fácil identificar cuándo necesitamos ayuda. Muchas veces, nuestros problemas emocionales o psicológicos pueden ser sutiles y no evidentes a simple vista. Por eso, si sientes que algo no está bien en tu vida, si te sientes abrumado, ansioso, deprimido o si tienes dificultades para relacionarte con los demás, puede ser una buena idea considerar la posibilidad de buscar ayuda profesional.
              </p>
              <p>
                En resumen, buscar ayuda a través de la terapia es una decisión valiente y responsable que puede mejorar significativamente tu bienestar emocional y tu calidad de vida. No tengas miedo de pedir ayuda cuando la necesites; puede marcar una gran diferencia en tu vida.
              </p>
            </div>
          </div>
        </div>
        <div className="corazon-overlap">
          <img
            src="/images/peace/mind_1.jpg"
            alt="Fondo con diseño de corazón"
            className="img-fluid"
          />
        </div>
      </div>

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

            <div className="faq-item">
              <button
                className={`faq-question ${activeQuestion === 5 ? 'active' : ''}`}
                onClick={() => toggleQuestion(5)}
              >
                <span>¿Qué método terapéutico utilizas?</span>
                <span className="faq-icon">{activeQuestion === 5 ? '−' : '+'}</span>
              </button>
              {activeQuestion === 5 && (
                <div className="faq-answer">
                  <p>Trabajo desde un enfoque integrador, combinando técnicas de diferentes corrientes psicológicas según las necesidades de cada persona. Principalmente utilizo terapia cognitivo-conductual, terapia humanista y mindfulness, adaptando el tratamiento a tus objetivos específicos.</p>
                </div>
              )}
            </div>

            <div className="faq-item">
              <button
                className={`faq-question ${activeQuestion === 6 ? 'active' : ''}`}
                onClick={() => toggleQuestion(6)}
              >
                <span>¿Cuál es el precio de las sesiones?</span>
                <span className="faq-icon">{activeQuestion === 6 ? '−' : '+'}</span>
              </button>
              {activeQuestion === 6 && (
                <div className="faq-answer">
                  <p>El precio varía según el tipo de terapia (individual, pareja, familiar) y la modalidad (presencial u online). Ponte en contacto conmigo para informarte sobre las tarifas actuales y posibles opciones de pago. La primera consulta informativa es gratuita.</p>
                </div>
              )}
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
              <Link to="/contacto" className="btn btn-primary btn-lg">Contactar</Link>
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
