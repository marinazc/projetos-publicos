import Banner from "../../componentes/Banner"
import ArteCachorro from "./assets/homem-e-cachorro.png"
import ArteGato from "./assets/mulher-e-gato.png"
import "./styles/Sobre.css"

export default function Sobre() {
    return(
        <div className="sobre-container">
            <Banner
                titulo="Sobre:"
                descricao="O Adotar.org é uma organização sem fins lucrativos que tem como missão facilitar a adoção de cães e gatos. A plataforma permite que protetores de animais e qualquer pessoa interessada possam divulgar pets disponíveis para adoção. Da mesma forma, quem busca um novo companheiro pode encontrar aqui seu futuro animal de estimação."
                imagem={ArteCachorro}
            />
            <Banner
                titulo="Processo de adoção:"
                descricao="Ao demonstrar interesse na adoção de um animal disponível, é necessário preencher um formulário com seus dados pessoais e responder às perguntas elaboradas pelo anunciante. Em seguida, ele avaliará sua candidatura, verificando se você atende aos critérios estabelecidos. Se não for selecionado de imediato, não desanime! O processo é rigoroso justamente para garantir que o match entre tutor e pet seja o melhor possível, sempre priorizando o bem-estar de ambos."
                imagem={ArteGato}
                inverter={true}
            />
        </div>
    )
}