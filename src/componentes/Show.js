import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const endpoint = 'http://localhost:80/empleados'
const Show = () => {
    const [ empleados, setEmpleados ] = useState( [] )

    useEffect ( ()=> {
        getAllempleados()
    }, [])

   const getAllempleados = async ()=>{
    const response = await axios.get(`${endpoint}`)
    setEmpleados(response.data)
        

   }

   const deletempleados =  async (id) => {
    await axios.delete(`${endpoint}/${id}`)
    getAllempleados()
  }

  return (
    <div>
        <div className='d-grid gap-2'>
            <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
        </div>

        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>id</th>
                    <th>nombre</th>
                    <th>correo</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { empleados.map( (empleado) => (
                    <tr key={empleado.id}>
                        <td>{empleado.id} </td> 
                        <td> {empleado.nombre} </td>    
                        <td> {empleado.correo} </td>        
                        <td>
                            <Link to={`/edit/${empleado.id}`} className='btn btn-warning'>Edit</Link>
                            <button onClick={ ()=>deletempleados(empleado.id) } className='btn btn-danger'>Delete</button>
                        </td>

                    </tr>
                )) }
            </tbody>
        </table>
    </div>
  )
}

export default Show