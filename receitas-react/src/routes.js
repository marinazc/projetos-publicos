import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import Menu from "./componentes/Menu";
import Rodape from "./componentes/Rodape";
import PaginaPadrao from "./componentes/PaginaPadrao";
import Post from "./paginas/Post";
import NaoEncontrada from "./paginas/NaoEncontrada";

function AppRoutes() {
  return (
    <div>
      
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<PaginaPadrao/>}> 
            <Route index element={<Home/>}/>
            <Route path="sobre" element={<Sobre/>}/>
          </Route>
          
          <Route path="posts/:id" element={<Post/>}/>
          <Route path="*" element={<NaoEncontrada/>}/>
        </Routes>
        <Rodape/>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
