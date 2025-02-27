import React from 'react'
import './Projetos.css'

function Projetos() {
  return (
    <div className='div-proj'>
      <h1 className='titulos'>Projetos</h1>
    <div className='container-proj'>
        

        <div className='ban'>
          
          <div className='proj'>
            <h3>Fazenda Urbana</h3>
            <a href="https://github.com/wallames1/fazenda-urbana" target="_blank" rel="noopener noreferrer">
            <img src="img/fazenda.png" alt="logo"/>
            </a>
          </div>
        </div>

        <div className='ban'>
          
          <div className='proj'>
            <h3>Caça Palavras</h3>
            <a href="https://github.com/wallames1/Aulas-React/tree/main/6_SECRET_WORD/secretword" target="_blank" rel="noopener noreferrer">
            <img src="img/secret.png" alt="logo"/>
            </a>
          </div>
        </div>


        <div className='ban'>
          
          <div className='proj'>
            <h3>Museu Multitematico</h3>
            <a href="https://github.com/wallames1/PIM-museu-multe-tem-tico" target="_blank" rel="noopener noreferrer">
            <img src="img/museu.png" alt="logo"/>
            </a>
          </div>

        </div>
    </div>
    </div>
  )
}

export default Projetos