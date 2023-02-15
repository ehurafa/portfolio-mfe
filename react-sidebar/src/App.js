import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'

const App = () => {

    return (
        <BrowserRouter>
            <aside>
                <nav>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/react-single">Single</Link>
                    </li>
                    <li>
                        <Link to="/react-lazy">Lazy</Link>
                    </li>
                    <li>
                        <Link to="/react-multiples">Multiples</Link>
                    </li>
                    <li>
                        <Link to="/react-router">Routes</Link>
                    </li>
                    <li>
                        <Link to="/test-angular">Angular</Link>
                    </li>

                </nav>
                <div class="inner" >
                    <div class="logo">
                        <figure> 
                            <img src="assets/img/profile.jpg" alt="Foto de Perfil" />
                        </figure>
                    </div>

                    <div class="brand">
                        <figure> 
                            <img src="./assets/img/logo.png" alt="Logotipo - Rafael Gomes" />
                        </figure>
                        <p>Front-end Developer</p>
                    </div>



                    <div class="navigation">
                        <nav>
                            <Link to="/angular/contact">Contato</Link>
                        </nav>
                    </div>
                </div>  



            </aside>
        </BrowserRouter>
    )
}

export default App