import PostDestaque from "../PostDestaque"
import "./styles/Posts.css"

export default function Posts(props) {
    let listaReceitas = [];
    async function buscarReceitas() {
        const con = await fetch("https://raw.githubusercontent.com/marinazc/receitas/refs/heads/master/src/receitas.json?token=GHSAT0AAAAAAC5ERVTG5UZTJTF6DZZ65E42Z5GSKCA")
        listaReceitas = await con.json();
    }
    buscarReceitas();
    
    return(
        <ul className="posts">
            {props.listaReceitas.map((receita) => (
                <li key={receita.id}>
                    <PostDestaque
                        id ={receita.id}
                        titulo={receita.titulo}
                        img={receita.img}
                    />
                </li>
            ))}
        </ul>
    )
}