import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'; // importa las funcionalidades de react, combineReducer permite combinar varios reducer en uno global
import { Provider } from 'react-redux'; // importa la posibilidad de conectar redux con react a travez de component Provider que tiene props store
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter';
import resultsReducer from './store/reducers/results';

const rootReducer = combineReducers({
   counter: counterReducer,
   results: resultsReducer
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
