const initialState = {
    count : 82.70,
    count1 :1
};

export default (state = initialState, action) =>{
    switch (action.type) {
        case 'COUNT_RUPEES_INCRESE':
            return{
                ...state,
                count : state.count + 82.70,
            };
        case 'COUNT_DOLLAR_DECRESE':
            return{
                ...state,
                count1 : state.count1 + 1,
            };
        case 'COUNT_RESET':
            return{
                ...state,
                count1 : 0,
                count  :  0,
            };
            default :
                return state;
    }
};