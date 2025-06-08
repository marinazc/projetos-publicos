import "./styles/CardEspeciePet.css"

export default function CardEspeciePet({imagem, titulo, selecionado, aoClicar}) {
    return(
        // <div className="CardEspeciePet-container">
        <div className={selecionado ? "CardEspeciePet-container CardEspeciePet-container--selecionado" : "CardEspeciePet-container"} onClick={aoClicar}>
            <img src={imagem}/>
            <h3>{titulo}</h3>
        </div>
    )
}