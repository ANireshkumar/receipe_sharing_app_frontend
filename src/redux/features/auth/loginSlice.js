import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        email: "",
        password: "",
        isAuthenticated: false
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setAuth: (state, action) => {
            state.isAuthenticated = action.payload;
        }
    }
});

export const { setEmail, setPassword, setAuth } = loginSlice.actions;

export const selectEmail = state => state.login.email;
export const selectPassword = state => state.login.password;
export const selectAuth = state => state.login.isAuthenticated;

export default loginSlice.reducer;