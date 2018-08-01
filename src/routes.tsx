import * as React from 'react';
import * as ReactDom from 'react-dom';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import App from './app/index';
import About from './pages/about/index';
import Contact from './pages/contact/index';
import Home from './pages/home/index';
import Todos from './pages/todos/index';
import rootReducer from './reducers';

const store = createStore(rootReducer);
ReactDom.render((<Provider store={store}>
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/todos" component={Todos}/>
    </Switch>
    </Router>
</Provider>),document.getElementById('root') as HTMLElement);
(module as any).hot.accept();