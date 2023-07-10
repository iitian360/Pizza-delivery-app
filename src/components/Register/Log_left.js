import React from 'react'
import { Link } from 'react-router-dom/dist'

const Log_left = () => {
    return (
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
                    <div>
                        <button type='submit'>Login</button>
                        <div>Create a new <Link to={'/register'}>Account</Link></div>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Log_left
