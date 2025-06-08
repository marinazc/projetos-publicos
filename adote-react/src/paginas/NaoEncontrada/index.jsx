import { Link } from "react-router-dom"
import "./styles/NaoEncontrada.css"

export default function NaoEncontrada() {

    return(
        <section className="naoEncontrada-container">
            <h2>Ops!</h2>
            <h3>A página que você está procurando foi renomeada, removida ou talvez nunca existiu.</h3>
            {/* <button onClick={() => navegar(-1)}>Voltar para página anterior</button> */}
            <Link to="/">Ir para home</Link>

        </section>
    )
}