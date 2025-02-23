import React from 'react';

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
            <a href="assets/cv/cv-rhuanbello.pdf" download>Download CV</a>
            <a href="mailto:rhuambello@gmail.com" target="_blank" rel="noopener noreferrer">Entrar em contato</a>
          </div>
        </div>
        <div className="profile">
          <a href="https://github.com/rhuanbello" target="_blank" rel="noopener noreferrer">
            <img src="assets/avatar2.png" alt="avatar" />
          </a>
        </div>
    </div>
  );
}

export default Profile;
