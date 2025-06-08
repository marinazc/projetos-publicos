import { useEffect, useState } from "react";
import CampoSelect from "../CampoInput/CampoSelect"
import CampoText from "../CampoInput/CampoText"
import CardEspeciePet from "../CardEspeciePet"
import IconCachorro from "./assets/cachorro.svg"
import IconGato from "./assets/gato.svg"
import "./styles/FiltroBusca.css"

export default function FiltroBusca({listaAnimais, aoFiltrar}) {
    const [genero, setGenero] = useState("");
    const [idade, setIdade] = useState("");
    const [tamanho, setTamanho] = useState("");
    const [cep, setCep] = useState("");
    const [distancia, setDistancia] = useState("")
    const [ordenar, setOrdenar] = useState("");
    const [especie, setEspecie] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        filtrarLista();
    }

    function filtrarLista() {
        const [idadeMin, idadeMax] = getFaixaIdade();
        const listaFiltrada = listaAnimais.filter((animal) => {
            const [numIdade, unidade] = animal.idade.toLowerCase().split(" ");
            let idadeAnimal = unidade.startsWith("mes") ? parseInt(numIdade) / 12 : parseInt(numIdade);

            const generoOk = genero === "" || animal.genero === genero;
            const tamanhoOk = tamanho === "" || ((animal.aparencia).split(", "))[1] === tamanho;
            const idadeOk = idade === "" || (idadeAnimal >= idadeMin && (idadeMax === null || idadeAnimal < idadeMax));
            const especieOk =
                especie === "" ||
                animal.especie.toLowerCase() === especie.toLowerCase();

            return generoOk && tamanhoOk && idadeOk && especieOk;
        });
        
        aoFiltrar(listaFiltrada);
    }

    function selecionarEspecie(nova) {
        setEspecie((ant) => (ant === nova ? "" : nova));
    }

    function limparFiltros(e) {
        e.preventDefault();
        setGenero("");
        setIdade("");
        setTamanho("");
        setCep("");
        setDistancia("");
        setOrdenar("");
        setEspecie("")
    }

    function getFaixaIdade() {
        switch (idade) {
            case "0-1 anos":
                return [0, 1];
            case "1-4 anos":
                return [1, 4];
            case "4-7 anos":
                return [4, 7];
            case "7-10 anos":
                return [7, 10];
            case "10+ anos":
                return [10, null];
            default:
                return [0, null];
        }
    }

    useEffect(() => {
        filtrarLista();
    }, [especie]);

    return(
        <div className="filtroBusca-container">
            <form onSubmit={handleSubmit} onReset={limparFiltros} className="filtroBusca-container__filtro">
                <CampoSelect
                    label="Sexo"
                    listaOptions={["Macho", "Fêmea"]}
                    value={genero}
                    setValor={setGenero}
                />
                <CampoSelect
                    label="Idade"
                    listaOptions={["0-1 anos", "1-4 anos", "4-7 anos", "7-10 anos", "10+ anos"]}
                    value={idade}
                    setValor={setIdade}
                />
                <CampoSelect
                    label="Tamanho"
                    listaOptions={["Porte pequeno", "Porte médio", "Porte grande", "Porte gigante"]}
                    value={tamanho}
                    setValor={setTamanho}
                />
                <CampoText
                    label="CEP"
                    disabled={true}
                    value={cep}
                    setValor={setCep}
                />
                <CampoSelect
                    label="Distância"
                    listaOptions={["Até 5 quilômetros", "Até 10 quilômetros", "Até 20 quilômetros", "Até 40 quilômetros", "Até 60 quilômetros", "Até 100 quilômetros"]}
                    disabled={true}
                    value={distancia}
                    setValor={setDistancia}
                />
                <CampoSelect
                    label="Ordenar"
                    listaOptions={["Antigos", "Recentes"]}
                    disabled={true}
                    value={ordenar}
                    setValor={setOrdenar}
                />
                <div className="filtroBusca-container__buttons">
                    <button className="filtroBusca-container__buttons--filtrar" type="submit">Filtrar</button>
                    <button className="filtroBusca-container__buttons--limpar" type="reset">Limpar filtros</button>
                </div>
            </form>
            <div className="filtroBusca-container__especies">
                <CardEspeciePet
                    imagem={IconCachorro}
                    titulo="Cachorros"
                    selecionado={especie === "Cachorro"}
                    aoClicar={() => selecionarEspecie("Cachorro")}
                />
                <CardEspeciePet
                    imagem={IconGato}
                    titulo="Gatos"
                    selecionado={especie === "Gato"}
                    aoClicar={() => selecionarEspecie("Gato")}
                />
            </div>

        </div>
    )
}