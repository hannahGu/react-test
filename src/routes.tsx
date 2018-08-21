import * as React from 'react';
import * as ReactDom from 'react-dom';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import App from './app/index';
import About from './pages/about/index';
import Contact from './pages/contact/index';
import Home from './pages/home/index';
import Todos from './pages/todos/index';
import rootReducer from './reducers';

function logger({ getState }:any) {
    return (next:any) => (action:any) => {
      console.log('will dispatch', action)
  ​
      // Call the next dispatch method in the middleware chain.
      const returnValue = next(action)
  ​
      console.log('state after dispatch', getState())
  ​
      // This will likely be the action itself, unless
      // a middleware further in chain changed it.
      return returnValue
    }
  }

const store = createStore(rootReducer,applyMiddleware(thunk));
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