import './Home.css';
import React from "react";
import { Link, useNavigate } from "react-router-dom"

// import Assets
import icon from '../Assets/icon.png'
import capa_Dashboard from '../Assets/dash.png'
import github_ico from '../Assets/github.png'
import linkedin_ico from '../Assets/linkedin.png'
import figma_ico from '../Assets/figma.png'

function clickMe() {
    document.getElementById("projects").scrollIntoView({
        behavior: 'smooth'
    });
}


function App() {

    const navigation = useNavigate();

    return (
        <div className="App">
            <header>
                <div className='email'>
                    <a href="mailto:eusouderickizidro@gmail.com?CC=Olá,vimos seu portfólio...">
                        <div className='ball_btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_6_12)">
                                    <path d="M22 4H2.01L2 20H22V4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_6_12">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </a>
                    <p className='small'> eusouderickizidro@gmail.com </p>
                </div>
                <div className='socials'>
                    <a href="https://github.com/DerickIzidro/" target="_blank">
                        <button className='social_btn'>
                            <img className='social_ico' src={github_ico} />
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/derick-izidro-3536ab264/" target="_blank">
                        <button className='social_btn'>
                            <img className='social_ico' src={linkedin_ico} />
                        </button>
                    </a>
                    <a href="https://www.figma.com/file/zjiRvCoWbMugCvZ1svdcAj/Portfolio?type=design&t=Vaq1qI9ki8DhesAm-1" target="_blank">
                        <button className='social_btn'>
                            <img className='social_ico' src={figma_ico} />
                        </button>
                    </a>
                </div>
            </header>

            <div className='line' />

            <section className='me'>
                <div className='elipse_1'></div>
                <div className='elipse_2'></div>
                <div className='elipse_3'></div>
                <div className='me_img'>
                    <img className='iconme' src={icon} />
                </div>

                <section className="info_me">
                    <div className='lines'>
                        <div className="introduction_me"> Olá, Meu Nome é </div>
                        <div className="line2" />
                    </div>
                    <div className='name'>
                        <div className="name_me"> Derick Izidro </div>
                        <div className="job_me">Ui/Ux Designer</div>
                    </div>
                    <div className="btn_me">
                        <button className='link_me border-gradient' onClick={clickMe}> ˅ Ver Projetos</button>
                    </div>

                </section>
            </section>

            <section className='especialties'>
                <div className='boxes_cmp'>
                    <div className='especialty border-gradient'></div>
                    <div className='especialty border-gradient'></div>
                    <div className='especialty border-gradient'></div>
                    <div className='especialty border-gradient'></div>
                </div>
            </section>


            <section className='competences'>
                <div className='svg'>
                    <p>Minhas Competências</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="587" viewBox="0 0 1440 587" fill="none">
                    <path d="M0 0H1440V392C1440 392 1366 295 1213.5 375C1061 455 1142 272.5 1032.5 236C923 199.5 782.5 299 721 352.5C659.5 406 517.5 602 302.5 585.5C87.5 569 0 392 0 392V0Z" fill="url(#paint0_linear_6_8)" />
                    <path d="M0 0H1440V392C1440 392 1366 295 1213.5 375C1061 455 1142 272.5 1032.5 236C923 199.5 782.5 299 721 352.5C659.5 406 517.5 602 302.5 585.5C87.5 569 0 392 0 392V0Z" fill="url(#paint1_linear_6_8)" />
                    <defs>
                        <linearGradient id="paint0_linear_6_8" x1="720" y1="0" x2="720" y2="586.483" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FF7E7E" />
                            <stop offset="1" stop-color="#FF7E7E" stop-opacity="0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_6_8" x1="1449.5" y1="1.78198e-05" x2="293" y2="586" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#925CBC" />
                            <stop offset="1" stop-color="#6488BF" />
                        </linearGradient>
                    </defs>
                </svg>

                <div className='boxes_cmp'>
                    <div className='box border-gradient'></div>
                    <div className='box border-gradient'></div>
                    <div className='box border-gradient'></div>
                    <div className='box border-gradient'></div>
                </div>
            </section>


            <div className='gradient_line' id='projects' />
            <section className='projects'>
                <h1>Alguns Projetos</h1>
                <div className='boxes_prj'>
                    <Link to='/dashboard'>
                        <div className='prj border-gradient' id='first'>
                            <img className='prj_capa' src={capa_Dashboard} />
                            <div className='prj-name'>
                                Dashboard
                            </div>
                        </div>
                    </Link>
                    <div className='prj border-gradient'></div>
                    <div className='prj border-gradient'></div>
                    <div className='prj border-gradient'></div>
                    <div className='prj border-gradient'></div>
                    <div className='prj border-gradient'></div>
                </div>
            </section>

            <footer>
                {/* <div> Ícones feitos por <a href="https://www.flaticon.com/br/autores/pixel-perfect" title="Pixel perfect"> Pixel perfect </a> from <a href="https://www.flaticon.com/br/" title="Flaticon">www.flaticon.com'</a></div> */}
            </footer>
        </div>
    );
}



export default App;