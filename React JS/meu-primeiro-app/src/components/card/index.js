import Button from '../button';
import { useState } from 'react';

const Card = () => {

    const [valor, setValor] = useState(0);

    function AdicionarValor() {
        setValor(valor + 1);
    }

    function RemoverValor() {
        setValor(valor - 1);
    }

    return (
        <div className="card">
            <div className="card-header">
                Produto 1
            </div>
            <div className="card-body">
                <h1>{valor}</h1>
                <Button 
                    className="btn btn-danger"
                    onClick={RemoverValor}
                >
                    Remove
                </Button>
                <Button 
                    className="btn btn-ligth"
                    onClick={AdicionarValor}
                >
                    Adiciona
                </Button>
            </div>
        </div>
    );
}

export default Card;