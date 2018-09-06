import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {make} from '../../actions/count';

const Count2 = ({ss,make1}:any)=>{
    console.log('12345 ',ss,make1);
    return <div>
            <h3>Counter</h3>
            <div><button onClick={make1}>Button</button></div>
            <div>{ss}</div>
        </div>; 
}
const mapStateToProps = (state:any) => ({
    ss: state.count1
  })
const mapDispatchToProps = (dispatch:Dispatch, ownProps:any) => ({
    make1: () => dispatch(make())
  })

export default connect(mapStateToProps,mapDispatchToProps)(Count2);


