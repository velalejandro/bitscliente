import { gql } from '@apollo/client';


const SET_USUARIO = gql`
mutation setUsuario($nombre: String, $password: String, $rol: String, $email: String, $cedula: String  ){
    AgregarUsuario(usuario : {
      nombre: $nombre,
      password: $password,
      rol: $rol,
      email: $email,
      cedula: $cedula
    }){
      id
      nombre
    }
  }


`;

export default SET_USUARIO;