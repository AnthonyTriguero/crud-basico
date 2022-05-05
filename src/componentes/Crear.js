import React from 'react';
import {Link} from "react-router-dom";
import { useParams } from 'react-router-dom';

export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }

class Crear extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            nombre:"",
            correo:"",
         }
    }
    
    cambioValor=(e)=>{
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState({state})
    }
    enviarDatos= (e) =>{
        e.preventDefault();
        console.log("Formulario enviado.....")
        const {nombre,correo}=this.state
        console.log(nombre);
        console.log(correo);
        


        var datosEnvio = {nombre:nombre, correo:correo}


        fetch("http://localhost/empleados/?insertar=1",{method:"POST",
        body:JSON.stringify(datosEnvio)
    })

    
    
        
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
            console.log(datosRespuesta)
            //this.setState({ datosCargados:true, empleados:datosRespuesta }) Verificación
            this.props.history.push("/")
            
        })


        .catch(error => console.log(error))




    }
    render() { 
        const {nombre,correo}=this.state


        
        return ( 
            
            
            <div className="card">
                <div className="card-header">
                    Empleados
                </div>
                <div className="card-body">
                <form onSubmit={this.enviarDatos}>
                    <div className="form-group">
                      <label htmlFor="">Nombre</label>
                      <input type="text" name="nombre" onChange={this.cambioValor} value={nombre} id="nombre" className="form-control" placeholder="" aria-describedby="helpId"/>
                      <small id="helpId" className="text-muted">Escribe el nombren del empleado</small>
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Correo</label>
                      <input type="text" name="correo" onChange={this.cambioValor} value={correo}  id="correo" className="form-control" placeholder="" aria-describedby="helpId"/>
                      <small id="helpId" className="text-muted">Escribe el correo del empleado</small>
                    </div>

                    <div className="btn-group" role="group" aria-label="">
                        <button   type="submit" to={"/"} className="btn btn-success">Agregar empleado</button>
                        <Link to={"/"} className="btn btn-danger">Cancelar</Link>
                    </div>


                </form>

                </div>
                <div className="card-footer text-muted">
                    
                </div>
            </div>
         );
    }
}
 
export default withRouter(Crear);