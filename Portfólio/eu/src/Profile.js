import React from 'react';
import './Profile.css'

function Profile() {
  return (
    <div className='banner'>


        <div className="intro">
          
          <div className="title">
            <h1>Olá, eu sou o </h1>
            <span>Rhuan Bello :)</span>
            <p>Desenvolvedor Front-End</p>
          </div>
          <div className="actions">
            <a href="arq/Curriculo.pdf" download>Download CV</a>
            <a href="mailto:wallames@live.com" target="_blank" rel="noopener noreferrer">Entrar em contato</a>
          </div>
        </div>

        <div className="profile">
          <a href="https://github.com/wallames1" target="_blank" rel="noopener noreferrer">
            <img src="img/eu.png" alt="avatar" />
          </a>
        </div>
    </div>
  );
}

export default Profile;
