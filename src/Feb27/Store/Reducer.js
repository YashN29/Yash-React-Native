const initialState = {
    data:[]
}

export default (state = initialState,action)=>{
    switch (action.type) {
        case 'ADD':
            console.log(action?.payload);
            return{
                ...state,
                data : [...state.data, action.payload],
            }

        case 'UPDATE':
            return{
                ...state,
                data : action.payload,
            }

        case 'DELETE':
            return{
                
                ...state,
                data : state.data.filter((item,dataId) => dataId !== action.payload)
            };
           
        default:
            return state;
    }
};

