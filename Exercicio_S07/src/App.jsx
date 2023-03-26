import { useState } from 'react'
import { Header } from './components/Header'
import {Formulario} from './components/Formulario'
import {Tabela} from './components/Tabela'

export const App = () => {
  const [negociacoes, setNegociacoes] = useState([]);

  function adicionarNegociação(negociacao){
    setNegociacoes([...negociacoes, negociacao]);
  };

  return(
    <div>
      {/* COMPONENTES do Projeto */}
      <Header titulo="Negociações"/>
      <div className='container'>
        <Formulario quandoAdicionar = {adicionarNegociação} />
        <Tabela negociacoes={negociacoes} />
      </div>
    </div>
  );
};