import React from 'react';

const Skills = () => {
    const listaSkills = [
    { id: 1, nombre: "JavaScript", nivel: "Avanzado" },
    { id: 2, nombre: "React", nivel: "Intermedio" },
    { id: 3, nombre: "HTML & CSS", nivel: "Avanzado" },
    { id: 4, nombre: "Git y GitHub", nivel: "Intermedio" }
    ];

    return (
    <div>
        <h2>Habilidades y Tecnologías</h2>
        <p>Herramientas que utilizo habitualmente en mis proyectos:</p>
        <ul>
        {listaSkills.map((skill) => (
            <li key={skill.id}>
            <strong>{skill.nombre}</strong> - {skill.nivel}
            </li>
        ))}
        </ul>
    </div>
    );
};

export default Skills;