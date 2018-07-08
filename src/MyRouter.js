import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Time from './component/Time';
import Markdown from './component/Markdown';
import App from './component/App';
import Components from './component/Components';
import State from './component/State';
import Props from './component/Props';
import ComponentAPI from './component/ComponentAPI';
import ComponentLifeCycle from './component/ComponentLifeCycle';
import Form from './component/Form';
import Events from './component/Events';
import Refs from './component/Refs';
import Keys from './component/Keys';

class MyRouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h2>Welcome to React Router Tutorial</h2>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/Login'}>Login</Link></li>
                        <li><Link to={'/Time'}>Time</Link></li>
                        <li><Link to={'/Markdown'}>Markdown</Link></li>
                        <li><Link to={'/App'}>App</Link></li>
                        <li><Link to={'/Components'}>Components</Link></li>
                        <li><Link to={'/ComponentAPI'}>ComponentAPI</Link></li>
                        <li><Link to={'/ComponentLifeCycle'}>ComponentLifeCycle</Link></li>
                        <li><Link to={'/State'}>State</Link></li>
                        <li><Link to={'/Props'}>Props</Link></li>
                        <li><Link to={'/Form'}>Form</Link></li>
                        <li><Link to={'/Events'}>Events</Link></li>
                        <li><Link to={'/Refs'}>Refs</Link></li>
                        <li><Link to={'/Keys'}>Keys</Link></li>
                        <li><Link to={'/Props'}>Props</Link></li>
                    </ul>
                    <hr />

                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/Login' component={Login} />
                        <Route exact path='/Time' component={Time} />
                        <Route exact path='/Markdown' component={Markdown} />
                        <Route exact path='/App' component={App} />
                        <Route exact path='/Components' component={Components} />
                        <Route exact path='/ComponentAPI' component={ComponentAPI} />
                        <Route exact path='/ComponentLifeCycle' component={ComponentLifeCycle} />
                        <Route exact path='/State' component={State} />
                        <Route exact path='/Props' component={Props} />
                        <Route exact path='/Form' component={Form} />
                        <Route exact path='/Events' component={Events} />
                        <Route exact path='/Refs' component={Refs} />
                        <Route exact path='/Keys' component={Keys} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default MyRouter;