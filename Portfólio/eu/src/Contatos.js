import React from 'react'
import './Contatos.css'


function Contatos() {
  return (
    <div id='Contato'>
        <h1 className='titulos'>Contatos</h1>
        
        <div className='container-contato'>



        <div id='email' className='div-contatos'>
          <a href="mailto:wallames@live.com" target="_blank" rel="noopener noreferrer">
          <img src={"./img/icons/email-quadrado.png"} alt="email" 
          onMouseEnter={(e) => e.currentTarget.src = "/img/icons/email-redondo.png"}
          onMouseLeave={(e) => e.currentTarget.src = "/img/icons/email-quadrado.png"}
          />
          </a>
        </div>

        <div id='linkedin' className='div-contatos'>
          <a href="https://www.linkedin.com/in/wallames/" target="_blank" rel="noopener noreferrer">
          <img src="./img/icons/linkedin-quadrado.png" alt="linkedin" 
           onMouseEnter={(e) => e.currentTarget.src = "/img/icons/linkedin-redondo.png"}
           onMouseLeave={(e) => e.currentTarget.src = "/img/icons/linkedin-quadrado.png"}
           />
          </a>
        </div>

        <div id='tell' className='div-contatos'>
          <a href="https://api.whatsapp.com/send?phone=5513996545323" target="_blank" rel="noopener noreferrer">
          <img src="./img/icons/tell-quadrado.png" alt="tell" 
           onMouseEnter={(e) => e.currentTarget.src = "/img/icons/tell-redondo.png"}
           onMouseLeave={(e) => e.currentTarget.src = "/img/icons/tell-quadrado.png"}
           />
          </a>
        </div>

        <div id='github' className='div-contatos'>
          <a href="https://github.com/wallames1" target="_blank" rel="noopener noreferrer">
          <img src="./img/icons/github-quadrado.png" alt="github" 
           onMouseEnter={(e) => e.currentTarget.src = "/img/icons/github-redondo.png"}
           onMouseLeave={(e) => e.currentTarget.src = "/img/icons/github-quadrado.png"}
           />
          </a>
        </div>
        
        
        
        
        
        
        
        
        
        
        
        
        </div>

    </div>
  )
}

export default Contatos