import '../index.css';
import React from "react";
import { Link, useNavigate } from "react-router-dom"

// Assets
import Header from "../../Assets/headerprj.png"

// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }

function App() {
  return (
    <div className="App">
      <header className='header-projects'>
        <img src={Header} />
        <div className='prj_title'>
          <h1>Dashboard</h1>
          <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at erat consectetur, accumsan odio at, viverra dui. Praesent blandit convallis est, cursus molestie enim dapibus vitae.</text>
        </div>
      </header>
      <section className=' project_desc'>
        <div className='gradient_line' />
        <div className='desc_info'>
          <h1>Explicando o projeto</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at erat consectetur, accumsan odio at, viverra dui. Praesent blandit convallis est, cursus molestie enim dapibus vitae.
          </p>
        </div>
      </section>
      <section className='header-project'>
        <iframe className='principal' src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FiqaGykA5RhsZ4y40LNNb9U%2FDashboard%3Ftype%3Ddesign%26node-id%3D11%253A1190%26t%3DwGw2PlT6IrKQDLT3-1" allowfullscreen></iframe>
      </section>

      <section className='project_desc'>
        <div className='gradient_line' />
        <div className='desc_info'>
          <h1>Outras Versões</h1>
          <section className='alternatives'>
            <div className='dark_mode'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at erat consectetur, accumsan odio at, viverra dui. Praesent blandit convallis est, cursus molestie enim dapibus vitae.</p>
              <iframe classname='principal' src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FiqaGykA5RhsZ4y40LNNb9U%2FDashboard%3Ftype%3Ddesign%26node-id%3D27%253A491%26t%3DTQPLN4Gl5CvlUraN-1" allowfullscreen></iframe>
            </div>
            <div className='wireframe'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at erat consectetur, accumsan odio at, viverra dui. Praesent blandit convallis est, cursus molestie enim dapibus vitae.</p>
              <iframe classname='alt_ver' src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FiqaGykA5RhsZ4y40LNNb9U%2FDashboard%3Ftype%3Ddesign%26node-id%3D0%253A1%26t%3DTQPLN4Gl5CvlUraN-1" allowfullscreen></iframe>
            </div>
          </section>
        </div>
      </section>

    </div>
  );
}

export default App;
