import React from 'react';
import {Field, reduxForm} from "redux-form";
import { Input } from '../common/formsControl/FormsControl';
import { required } from './../../validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reduser';
import { Navigate } from 'react-router-dom';



const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} 
                name={"email"} 
                validate={[required]}
                component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} 
                name={"password"} 
                type={"password"}
                validate={[required]}
                component={Input}/>
            </div>
            <div>
                <Field component={Input} 
                name={"rememberMe"} 
                type={"checkbox"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm =  reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(
            formData.email, 
            formData.password, 
            formData.rememberMe
        );
    }

    if(props.isAuth) {
        return <Navigate to={"/profile/28489"}/>
    }
    
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login} ) (Login);