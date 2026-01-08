import React from "react";
import "./styles/Discover.css";

const Discover = () => {
    return (
        <div className="discover-container">
            <header className="discover-header">
                <h1>Descúbrete</h1>
                <p>
                    "El viaje más largo es el que se hace hacia el interior de uno mismo."
                </p>
            </header>

            <div className="discover-grid">
                <section className="discover-card">
                    <div className="card-icon">👁️</div>
                    <h3>Presencia Consciente</h3>
                    <p>
                        La consciencia no es algo que debas adquirir, es algo que ya eres.
                        Solo necesitas quitar el ruido que te impide escuchar tu propia esencia.
                    </p>
                </section>

                <section className="discover-card">
                    <div className="card-icon">💖</div>
                    <h3>Aceptación</h3>
                    <p>
                        Aceptar no es resignarse. Es reconocer lo que es, aquí y ahora,
                        para poder transformarlo desde la paz y no desde la lucha.
                    </p>
                </section>

                <section className="discover-card">
                    <div className="card-icon">🌙</div>
                    <h3>El Poder del Silencio</h3>
                    <p>
                        En el silencio encontramos las respuestas que el ruido de la mente
                        nos oculta. Regálate momentos de quietud cada día.
                    </p>
                </section>
            </div>

            <section className="discover-quote-block">
                <blockquote tabIndex="0">
                    "Tu visión se volverá clara solo cuando puedas mirar en tu propio corazón.
                    Quien mira hacia afuera, sueña; quien mira hacia adentro, despierta."
                </blockquote>
                <cite>— Carl Jung</cite>
            </section>

            <section className="discover-tip-section">
                <div className="tip-icon" aria-hidden="true">🌿</div>
                <div className="tip-content">
                    <h2>Un pequeño paso hoy</h2>
                    <p>
                        Tómate 3 minutos hoy para simplemente observar tu respiración.
                        Sin juzgarla, sin cambiarla. Solo observa cómo la vida entra y sale de ti.
                        Ese es el inicio de la verdadera libertad.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Discover;
