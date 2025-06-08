import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./componentes/Header"
import Home from "./paginas/Home"
import Footer from "./componentes/Footer"
import PaginaPadrao from "./componentes/PaginaPadrão"
import Pet from "./paginas/Pet"
import NaoEncontrada from "./paginas/NaoEncontrada"
import { ListaAnimaisProvider } from "./context/ListaAnimaisContext"
import Sobre from "./paginas/Sobre"
import Doacao from "./paginas/Doacao"

function App() {

  return (
    <div>
        <BrowserRouter>
          <ListaAnimaisProvider>
            <Routes>
              <Route path="/" element={<PaginaPadrao/>}>
                <Route index element={<Home/>}/>
                <Route path="sobre" element={<Sobre/>} />
                <Route path="doacoes" element={<Doacao/>} />
                <Route path="animais-adocao/:id" element={<Pet/>}/>
                <Route path="*" element={<NaoEncontrada/>}/>
              </Route>
            </Routes>
          </ListaAnimaisProvider>
        </BrowserRouter>
    </div>
  )
}

export default App
