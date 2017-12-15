import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

export default function Auth() {
    return (
        <div>
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
                        <Link to='/browsing'><button>Login</button></Link>
                    </div>

                </div>
            </div>
        </div>
    )
}