import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { DECREMENT, INCREMENT, ADD, SUBTRACT } from '../../store/actions/counter';
import { STORE_RESULT, DELETE_RESULT } from '../../store/actions/results';

class Counter extends Component {
   render() {
      return (
         <div>
            <CounterOutput value={this.props.ctr} />
            <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
            <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
            <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
            <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
            <hr />
            <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Results</button>
            <ul>
               {this.props.results.map((result, index) => <li key={index.toString()} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>)}
            </ul>
         </div>
      );
   }
}

// Mapea el store de la forma en que lo definamos a las props del component
const mapStateToProps = state => {
   return {
      ctr: state.counter.counter,
      results: state.results.results
   };
};

// Mapea las funciones de dispatch a las props del component
const mapDispatchToProps = dispatch => {
   return {
      onIncrementCounter: () => dispatch({ type: INCREMENT }),
      onDecrementCounter: () => dispatch({ type: DECREMENT }),
      onAddCounter: () => dispatch({ type: ADD, value: 5 }),
      onSubtractCounter: () => dispatch({ type: SUBTRACT, value: 5 }),
      onStoreResult: (result) => dispatch({ type: STORE_RESULT, result: result }),
      onDeleteResult: (id) => dispatch({ type: DELETE_RESULT, id: id }),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);