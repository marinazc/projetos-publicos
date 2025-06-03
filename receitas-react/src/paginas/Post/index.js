import { Route, Routes, useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown";
import receitas from "../../receitas.json"
import PostModelo from "../../componentes/PostModelo";
import NaoEncontrada from "../NaoEncontrada";
import PaginaPadrao from "../../componentes/PaginaPadrao";
import "./styles/Post.css"

export default function Post() {
    const parametros = useParams();
    const receita = receitas.find((receita) => (receita.id === parseInt(parametros.id)));
    
    if(!receita)
        return(<NaoEncontrada/>)

    return(
        <Routes>
            <Route path="*" element={<PaginaPadrao/>}>
                <Route
                    index
                    element={
                        <PostModelo
                            titulo={receita.titulo}
                        >
                            <div className="post">
                                <ReactMarkdown>
                                    {receita.conteudo}
                                </ReactMarkdown>
                            </div>

                        </PostModelo>
                    }
                />
            </Route>
        </Routes>
    )
}