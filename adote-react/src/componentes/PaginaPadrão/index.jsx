import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import "./styles/PaginaPadrao.css"

export default function PaginaPadrao() {
    return(
        <main className="main-container">
            <Header/>
            <div className="main-container__conteudo">
                <Outlet/>
            </div>
            <Footer/>
        </main>
    )
}