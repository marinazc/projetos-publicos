import "./styles/Menu.css"
import MenuLink from "../MenuLink"

export default function Menu(){
    
    return(
        <header>
            <nav className="menu">
                <MenuLink caminho="/">
                    Início
                </MenuLink>
                <MenuLink caminho="/sobre">
                    Sobre
                </MenuLink>
            </nav>
        </header>
    )
}