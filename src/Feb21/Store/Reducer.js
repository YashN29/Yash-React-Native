const initialState = {
    Email:'',
    Password:'',
};

export default (state = initialState,action) =>{
    switch (action.type) {
        case 'REGISTER':
            console.log(action?.payload)
            return{
                ...state,
                Email: action?.payload.email,
                Password: action?.payload.password,
            }
        case 'LOGOUT':
            console.log(action?.payload)
            return{
                ...state,
                Email: '',
                Password: '',
            }
        default:
            return state;
    }
}