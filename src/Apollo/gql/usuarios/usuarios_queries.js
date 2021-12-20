import { gql } from '@apollo/client';

const GET_USUARIOS = gql`

    query {
        Usuarios {
          id
          nombre
          password
          rol
          email
          estado_usuario
          cedula 
    }
  }
`;


export default GET_USUARIOS;