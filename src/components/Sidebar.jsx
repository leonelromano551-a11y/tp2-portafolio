import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
    <aside className="sidebar">
        <h2>Mi Portfolio</h2>
        <nav>
        <ul>
            <li>
            <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
            <NavLink to="/about">Sobre mí</NavLink>
            </li>
            <li>
            <NavLink to="/skills">Habilidades</NavLink>
            </li>
            <li>
            <NavLink to="/projects">Proyectos</NavLink>
            </li>
            <li>
            <NavLink to="/contact">Contacto</NavLink>
            </li>
        </ul>
        </nav>
    </aside>
    );
}

export default Sidebar;