import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from './Views/Auth';
import AddBook from './Views/AddBook';
import BookDetails from './Views/BookDetails';
import Bookshelf from './Views/Bookshelf';
import Browsing from './Views/Browsing';
import Cart from './Views/Cart';
import EditBook from './Views/EditBook';


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