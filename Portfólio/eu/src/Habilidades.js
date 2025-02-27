import React from 'react'
import './Habilidades.modules.css'

function Habilidades() {
  return (
    <div className='div-pai'>
      <h1 className='titulos'>Habilidades</h1>
    <div className='container'>
        

        <div className='box'>
          
          <div className='logo'>
            <p>JavaScript</p>
            <img src="img/icons/js.png" alt="logo"/>
          </div>
        </div>

        <div className='box'>
          
          <div className='logo'>
            <p>React</p>
            <img src="img/icons/react.png" alt="logo"/>
          </div>
        </div>


        <div className='box'>
          
          <div className='logo'>
            <p>Html</p>
            <img src="img/icons/html.png" alt="logo"/>
          </div>

        </div>

        <div className='box'>
          
          <div className='logo'>
            <p>Css</p>
            <img src="img/icons/css.png" alt="logo"/>
          </div>

        </div>

        <div className='box'>
          
          <div className='logo'>
            <p>Sql Server</p>
            <img src="img/icons/sql.png" alt="logo"/>
          </div>

        </div>

        <div className='box'>
          
          <div className='logo'>
            <p>C#</p>
            <img src="img/icons/c.png" alt="logo"/>
          </div>

        </div>
    </div>
    </div>
  )
}

export default Habilidades