import * as PropTypes from "prop-types";
import { useState } from "react";
import {GroupInput} from "./GroupInput"

export const Formulario = (props) => {
    const [data, setData] = useState("");
    const [valor, setValor] = useState(0);
    const [quantidade, setQuantidade] = useState(0);

    function handleAdicionarNagociacao(){
        const negociacao = {
            data: data,
            quantidade: quantidade,
            valor: valor,
        };
        props.quandoAdicionar(negociacao);

        //Resetar os campos após a inserção
        setData("");
        setQuantidade(0);
        setValor(0);
    };

    return(
        <form className="form container">
            <div className="row">
                <GroupInput id="data" etiqueta="Data" tipo="text" digitar={(e) => setData(e.target.value)} valor={data}/>
                <GroupInput id="quantidade" etiqueta="Quantidade" tipo="number" digitar={(e) => setQuantidade(e.target.value)} valor={quantidade} min="1" step="1"/>
                <GroupInput id="valor" etiqueta="Valor" tipo="number" digitar={(e) => setValor(e.target.value)} valor={valor} min="0.01" step="0.01"/>

                <div className="col-1 d-flex align-items-end justify-content-end">
                    <button className="btn btn-primary" type="button" onClick={handleAdicionarNagociacao}>
                        Incluir Negociação
                    </button>
                </div>
            </div>
        </form>
    );
};

Formulario.PropTypes = {
    quandoAdicionar: PropTypes.func.isRequired,
};