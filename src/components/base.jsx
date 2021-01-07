import React, { Fragment, useState } from 'react';
import Display from './display';

const Base = () => {

    /**
     * =====================================
     * Calculadora De Operaciones Basica
     * BY JOSTICK QUIEL
     * =====================================
     * 
     * Esta es la base de la calculadora, esto representa los botones, esta separada del display
     * el display es otro componente donde enviamos los datos.
     */

    let initialArray = [];
    let initialArray2 = [];

    const [datos, setDatos] = useState(initialArray);

    const [datos2, setDatos2] = useState(initialArray2);

    const [currentOp, setCurrentOP] = useState(false);

    const [OP, setOP] = useState("");

    const [resultado, setResultado] = useState("");
   

    const handleClickNumero = (numero) =>{
        console.log(numero);
        console.log(currentOp);
        console.log(OP);
        
        if(currentOp === false){
            setDatos(datos => [...datos, numero]);
            console.log("Array 1")
        }else{
            console.log("Array 2")
            setDatos2(datos2 => [...datos2, numero]);
        }

    }

    const limpiarDisplay = (event) => {
        setCurrentOP(false)
        setDatos(initialArray)
        setDatos2(initialArray)
        setOP("")
        setResultado("")
    }

    const operador = (ope) => {
        if(ope !== "" ){
            setCurrentOP(true);
            setOP(ope);
        }else{
            setCurrentOP(false);
        }
    }

    const calcular = () =>{

        console.log("calcular funcion")
        let d1 = 0.0, d2 = 0.0, arraySum1 = "", arraySum2 = "";
        let calculo = 0.0;

        datos.forEach (function(numero){
            arraySum1 += numero;
        });


        datos2.forEach (function(numero2){
            arraySum2  += numero2;
        });

        console.log(arraySum1);
        console.log(arraySum2 );

        switch(OP) {
            case "+":
                calculo = parseFloat(arraySum1) + parseFloat(arraySum2) ;
                setResultado(calculo);
                console.log(resultado);
            break;
            case "-":
                calculo = parseFloat(arraySum1) - parseFloat(arraySum2) ;
                setResultado(calculo);
                console.log(resultado);
            break;
            case "x":
                calculo = parseFloat(arraySum1) * parseFloat(arraySum2) ;
                setResultado(calculo);
                console.log(resultado);
            break;
            case "/":
                calculo = parseFloat(arraySum1) / parseFloat(arraySum2) ;
                setResultado(calculo);
                console.log(resultado);
            break;
        }
    }


    return ( 
        <Fragment>

        <div className="calculadora">

       <Display datos={datos} datos2={datos2} OP={OP} res={resultado}/>

<div className="botones">

        <div className="botonesnumeros">

            <div className="row">
                <button type="button" onClick={() => handleClickNumero(7)} className="btn btn-dark ">7</button>
                <button type="button" onClick={() => handleClickNumero(4)} className="btn btn-dark ">4</button>
                <button type="button" onClick={() => handleClickNumero(1)} className="btn btn-dark">1</button>
                <button type="button" className="btn btn-dark "> % </button>
                <button type="button"  className="btn btn-dark " onClick={() => limpiarDisplay()}>AC</button>
            </div>

            <div className="row">
                <button type="button" onClick={() => handleClickNumero(8)} className="btn btn-dark ">8</button>
                <button type="button" onClick={() => handleClickNumero(5)} className="btn btn-dark ">5</button>
                <button type="button" onClick={() => handleClickNumero(2)} className="btn btn-dark ">2</button>
                <button type="button" onClick={() => handleClickNumero(0)} className="btn btn-dark ">0</button>
                <button type="button" className="btn btn-dark "> <i className="fas fa-filter"></i> </button>
            </div>

            <div className="row">
                <button type="button" onClick={() => handleClickNumero(9)} className="btn btn-dark ">9</button>
                <button type="button" onClick={() => handleClickNumero(6)} className="btn btn-dark ">6</button>
                <button type="button" onClick={() => handleClickNumero(3)} className="btn btn-dark ">3</button>
                <button type="button" onClick={() => handleClickNumero('.')} className="btn btn-dark ">.</button>
                <button type="button" className="btn btn-dark "> <i className="fas fa-arrow-alt-circle-left"></i> </button>
            </div>

            <div className="row">
                <button type="button" className="btn btn-dark" onClick={() => operador("/")}>/</button>
                <button type="button" className="btn btn-dark" onClick={() => operador("x")}>x</button>
                <button type="button" className="btn btn-dark" onClick={() => operador("-")}>-</button>
                <button type="button" className="btn btn-dark" onClick={() => operador("+")}>+</button>
                <button type="button" className="btn btn-dark"  onClick={() => calcular()}> = </button>
            </div>
        
        </div>

</div>

        </div>

            
        </Fragment>
     );
}
 
export default Base;