import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GamesPage from './components/GamesPage'
import GameForm from './components/GameForm'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(logger,thunk)
    )
)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div className="ui container">
                <div className="ui three item menu">
                    <NavLink exact activeClassName="active" to="/" className="item">Home</NavLink>
                    <NavLink exact activeClassName="active" to="/game" className="item">Game</NavLink>
                    <NavLink activeClassName="active" to="/game/new" className="item">New Game</NavLink>
                </div>
                <Route exact path="/" component={App} />
                <Route exact path="/game" component={GamesPage} />
                <Route path="/game/new" component={GameForm} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
