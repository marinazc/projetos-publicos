import { Outlet } from "react-router-dom";
import Banner from "../Banner";
import "./styles/PaginaPadrao.css"

export default function PaginaPadrao() {
    return(
        <main className="main-container">
            <Banner/>
            <div className="main-container__conteudo">
                <Outlet/>
            </div>
        </main>
    )
}