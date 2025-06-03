import PostDestaque from "../PostDestaque"
import "./styles/Posts.css"

export default function Posts(props) {
    let listaReceitas = [];
    async function buscarReceitas() {
        const con = await fetch("https://raw.githubusercontent.com/marinazc/projetos-publicos/refs/heads/main/receitas-react/src/receitas.json?token=GHSAT0AAAAAADCPDNML4HX3YY2SZQTVDYMG2B7S3YA")
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
