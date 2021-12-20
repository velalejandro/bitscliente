import { useMutation } from '@apollo/client';
import React, {useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import SET_USUARIO from '../../../Apollo/gql/usuarios/usuarios_mutations'
import GET_USUARIOS from '../../../Apollo/gql/usuarios/usuarios_queries';

const CrearUsuario = () => {

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [AgregarUsuario, {data, loading, error}] = useMutation(SET_USUARIO, {
        refetchQueries: [{
            query: GET_USUARIOS
        }]
    });

    useEffect(() => {
        if(data){
            console.log('data', data);

            navigate('/usuarios', {
                replace: true
            })
        }
   
    }, [data])

    const handleCreate = (args) => {
        
        console.log(args);
        const { nombre, password, rol, email, cedula  } = args;
        try {
            AgregarUsuario({ variables: { nombre, password, rol, email, cedula } })
            
        } catch (error) {
            console.log(error);
        }

        
        
    }

    return (
        <form onSubmit={handleSubmit(handleCreate)}>
            <div className='form-group'>
                <input type='text' className='form-control mb-3' placeholder='Nombre' {...register('nombre', { required: true })} />
                <input type='text' className='form-control mb-3' placeholder='Password' {...register('password', { required: true })} />
                <select className='form-control mb-3'{...register('rol', { required: true })}>
                    <option value="6195ad75b321f9bd92de907a">lider</option>
                    <option value="6195ad92b321f9bd92de907b">estudiante</option>
                </select>
                <input type='text' className='form-control mb-3' placeholder='Email' {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
                <input type='text' className='form-control mb-3' placeholder='Cedula' {...register('cedula', { required: true })} />
                
            </div>
            <input type="submit" />
        </form>

    )
}

export default CrearUsuario
