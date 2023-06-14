import { createContext, useContext, useReducer } from "react";

const myContext=createContext();
const initial={
    input:"0",
    output:0
}
const reducer=(state,action)=>{
    return {
        ...state,
       input: action
    }
}
const Provider=({children})=>{
      const [state,dispatch] = useReducer(reducer,initial)
    function getValue(data){
        dispatch(data);
    }

    return <myContext.Provider value={{...state,getValue}} >{children}</myContext.Provider>
}
const Consumer=()=>{
    return useContext(myContext)
}

export {Provider,myContext,Consumer}
