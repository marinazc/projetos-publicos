import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useListaAnimais } from "../../context/ListaAnimaisContext";
import FiltroBusca from "../../componentes/FiltroBusca";
import MiniaturaPet from "../../componentes/MinianuraPet";
import Paginacao from "../../componentes/Pagination";
import "./styles/Home.css";

export default function Home() {
  const { listaAnimais } = useListaAnimais();
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [listaFiltrada, setListaFiltrada] = useState([])
  const [itensPorPagina, setItensPorPagina] = useState(12)

  useEffect(() => {
    setListaFiltrada(listaAnimais);
  }, [listaAnimais]);

  useEffect(() => {
    function definirItensPorPagina() {
      const largura = window.innerWidth;

      if (largura < 767) {
        setItensPorPagina(6);
      } else if (largura < 1024) {
        setItensPorPagina(9);
      } else {
        setItensPorPagina(12);
      }
    }

    definirItensPorPagina();
    window.addEventListener("resize", definirItensPorPagina);

    return () => window.removeEventListener("resize", definirItensPorPagina);
  }, []);

  const indiceInicio = (paginaAtual - 1) * itensPorPagina;
  const indiceFim = indiceInicio + itensPorPagina;
  const animaisPaginacao = listaFiltrada.slice(indiceInicio, indiceFim);
  const totalPaginas = Math.ceil(listaFiltrada.length / itensPorPagina);

  return (
    <div className="home-container">
      <FiltroBusca 
        listaAnimais={listaAnimais}
        aoFiltrar={(filtro) => {
          setListaFiltrada(filtro);
          setPaginaAtual(1);
        }}
      />
      
      {animaisPaginacao.length > 0 ?
        <div className="home-container__pets-grid">
          {animaisPaginacao.map((animal) => (
            <Link to={`/animais-adocao/${animal.id}`} key={animal.id}>
              <MiniaturaPet
                foto={animal.foto}
                nome={animal.nome}
                idade={animal.idade}
                cidade={animal.cidade}
                estado={animal.estado}
              />
            </Link>
          ))}
        </div>
        : 
        <p>Ops! Nenhum animal encontrado :(</p>
      }
      {listaAnimais.length > 0 && totalPaginas > 1 && (
        <Paginacao
          total={totalPaginas}
          atual={paginaAtual}
          aoMudar={(e, value) => setPaginaAtual(value)}
        />
      )}
    </div>
  );
}
