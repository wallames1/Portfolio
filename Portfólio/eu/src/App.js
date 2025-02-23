import './App.css';
import Contatos from './Contatos';
import Habilidades from './Habilidades';
import Navbar from './Navbar';
import Profile from './Profile';
import Projetos from './Projetos';
import Sobre from './Sobre';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Profile/>
      <Sobre/>
      <Habilidades/>
      <Projetos/>
      <Contatos/>
    </div>
  );
}

export default App;
