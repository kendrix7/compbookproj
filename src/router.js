import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from './views/Auth';
import AddBook from './views/AddBook';
import BookDetails from './views/BookDetails';
import Bookshelf from './views/Bookshelf';
import Browsing from './views/Browsing';
import Cart from './views/Cart';
import EditBook from './views/EditBook';


export default (
    <div>
        <Switch>
            <Route exact path='/' component={Auth}/>
            <Route path='/addbook' component={AddBook}/>
            <Route path='/bookdetails' component={BookDetails}/>
            <Route path='/bookshelf' component={Bookshelf}/>
            <Route path='/browsing' component={Browsing}/>
            <Route path='/cart' component={Cart}/>
            <Route path='editbook' component={EditBook}/>    
        </Switch>
    </div>
)