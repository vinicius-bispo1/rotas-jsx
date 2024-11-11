import { BrowserRouter, Routes,Route, Link} from 'react-router-dom'

import Inicio from './components/Inicio/inicio'
import Sobre from './components/Sobre/sobre'
import Contato from './components/Contato/contato'
import './global.scss'


export default function App(){
  return(
    <BrowserRouter>
       <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
       </nav>
      <Routes>

        <Route path='/' element={<Inicio/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
        <Route path='/contato' element={<Contato/>}/>

      </Routes>
    </BrowserRouter>
  )
}