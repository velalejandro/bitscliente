
import { useQuery } from '@apollo/client'
import React from 'react'
import { NavLink } from 'react-router-dom';
import GET_USUARIOS from '../../../Apollo/gql/usuarios/usuarios_queries'
import '../../components.css'
import { Enum_Rol } from '../../../utils/enum';

const ListarProyectos = () => {
    return (
        <>
            {loading && <p>Cargando...</p>}
            {error && <p>Se ha producido un error </p>}
            
            { data && 
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Presupuesto</th>
                            <th scope="col">Fecha Inicio</th>
                            <th scope="col">Fecha Fin</th>
                            <th scope="col">Observaciones</th>
                            <th scope="col">Estado Proyecto</th>
                            <th scope="col">Lider</th>
                            <th scope="col">Fase</th>
                        </tr>
                    </thead> 
                    <tbody>
                        {
                            data.Proyectos.map((proyecto,index) => (
                                <tr key={proyecto.id}>
                                    <td scope="row">{index + 1}</td>
                                    <td>{proyecto.nombre}</td>
                                </tr>
                            )) 
                        }
                    </tbody>                       
                </table>
            }
        </>
    )
}

export default ListarProyectos

