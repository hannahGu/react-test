import * as React from 'react';
import {Link} from 'react-router-dom';
export default class App extends React.Component{
    render(){
        return <div>
        <p><Link to='/home'>home</Link></p>
        <p><Link to='/about'>about</Link></p>
        <p><Link to='/contact'>contact</Link></p>
        <p><Link to='/todos'>todos</Link></p>
        <p><Link to='/'>Back</Link></p>
        </div>;
    }
}
