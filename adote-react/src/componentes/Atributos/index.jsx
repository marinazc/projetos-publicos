import "./styles/Atributos.css"

export default function Atributos({titulo, listaAtributos, corFundo}) {
    return(
        <div className="atributos-container">
            <h5 style={{ background: corFundo }}>{titulo}</h5>
            <div className="atributos-container__lista">
                <ul>
                    {listaAtributos.map((atributo, index) => (
                        <li key={index}>{atributo}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}