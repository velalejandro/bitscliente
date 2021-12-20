import { gql } from '@apollo/client';

const GET_PROYECTOS = gql`

    query {
        Proyectos{
        id
        nombre
        objetivos_generales
        objetivos_especificos
        presupuesto
        fechaInicio
        fechaFin
        observaciones
        estado_proyecto
        }
    }
`;


export default GET_USUARIOS;