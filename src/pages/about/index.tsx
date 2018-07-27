import * as React from 'react';
interface State{
    readonly count:number;
}
export default class About extends React.Component<State>{
    readonly state:State = {count: 0};
    add=()=>{
        this.setState({count:this.state.count + 1});
    }
    reduce=()=>{
        this.setState({count:this.state.count - 1});
    }
    render(){
        return <div>
            <h3>Counter</h3>
            <p>{this.state.count}</p>
            <button onClick={this.add}>Add</button>
            <button onClick={this.reduce}>Reduce</button>
        </div>;
    }
}
