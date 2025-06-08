import "./styles/MiniaturaPet.css"

export default function MiniaturaPet({foto, nome, idade, cidade, estado}) {
    return(
        <div className="miniaturaPet-container">
            <img src={foto}/>
            <div className="miniaturaPet-container__infos">
                <h2>{nome}</h2>
                <h3>{idade}</h3>
                <h4>{cidade}, {estado}</h4>
            </div>
        </div>
    )
}

