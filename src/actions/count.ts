export const make = ()=>{
    return {type:'MAKE'};

    // return (dispatch:Function)=>{
    //     return fetchData().then(res=>res.json()).then(
    //         (res:any)=>{console.log('res',res);return dispatch(makes(res.count));
    //         }).catch((error:any)=>{
    //             console.error(error);
    //         });
    //      }
};

export const makes=(s:string)=>{
    return {type:'MAKESUCCESS',name:s};
}

function fetchData(){
    return fetch('http://localhost:8083');
}