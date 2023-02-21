export const register = (data)=>{
    return{
        type: 'REGISTER',
        payload :data
    };
};

export const logout = (data)=>{
    return{
        type: 'LOGOUT',
        payload :data
    };
};