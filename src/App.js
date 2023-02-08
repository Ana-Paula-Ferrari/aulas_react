import './App.css';
import {useState} from 'react'
import Condicional from "./components/Condicional"
import OutraLista from './components/OutraLista';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao'


function App() {

  //centralizar no componente pai o state
  const [nome, setNome] = useState()

  const meusItens = ['React', 'Vue', 'Angular']

  return (
    <div className="App">
      <h1>Renderização Condicional</h1>
      <Condicional/>
      <h1>Renderização de Listas</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>
      <h1>State Lift</h1>
      {/*alterar o estado no componente filho*/}
      <SeuNome setNome={setNome}/>
      {/* restaurar o dado nome*/}
      <Saudacao nome={nome}/>

    </div>
  )
}

export default App;
