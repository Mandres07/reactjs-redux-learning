import { STORE_RESULT, DELETE_RESULT } from './actionTypes';

// ACTION CREATORS: funciones que al final retornar la accion para redux
export const saveResult = result => {
   return {
      type: STORE_RESULT,
      result: result
   };
}

// FUNCION ASYNCRONICA PARA dispatch una accion despues de ejecutar codigo asincronico (usa redux-thunk) declarado como sale en e index.js
// La funcion puede reciir la funcion getState como segundo parametro, el cual se puede utilizar, no es muy recomendado pero es posible
export const storeResult = result => {
   return (dispatch, getState) => {
      setTimeout(() => {
         const oldCounter = getState().counter.counter;
         console.log(oldCounter);
         dispatch(saveResult(result));
      }, 2000);
   };
};

export const deleteResult = id => {
   return {
      type: DELETE_RESULT,
      id: id
   };
};