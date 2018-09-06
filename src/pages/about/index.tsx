import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {make} from '../../actions/about';

const About = ({str,get}:any)=>{
    return <div>
            <h3>About</h3>
            <div><button onClick={get}>async get</button></div>
            <div>{str}</div>
        </div>; 
}
const mapStateToProps = (state:any) => ({
    str: state.about
  })
const mapDispatchToProps = (dispatch:Dispatch) => ({
    get: () => {dispatch(make() as any)}
  })

export default connect(mapStateToProps,mapDispatchToProps)(About);


