import * as React from 'react';
import * as ReactDom from 'react-dom';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import App from './app/index';
import About from './pages/about/index';
import Contact from './pages/contact/index';
import Home from './pages/home/index';
//console.log('router',Router);

ReactDom.render((<Router>
    <Switch>
    <Route exact path="/" component={App}/>
    <Route path="/home" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    </Switch>
</Router>),document.getElementById('root') as HTMLElement);

// export default <div>123456</div>