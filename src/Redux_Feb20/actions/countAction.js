export const increment = () =>{
    return{
        type : 'COUNT_RUPEES_INCRESE',
    };
};

export const decrement = ()=>{
    return{
        type: 'COUNT_DOLLAR_DECRESE',
    };
};

export const reset = ()=>{
    return{
        type: 'COUNT_RESET',
    };
};