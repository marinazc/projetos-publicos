import { Link } from "react-router-dom";
import "./styles/PostDestaque.css";

export default function PostDestaque(props){
    
    return(
        <Link to={`/posts/${props.id}`}>
            <div className="post-destaque">
                <img src={props.img} alt="Imagem de capa da postagem"/>
                <h2>{props.titulo}</h2>
                <button>Ler</button>
            </div>
        </Link>
    )
}