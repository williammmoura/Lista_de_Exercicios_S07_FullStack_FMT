import * as PropTypes from "prop-types";
import {TabelaLinha} from "./TabelaLinha";

export const Tabela = ({negociacoes}) => {
    function totalizador(){
        const valorTotal = negociacoes.reduce((totalizador, negociacao) => {
            return(
                totalizador + Number(negociacao.valor) * Number(negociacao.quantidade)
            );
        }, 0);

        return valorTotal.toLocateString("pt-br", {
            style: "currency",
            currency: "BRL",
        });
    };

    return(
        <div className="my-5">
            <table class="table table-hover table-bordered">
                
                {/* Cabeçalho da tabela */}
                <thead class="table-primary">
                    <tr>
                        <th>Data</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Volume</th>
                    </tr>
                </thead>

                {/* Corpo da tabela */}
                <tbody>
                    {negociacoes.map((negociacao) => (
                        <TabelaLinha negociacao={negociacao} />
                    ))};
                </tbody>

                {/* Rodapé da tabela */}
                <tfoot>
                    <tr>
                        <td colSpan="3"></td>
                        <td>{totalizador()}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

Tabela.PropTypes = {
    negociacoes: PropTypes.array.isRequired,
};