import React, { useState } from 'react';

const Projects = () => {
    const [proyectos] = useState([
    { id: 1, nombre: "Portfolio TP1", descripcion: "Portfolio personal de una sola página creado con React.", tech: "React / Vite" },
    { id: 2, nombre: "App Financiera", descripcion: "Sistema web para control de ingresos y gastos.", tech: "JavaScript / Node" },
    { id: 3, nombre: "Landing Page", descripcion: "Sitio web comercial adaptable a dispositivos móviles.", tech: "HTML / CSS" }
    ]);

    const [seleccionado, setSeleccionado] = useState('');

    return (
    <div className="projects-page">
        <h2>Mis Proyectos</h2>
        <p>Trabajos realizados durante la cursada:</p>
        
        <div className="projects-container">
        {proyectos.map((p) => (
            <div key={p.id} className="project-card">
            <h3>{p.nombre}</h3>
            <p>{p.descripcion}</p>
            <p><small>Tecnologías: {p.tech}</small></p>
            <button onClick={() => setSeleccionado(p.nombre)}>
                Ver Detalle
            </button>
            </div>
        ))}
        </div>

        {seleccionado && (
        <div className="project-detail">
            <p>Proyecto seleccionado: <strong>{seleccionado}</strong></p>
        </div>
        )}
    </div>
    );
};

export default Projects;