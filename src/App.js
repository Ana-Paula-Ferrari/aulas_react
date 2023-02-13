import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Empresa from "./pages/Empresa"
import Contato from "./pages/Contato"
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'


function App() {
    
  return (
    //No lugar das divs usar Router(Rotas)
    <Router>
      <Navbar/> {/* Componente com os links*/}

      {/* Configurando as rotas - associar componentes aos links */}
      <Routes>
        <Route path='/' exact='true' element={<Home/>}></Route> {/* colocar exact para quando tiver "/" não acessar sempre a Home */}
        <Route path='/empresa' element={<Empresa/>}></Route>
        <Route path='/contato' element={<Contato/>}></Route>
      </Routes>
      <Footer/> {/*Rodapé*/}
    </Router>

    
    
  )
}

export default App;
