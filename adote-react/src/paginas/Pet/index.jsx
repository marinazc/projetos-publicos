import { Route, Routes, useParams } from "react-router-dom"
import Atributos from "../../componentes/Atributos"
import NaoEncontrada from "../NaoEncontrada";
import "./style/Pet.css"
import { useListaAnimais } from "../../context/ListaAnimaisContext";

export default function Pet() {
    const { listaAnimais } = useListaAnimais();
    const parametros = useParams();
    const animal = listaAnimais.find((pet) => (pet.id === parseInt(parametros.id)));

    if(!animal)
        return(<NaoEncontrada/>)

    return(
        <div className="pet-container">
            <div className="pet-container__destaque">
                <img src={animal.foto}/>
                <a href={animal.link}>Tenho interesse</a>
            </div>
            <div className="pet-container__descricao">
                <div className="pet-container__descricao-topo">
                    <h4>{animal.responsavel}, {animal.cidade}-{animal.estado}</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
                    </svg>
                </div>
                <div className="pet-container__descricao-infos">
                    <h2>{animal.nome}</h2>
                    <h3> | {animal.genero} | {animal.idade}</h3>
                </div>
                <p>{animal.descricao}</p>
                <div className="pet-container__atributos">
                    <Atributos
                        titulo="Aparência"
                        listaAtributos={(animal.aparencia).split(', ')}
                        corFundo="#ffde59" // !!! Arrumar - Deixar as cores de acordo com as variaveis scss
                    />
                    <Atributos
                        titulo="Saúde"
                        listaAtributos={(animal.saude).split(', ')}
                        corFundo="#c1ff72" // !!! Arrumar - Deixar as cores de acordo com as variaveis scss
                    />
                    <Atributos
                        titulo="Personalidade"
                        listaAtributos={(animal.personalidade).split(', ')}
                        corFundo="#cb6ce6" // !!! Arrumar - Deixar as cores de acordo com as variaveis scss
                    />
                </div>
            </div>
        </div>
    )
}