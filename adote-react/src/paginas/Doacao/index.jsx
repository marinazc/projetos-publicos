import MiniaturaProjetoDoacao from "../../componentes/MiniaturaProjetoDoacao"
import "./styles/Doacao.css"
import LogoAbracaPets from "./assets/abraca-pets.jpg"
import LogoAmigosDosAnimais from "./assets/amigos-dos-animais.jpg"
import LogoSos4Patas from "./assets/sos4patas.jpg"

export default function Doacao() {
    return(
        <div className="doacao-container">
            <div className="doacao-container__descricao">
                <h3><strong>Pronto pra contribuir?</strong> Escolha um projeto e doe agora!</h3>
                <p>IMPORTANTE! As formas de doação podem variar, verifique as informações atualizadas no perfil de cada projeto.</p>
            </div>
            <div className="doacao-container__projetos">
                <MiniaturaProjetoDoacao
                    user="associacaoprotetora_dosanimais"
                    cidade="Ibirá"
                    estado="SP"
                    metodoDoacao="Picpay: @assoc.prot.animais.ibira"
                    logo={LogoAmigosDosAnimais}
                />
                <MiniaturaProjetoDoacao
                    user="projetoabracapets"
                    cidade="São José do Rio Preto"
                    estado="SP"
                    metodoDoacao="Pix: abracapets@gmail.com"
                    logo={LogoAbracaPets}
                />
                <MiniaturaProjetoDoacao
                    user="sos4patas_urupes"
                    cidade="Urupês"
                    estado="SP"
                    metodoDoacao="Doações pelo QR disponível no instagram"
                    logo={LogoSos4Patas}
                />
            </div>
        </div>
    )
}