import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div>
            <nav>
                <Link to='/browsing'><div>LOGO</div></Link>
                <Link to='/browsing'><div>Browse</div></Link>
                <Link to='/cart'><div>Cart</div></Link>
                <Link to='/bookshelf'><div>MyShelf</div></Link>
                <Link to='/'><div>Logout</div></Link>
            </nav>
        </div>
    )
}