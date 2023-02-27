export const add = (data)=>{
    return{
        type: 'ADD',
        payload : data
    };
};

export const fetch = (data)=>{
    return{
        type: 'FETCH',
        payload : data
    };
};

export const update = (data)=>{
    return{
        type: 'UPDATE',
        payload : data
    };
};

export const deleteData = (data)=>{
    return{
        type: 'DELETE',
        payload : data
    };
};

