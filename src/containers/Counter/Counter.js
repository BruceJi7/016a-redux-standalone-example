import React, { Component } from 'react';

import * as actionTypes from "../../store/actions"

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
                < hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.res.map(i => <li key={i.id} onClick={() => {this.props.onDeleteResult(i.id)}}>{i.value}</li>)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {
        ctr : state.counter,
        res : state.results
    }

}

const mapDispatchToProps = dispatch => {

    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAdd:              () => dispatch({type: actionTypes.ADD,      value:5}),
        onSubtract:         () => dispatch({type: actionTypes.SUBTRACT, value:5}),
        onStoreResult:      () => dispatch({type: actionTypes. STORE}),
        onDeleteResult:     (id) => dispatch({type: actionTypes.DELETE, delId: id})
    }
}

 

export default connect(mapStateToProps, mapDispatchToProps)(Counter);