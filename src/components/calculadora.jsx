import React, {Fragment, useState} from 'react';

const Calculadora = () => {

    let res = 0;

    let mensaje = "";
    
    const [datos, setDatos] = useState({

        valor1: 0,
        valor2: 0,
        operador: '',
        resultado: 0
        
    });


    const handelInputChange = (event) =>{
        console.log(event.target.value)

        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
        
    }

    const resultado = (event) =>{
        event.preventDefault();
        
        
        switch (datos.operador) {
            case '+':
                res = parseInt(datos.valor1) + parseInt(datos.valor2);
                datos.resultado = res;
                console.log(res);
              break;
            case '-':
                res = parseInt(datos.valor1) - parseInt(datos.valor2)    
                console.log(res)
              break;
            case 'x':
                res = parseInt(datos.valor1) * parseInt(datos.valor2)    
                console.log(res)
              break;
            case '/':
                res = parseInt(datos.valor1) / parseInt(datos.valor2)    
                console.log(res)
              break;
            default:
                console.log("Expresion no disponible")
            break;
            
        }



    }
    
    return ( 

        <Fragment>
        <form className="mt-5 ml-5 subcajon" onSubmit={resultado}>
            <div className="col-md-6">
            <label className="form-label text-muted">Valor #1</label>
                <input type="text" 
                className="form-control" 
                name="valor1" 
                placeholder="Ingrese nombre" 
                onChange={handelInputChange}
                />

            </div>
            <div className="col-md-6">
            <label className="form-label text-muted">Valor #2</label>
                <input type="text" 
                className="form-control" 
                name="valor2" 
                placeholder="Ingrese apellido" 
                onChange={handelInputChange}
                />
            
            </div>

            <div className="col-md-6 mb-3">
            <label className="form-label text-muted">Elige una operador</label>
            <select className="form-select" onChange={handelInputChange} name="operador">
                <option>Selecciona un operador</option>
                <option>+</option>
                <option>-</option>
                <option>x</option>
                <option>/</option>
            </select>
            </div>

        {
            <span className="text-success text-bold mb-3">La respuesta es: {datos.resultado}</span>
        }

            <div className="col-md-3">
               <button className="btn btn-primary">Calcular</button>
            </div>

            

        </form>

    
    </Fragment>

     );
}
 
export default Calculadora;