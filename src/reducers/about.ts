const about = (state='static',action:any)=>{
    if(action.type === 'GETSUCCESS'){
        return action.name;
    }else{
        return state;
    }
}

export default about;

