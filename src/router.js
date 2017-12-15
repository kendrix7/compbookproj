import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateCard from './Components/View/CreateCard';
import Favorites from './Components/View/Favorites';
import Landing from './Components/View/Landing';
import Home from './Components/View/Home';
import MyDecks from './Components/View/MyDecks';
import Search from './Components/View/Search';
import Wrapper from './Components/View/Wrapper';
import editDeck from './Components/Children/EditDeck';
import createDeck from './Components/Children/CreateDeck';
import StudyCarousel from './Components/Children/StudyCarousel';


export default (
    <div>
        <Switch>
            <Route exact path='/' component={Auth}/>
            <Route path='/addbook' component={AddBook}/>
            <Route path='/' component={MyDecks}/>
            <Route path='/favorites' component={Favorites}/>
            <Route path='/search' component={Search}/>
            <Route path='/create-card/:deck_id' component={CreateCard}/>
            <Route path='/viewer/:deck_id' component={Wrapper}/>    
            <Route path='/edit-deck/:deck_id' component={editDeck}/>
            <Route path='/create-deck/:deck_id' component={createDeck}/>
            <Route path= '/study' component={StudyCarousel} />
        </Switch>
    </div>
)