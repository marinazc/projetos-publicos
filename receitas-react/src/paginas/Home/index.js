import Banner from "../../componentes/Banner";
import Posts from "../../componentes/Posts";
import "./styles/Home.css"
import receitas from "../../receitas.json"

export default function Home() {
    return(
        <div className="home">
            <Posts
                listaReceitas={receitas}
            />
        </div>
    )
}

