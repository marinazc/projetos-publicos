import { useNavigate } from "react-router-dom"
import "./styles/NaoEncontrada.css"

export default function NaoEncontrada(){
    const navegar = useNavigate();

    return(
        <div className="nao-encontrada">
            <div className="nao-encontrada__msg-erro">
                <span>404</span>
                <h1>
                    Ops! Página não encontrada.
                </h1>
            </div>
            <div className="nao-encontrada__retorno">
                <p>
                    Tem certeza de que era isso que você estava procurando?
                </p>
                <button onClick={() => navegar(-1)}>Voltar para página anterior</button>
            </div>
        </div>
    )

}