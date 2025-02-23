import './Navbar.css'

import React, { useState } from 'react';

function Switch() {
  const [isChecked, setIsChecked] = useState(false);

  // Função para alternar o estado do switch
  const handleToggle = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div>
      
        <label>
            <input type="button" value="X" />
        </label>
      
        <h1>Portfólio</h1>

        <label>
           <input
             name="btn-tema"
             type="checkbox"
             role="switch"
             checked={isChecked}
             onChange={handleToggle}
           />
           <span>{isChecked ? 'Escuro' : 'Claro'}</span>
         </label>

    </div>
  );
}

export default Switch;
