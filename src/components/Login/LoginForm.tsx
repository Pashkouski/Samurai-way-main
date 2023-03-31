import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export interface IFormData {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<IFormData>> = (props: any) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div><Field type="text" placeholder={'login'} name={'login'} component={'input'}/></div>
            <div><Field type="text" placeholder={'password'} name={'password'} component={'input'}/></div>
            <div><Field type="checkbox" name={'rememberMe'} component={'input'}/>Remember me</div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};
let LoginReduxForm = reduxForm<IFormData>({form: 'login'})(LoginForm)
export default LoginReduxForm;