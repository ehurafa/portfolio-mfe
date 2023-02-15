import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import './App.css';
import profile from './img/profile.jpg'
import brand from './img/brand.png'

const ReactSidebar = () => {

    return (
        <BrowserRouter>
            <div className="sidebar">
                <div className="inner" >
                    <div className="logo">
                        <figure> 
                            <img src={ profile }  alt="Foto de Perfil" />
                        </figure>
                    </div>
                    <div className="brand">
                        <figure> 
                            <img src={ brand } alt="Logotipo - Rafael Gomes" />
                        </figure>
                        <p>Front-end Developer</p>
                    </div>

                    <div className="social">
                        <a href="https://www.linkedin.com/in/rflrafa/" className="transition hi-icon-effect-3 hi-icon-effect-3b linkedin" target="_blank">
                            <span class="hi-icon">
                                <i className="fa fa-linkedin-in"></i>
                            </span>
                        </a>
                        <a href="https://www.linkedin.com/in/rflrafa/" className="transition hi-icon-effect-3 hi-icon-effect-3b linkedin" target="_blank">
                            <span class="hi-icon">
                                <i className="fa fa-linkedin-in"></i>
                            </span>
                        </a>
                        <a href="https://www.linkedin.com/in/rflrafa/" className="transition hi-icon-effect-3 hi-icon-effect-3b linkedin" target="_blank">
                            <span class="hi-icon">
                                <i className="fa fa-linkedin-in"></i>
                            </span>
                        </a>
                    </div>
                    <div className="navigation">
                        <nav>
                            <Link to="/portfolio">Inicial</Link>
                        </nav>

                        <nav>
                            <Link to="/certificates">Certificados</Link>
                        </nav>
                        <nav>
                            <Link to="/angular/contact">Contato</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default ReactSidebar