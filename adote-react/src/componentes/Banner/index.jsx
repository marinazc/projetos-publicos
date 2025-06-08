import "./styles/Banner.css"

export default function Banner({titulo, descricao, imagem, inverter=false}) {
    return(
        <div className={inverter ? "banner-container banner-container--inverter" : "banner-container"}>
            <div className="banner-container__descricao">
                <h3>{titulo}</h3>
                <p>{descricao}</p>
            </div>
            <img src={imagem} />
        </div>
    )
}