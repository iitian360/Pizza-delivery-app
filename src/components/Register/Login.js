import React from 'react'
import './login.css'
import Log_right from './Log_right'
import Log_left from './Log_left'
const Login = () => {
    return (
        <div>
            <div className="login-container">
                <Log_left/>
                <Log_right/>
            </div>
        </div>
    )
}

export default Login
