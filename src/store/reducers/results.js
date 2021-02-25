import { STORE_RESULT, DELETE_RESULT } from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
   results: []
};

const deleteResult = (state, action) => {
   // filter filtra y solo retorna aquellos items cuya evaluacion de la funcion de true index !== action.index
   const updatedResults = state.results.filter(result => result.id !== action.id);
   return updateObject(state, { results: updatedResults });
};

const storeResult = (state, action) => {
   const newResults = [...state.results];
   newResults.push({ id: new Date(), value: action.result });
   return updateObject(state, { results: newResults });
};

const resultsReducer = (state = initialState, action) => {
   switch (action.type) {
      case STORE_RESULT:
         return storeResult(state, action);
      // return {
      //    ...state,
      //    results: newResults
      // };
      case DELETE_RESULT:
         // splice elimina elementos del array definido en su primer parametro el indice y en el segundo parametros cuantos items borrar
         // const newRes = [...state.results];
         // newRes.splice(action.index, 1);
         return deleteResult(state, action);
      // return {
      //    ...state,
      //    results: updatedResults
      // };
      default:
         return state;
   }
}

export default resultsReducer;