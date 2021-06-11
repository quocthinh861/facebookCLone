import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: '',
    photoURL: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.username  = action.payload.name;
            state.photoURL = action.payload.photo;
        },
        logout: (state, action) => {
           
        }
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;


