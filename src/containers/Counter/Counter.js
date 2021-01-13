import React, { Component } from 'react';

import * as actionTypes from "../../store/actions/actions"

import { connect } from "react-redux"

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default:
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment"   clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement"   clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5"       clicked={this.props.onAdd}  />
                <CounterControl label="Subtract 5"  clicked={this.props.onSubtract}  />
                <hr />
                <button onClick={()=>{this.props.onStoreResult(this.props.ctr)}}>Store Result</button>
                <ul>
                    {this.props.res.map(i => <li key={i.id} onClick={() => {this.props.onDeleteResult(i.id)}}>{i.value}</li>)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {
        ctr : state.ctr.counter,
        res : state.res.results
    }

}

const mapDispatchToProps = dispatch => {

    return {
        onIncrementCounter: ()          => dispatch(actionTypes.increment()),
        onDecrementCounter: ()          => dispatch(actionTypes.decrement()),
        onAdd:              ()          => dispatch(actionTypes.add(5)),
        onSubtract:         ()          => dispatch(actionTypes.subtract(5)),
        onStoreResult:      (result)    => dispatch(actionTypes.storeResult(result)),
        onDeleteResult:     (id)        => dispatch(actionTypes.delete_result(id))
    }
}

 

export default connect(mapStateToProps, mapDispatchToProps)(Counter);