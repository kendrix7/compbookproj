import React from 'react';
import NavBar from '../components/NavBar';

export default function Auth() {
    return (
        <div>
            <NavBar/>
            <div className='main_container'>
                Auth
            <div className='beige_container'>

                    <div>
                        <div>BOOKPIC</div>
                        <div>Book Exchange</div>
                    </div>

                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <button>Register</button>
                        <a href={process.env.REACT_APP_LOGIN}><button>Login</button></a>
                    </div>

                </div>
            </div>
        </div>
    )
}