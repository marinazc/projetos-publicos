import "./styles/Banner.css"
import ImagemDestaque from "../../assets/imagem-destaque.png"

export default function Banner() {
    return(
        <div className="banner">
            <div className="banner__texto">
                <h1>Receitas</h1>
                <p>Descubra receitas fáceis, rápidas e com os ingredientes que você já tem na geladeira.</p>
            </div>
            <img src={ImagemDestaque} alt="Imagem de uma forma de bolo, ovos e óleo"/>
        </div>
    )
}