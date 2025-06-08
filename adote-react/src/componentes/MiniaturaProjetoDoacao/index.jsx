import "./styles/MiniaturaProjetoDoacao.css"

export default function MiniaturaProjetoDoacao({user, cidade, estado, metodoDoacao, logo}) {
    return(
        <div className="miniaturaProjeto-container">
            <img src={logo}/>
            <div className="miniaturaProjeto-container__destaque">
                <h4><a href={`https://www.instagram.com/${user}`}>@{user}</a>, {cidade}-{estado}</h4>
                <h5>{metodoDoacao}</h5>
            </div>
        </div>
    )
}