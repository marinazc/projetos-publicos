import "./styles/PostModelo.css"

export default function PostModelo(props) {

    return (
        <article className="post-modelo">
            <h2 className="post-modelo__titulo">{props.titulo}</h2>
            <div className="post-modelo__conteudo">
                {props.children}
            </div>
        </article>
    )
}