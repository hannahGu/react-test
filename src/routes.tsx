import * as React from 'react';
import * as ReactDom from 'react-dom';
import { HashRouter as Router, Route} from 'react-router-dom';
// import About from '../pages/about/index';
// import Contact from '../pages/contact/index';
import Home from './pages/home/index';
//console.log('router',Router);

ReactDom.render((<Router>
    <Route path="*" component={Home}/>
</Router>),document.getElementById('root') as HTMLElement);

// export default <div>123456</div>