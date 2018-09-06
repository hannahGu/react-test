export const makeS=(s:string)=>{
    return {type:'GETSUCCESS',name:s};
}
export const makeF=()=>{
    return {type:'GETFAILED'};
}
export const make = ()=>{
    return (dispatch:Function)=>{
        return fetchData().then(
            (res:any)=>dispatch(makeS(res)),()=>dispatch(makeF())).catch((error:any)=>{
                console.error(error);
            });
         }
};

function fetchData(){
    return  new Promise(function(resolve) {
        setTimeout(resolve, 100, 'I am from DB');
      });
}