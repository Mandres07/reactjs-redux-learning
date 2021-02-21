import { STORE_RESULT, DELETE_RESULT } from '../actions/results';

const initialState = {
   results: []
}

const resultsReducer = (state = initialState, action) => {
   switch (action.type) {
      case STORE_RESULT:
         const newResults = [...state.results];
         newResults.push({ id: new Date(), value: action.result });
         return {
            ...state,
            results: newResults
         };
      case DELETE_RESULT:
         // splice elimina elementos del array definido en su primer parametro el indice y en el segundo parametros cuantos items borrar
         // const newRes = [...state.results];
         // newRes.splice(action.index, 1);

         // filter filtra y solo retorna aquellos items cuya evaluacion de la funcion de true index !== action.index
         const updatedResults = state.results.filter(result => result.id !== action.id);
         return {
            ...state,
            results: updatedResults
         };
      default:
         return state;
   }
}

export default resultsReducer;