import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    user: [],
    error: '',
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', async()=>{

    try {
        const {data} = await axios
        .get('https://www.freetogame.com/api/games/');
        return data;
    } catch (error) {
        console.log(error);
    }
    
        
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    //reducers: {},
    extraReducers : (builder) => {
        builder.addCase(fetchUsers.pending, (state, {payload}) => {
            state.loading = true
        })
        .addCase(fetchUsers.fulfilled, (state,{payload}) => {
            state.loading = false
            state.user = payload
            //console.log("====>",payload);
            state.error = ''
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.user = []
            state.error = action.error.message
        })
    },
})

export default userSlice.reducer;