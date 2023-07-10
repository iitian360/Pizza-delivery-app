import React from 'react'
import './login.css'
import Log_right from './Log_right'
import { Link } from 'react-router-dom/dist'
const Register = () => {
    return (
        <div className="login-container">
            <div className="log_left">
                <div className='log_form'>
                    <form action="">
                        <div className='from_elm'>
                            <label htmlFor="name"></label>
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className='from_elm'>
                            <label htmlFor="email"></label>
                            <input type="email" placeholder='Email' />
                        </div>
                        <div className='from_elm'>
                            <label htmlFor="phone"></label>
                            <input type="phone" placeholder='Phone number' />
                        </div>
                        <div className='from_elm'>
                            <label htmlFor="password"></label>
                            <input type="password" placeholder='Password' />
                        </div>
                        <div>
                            <button type='submit'>Register</button>
                            <div>Already registered? <Link to={'/login'}>Login here</Link></div>
                        </div>

                    </form>

                </div>
            </div>
            <Log_right />
        </div>
    )
}

export default Register
