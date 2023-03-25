import * as PropTypes from "prop-types";

export const GroupInput = props => {
    return(
        <div className="form-group">
            <label htmlFor={props.id}>{props.etiqueta}</label>
            <input type={props.tipo} className="form-control" onChange={props.digitar} min={props.min} step={props.step} value={props.valor} />
        </div>
    );
};

GroupInput.PropTypes = {
    id: PropTypes.string.isRequired,
    etiqueta: PropTypes.string.isRequired,
    tipo: PropTypes.string,isRequired,
    min: PropTypes.number,
    step: PropTypes.number,
    valor: PropTypes.string.isRequired,
    digitar: PropTypes.func.isRequired,
};