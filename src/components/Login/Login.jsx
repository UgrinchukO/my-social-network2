import React from 'react'
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../common/FormControls/FormControls";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";
import s from "../common/FormControls/FormControl.module.css"


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div >
                    <Field placeholder='email' name='email' component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field type='password' placeholder='Password' name='password' component={Input}
                           validate={[required]}/>
                </div>
                <div>
                    <Field type='checkbox' name='rememberMe' component={Input} validate={[required]}/>remember me!!!
                </div>
                {props.error && <div className={s.form_summary}>{props.error}</div>}
            </div>
            <button>Log in</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to="/profile"/>
    }
    return <div>
        <h1>
            Login
        </h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {login})(Login)


