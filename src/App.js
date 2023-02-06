import './App.css';
import HelloWorld from './components/HelloWorld';
import Pessoas from './components/Pessoas';
import SayMyName from './components/SayMyName';
import Frase from './components/Frase'
import List from './components/List'

function App() {
  const nome ="Maria"
  return (
    <div className="App">
      <h1>Testando o Css</h1>
      <Frase/>
      <SayMyName nome='MATHEUS'/>
      <SayMyName  nome ='ANA'/>
      <SayMyName nome={nome}/>
      <Pessoas 
      nome='Ana' 
      idade='28' 
      profissao='Programadora' 
      foto='https://via.placeholder.com/150'/>
      <List />
    </div>
  );
}

export default App;
