import React from 'react';
import {Link} from "react-router-dom";

class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { datosCargados:false,
                        empleados:[]     
                    
                    
                    }
    }
    

    CargarDatos(){
        fetch("http://localhost/empleados/?")
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
            console.log(datosRespuesta)
            this.setState({ datosCargados:true, empleados:datosRespuesta })
            
        })


        .catch(error => console.log(error))
    }


    componentDidMount(){
        this.CargarDatos();
    }

    render() { 
        const{datosCargados, empleados}=this.state
      

        if (!datosCargados){return(<div>Cargando...</div>);}
        else{
        return ( 
            <div className="card">
                <div className="card-header">
                <Link  className="btn btn-success" to={"/crear"}>Añadir empleado</Link>
                        
                </div>
                <div className="card-body">
                    <h4 className="card-title">Lista de empleados</h4>
                    <><table className="table">
                    <><thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Accion</th>

                        </tr>
                    </thead>
                    <tbody>
                    {empleados.map(
                        (empleado)=>(
                            <tr key={empleado.id}>
                                
                                <td scope="row"> {empleado.id} </td>
                                <td>{empleado.nombre} </td>
                                <td>{empleado.correo} </td>
                                
                                <td>
                                    <div className="btn-group" role="group" aria-label="">
                                        <Link  className="btn btn-warning" to={"/editar"}>Editar</Link>
                                        <button type="button" className="btn btn-danger">Borrar</button>
                                    </div>
                                </td>
                            </tr>
                        )
                    )}
                       
                            
                </tbody></>
                        

                </table></>
                    
                </div>
                <div className="card-footer text-muted">
                    
                </div>
            </div>
             );
                }
    }
}
 
export default Listar;


