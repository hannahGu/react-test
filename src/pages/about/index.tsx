import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {make} from '../../actions/count';

const Count = ({data,make1}:any)=>{
    console.log('12345 ',data,make1);
    return <div>
            <h3>Counter</h3>
            <div><button onClick={()=>make1()}>Button</button></div>
            <div>{data}</div>
        </div>; 
}
const mapStateToProps = (state:any) => ({
    data: state.count
  })
const mapDispatchToProps = (dispatch:Dispatch, ownProps:any) => ({
    make1: () => dispatch(make())
  })

export default connect(mapStateToProps,mapDispatchToProps)(Count);


