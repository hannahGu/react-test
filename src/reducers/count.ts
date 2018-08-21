import {makes } from '../actions/count';
const count = (state={name:'123'},action:any)=>{
    if(action.type === 'MAKE'){
        return (dispatch:Function)=>{
          return fetchData().then(
              (res:any)=>{console.log('res',res);return dispatch(makes(res));
              }).catch((error:any)=>{
                  console.error(error);
              });
          }
    }else if(action.type === 'MAKESUCCESS'){
        return {...state,name:action.name};
    }else{
        return state;
    }
    
}

function fetchData(){
    return fetch('http://localhost:8083');
}




// function makeASandwichWithSecretSauce(forPerson) {
//     ​
//       // Invert control!
//       // Return a function that accepts `dispatch` so we can dispatch later.
//       // Thunk middleware knows how to turn thunk async actions into actions.
//       return function (dispatch) {
//         return fetchSecretSauce().then(
//           sauce => dispatch(makeASandwich(forPerson, sauce)),
//           error => dispatch(apologize('The Sandwich Shop', forPerson, error))
//         )
//       }
//     }

export default count;

