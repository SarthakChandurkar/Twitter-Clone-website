import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/users/usersSlice";
import tweetsSlice from "../features/tweets/tweetsSlice";
import authSlice from "../features/auth/authSlice";
import { apiSlice } from "./api/apiSlice";

const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
        users:usersSlice,
        tweets:tweetsSlice,
        auth:authSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})
export default store