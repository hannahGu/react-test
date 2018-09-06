import {makes } from '../actions/count';
const count1 = (state='123',action:any)=>{
    if(action.type === 'MAKE'){
        // return '1234';
         return (dispatch:Function)=>{
          return fetchData().then(res=>res.json()).then(
              (res:any)=>{console.log('res',res);return dispatch(makes(res.count));
              }).catch((error:any)=>{
                  console.error(error);
              });
           }
    }else if(action.type === 'MAKESUCCESS'){
        console.log('action ',action);
        return '12345';
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

export default count1;

