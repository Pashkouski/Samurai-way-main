import React from 'react';
import {useForm} from "react-hook-form";
import LoginForm from "./LoginForm";
import LoginReduxForm from "./LoginForm";


const Login = () => {
    const {
        register,


    } = useForm(
        {
            mode: "onBlur"
        }
    )
    const onSubmit = (formData: any) => {
        console.log(formData)
    }


    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};



export default Login;