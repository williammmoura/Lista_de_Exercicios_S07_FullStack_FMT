/**
 * Componente EXTRA do exercício 03
 */

import PropTypes from "prop-types";

//Função para formatação do valor na moeda brasileira.

function valorReais(valor){
    return valor.toLocateString("pt-br", {style:"currency", currency: "BRL"});
};

export const TabelaLinha = ({negociacao}) => {
    const {data, valor, quantidade} = negociacao;
    return(
        <tr>
            <td>{data}                                          </td>
            <td>{quantidade}                                    </td>
            <td>{valorReais(valor)}                             </td>
            <td>{valorReais(Number(valor) * Number(quantidade))}</td>
        </tr>
    );
};

TabelaLinha.PropTypes = {
    negociacao: PropTypes.shape({
        data: PropTypes.string.isRequired,
        valor: PropTypes.number.isRequired,
        quantidade: PropTypes.number.isRequired,
    }).isRequired,
};