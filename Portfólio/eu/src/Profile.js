import React from 'react';
import './Profile.css'

function Profile() {
  return (
    <div className='banner'>


        <div className="intro">
          
          <div className="title">
            <h1>Olá, eu sou o </h1>
            <span>Wallames Anjos :)</span>
            <p>Desenvolvedor Web</p>
          </div>
          <div className="actions">
            <a className='BtnDownload' href="arq/Curriculo.pdf" download>Download CV</a>
            <a className='BtnContato' href="mailto:wallames@live.com" target="_blank" rel="noopener noreferrer">Entrar em contato</a>
          </div>
        </div>

        <div className="profile">
          <a href="https://github.com/wallames1" target="_blank" rel="noopener noreferrer">
            <img src="/img/eu.png" alt="avatar" />
          </a>
        </div>
    </div>
  );
}

export default Profile;
