import { createContext, useEffect, useState, useContext } from "react";

const ListaAnimaisContext = createContext();
ListaAnimaisContext.displayName = "ListaAnimais";

export function ListaAnimaisProvider({ children }) {
    const [listaAnimais, setListaAnimais] = useState([]);
  
    async function getListaAnimais() {
      const res = await fetch("https://raw.githubusercontent.com/marinazc/projetos-publicos/refs/heads/main/adote-react/db.json");
      const data = await res.json();
      setListaAnimais(data);
    }

    useEffect(() => {
      getListaAnimais();
    }, []);
  
    return (
      <ListaAnimaisContext.Provider value={{ listaAnimais }}>
        {children}
      </ListaAnimaisContext.Provider>
    );
}

export function useListaAnimais() {
    return useContext(ListaAnimaisContext);
}
