import React, {useState} from 'react';

function CalcularSoma(){
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [soma, setSoma] = useState(null);
    const [sub, setSub] = useState(null);

    const calcularSoma = () => {
        //Converter os valores para números e calcular a soma
        const resultado = Number(numero1) + Number(numero2);
        setSoma(resultado);
    };
    
    const calcularSub = () => {
        //Converter os valores para números e calcular a sub
        const resultado = Number(numero1) - Number(numero2);
        setSub(resultado);
    };

    return(
        <div>
            <input
            type='number'
            value={numero1}
            onChange={(e) => setNumero1(e.target.value)}
            placeholder='Digite o primeiro número'
            />

            <input
            type='number'
            value={numero2}
            onChange={(e) => setNumero2(e.target.value)}
            placeholder='Digite o segundo número'
            />
            <br></br>  
            <button onClick={calcularSoma}>Calcular Soma</button>
            {soma !== null && <p>Resultado: {soma}</p>}
            <br></br>      
            <button onClick={calcularSub}>Calcular Subtração</button>
            {sub !== null && <p>Resultado: {sub}</p>}    
            </div>

    );
}
export default CalcularSoma;