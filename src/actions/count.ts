export const make = ()=>{
    return {type:'MAKE'};
};

export const makes=(s:string)=>{
    return {type:'MAKESUCCESS',name:s};
}