import { Link, useLocation } from "react-router-dom";
import "./styles/MenuLink.css"

export default function MenuLink(props){
    const paginaAtual = useLocation()

    return(
        <Link  to={props.caminho} className={paginaAtual.pathname === props.caminho ? "link-destaque" : ""}>{props.children}</Link>
    )
}