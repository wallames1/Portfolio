import React from 'react'
import './Contatos.css'


function Contatos() {
  return (
    <div id='Contato'>
        <h1 className='titulos'>Contatos</h1>
        
        <div className='container-contato'>



        <div id='email' className='div-contatos'>
          <a href="mailto:wallames@live.com" target="_blank" rel="noopener noreferrer">
          <img src={"/img/email-quadrado.png"} alt="email" 
          onMouseEnter={(e) => e.currentTarget.src = "/img/email-redondo.png" }
          onMouseLeave={(e) => e.currentTarget.src = "/img/email-quadrado.png"}
          />
          </a>
        </div>

        <div id='linkedin' className='div-contatos'>
          <a href="https://www.linkedin.com/in/wallames/" target="_blank" rel="noopener noreferrer">
          <img src="/img/linkedin-quadrado.png" alt="linkedin" 
           onMouseEnter={(e) => e.currentTarget.src = "/img/linkedin-redondo.png"}
           onMouseLeave={(e) => e.currentTarget.src = "/img/linkedin-quadrado.png"}
           />
          </a>
        </div>

        <div id='tell' className='div-contatos'>
          <a href="https://api.whatsapp.com/send?phone=5513996545323" target="_blank" rel="noopener noreferrer">
          <img src="/img/tell-quadrado.png" alt="tell" 
           onMouseEnter={(e) => e.currentTarget.src = "/img/tell-redondo.png"}
           onMouseLeave={(e) => e.currentTarget.src = "/img/tell-quadrado.png"}
           />
          </a>
        </div>

        <div id='github' className='div-contatos'>
          <a href="https://github.com/wallames1" target="_blank" rel="noopener noreferrer">
          <img src="/img/github-quadrado.png" alt="github" 
           onMouseEnter={(e) => e.currentTarget.src = "/img/github-redondo.png"}
           onMouseLeave={(e) => e.currentTarget.src = "/img/github-quadrado.png"}
           />
          </a>
        </div>
        
        
        
        
        
        
        
        
        
        
        
        
        </div>

    </div>
  )
}

export default Contatos
