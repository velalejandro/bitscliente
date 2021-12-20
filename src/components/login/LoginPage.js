import { useLazyQuery } from '@apollo/client';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import LOGIN_USUARIO from '../../Apollo/gql/auth/loginUsuario';
import { useForm } from 'react-hook-form';
import '../login/login.css';
import useAuth from '../../hooks/UseAuth';

const LoginPage = () => {

    const auth = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const [loginUsuario, { data, loading, error }] = useLazyQuery(LOGIN_USUARIO);

    useEffect(() => {
        if (data) {
            console.log('data', data);
            
            auth.setToken(data.login.token);
            auth.setUser({ usuario: data.login.usuario, rol: data.login.rol });

            navigate('/usuarios', {
                replace: true
            })
        }
        else{
            console.log("error");
        }
    }, [data, navigate, auth]);



    const handleLogin = (args) => {

        const { email, password } = args;
        loginUsuario({ variables: { email, password } });

    }

    return (
        <div className="login">
            <div className="row">
                <div className="col-md-6 login-form-1 login-container">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="email"
                                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                            />
                        </div>

                        {errors.email?.type === "required" && <div className="alert alert-danger mt-2" role="alert">
                            el correo es obligatorio
                        </div>}

                        {errors.email?.type === "pattern" && <div className="alert alert-danger mt-2" role="alert">
                            el correo no tiene el formato correcto
                        </div>}


                        <div className="form-group mt-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="password"
                                {...register("password", { required: true })}
                            />
                        </div>

                        {errors.password && <div className="alert alert-danger mt-2" role="alert">
                            el password es obligatorio
                        </div>}

                        <div className="form-group mt-3">
                            {!loading && <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />}
                            {loading && <button className="btnSubmit" type="button" disabled>
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Loading...
                            </button>}
                        </div>
                    </form>
                    {error && <div className="alert alert-danger" role="alert">
                        Usuario o contraseña incorrectos
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default LoginPage