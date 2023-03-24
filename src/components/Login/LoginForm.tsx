import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props: any) => {
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
let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
export default LoginReduxForm;