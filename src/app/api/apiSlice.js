import {fetchBaseQuery,createApi} from "@reduxjs/toolkit/query/react"

import { setCredentials,logOut } from "../../features/auth/authSlice"

const baseQuery = fetchBaseQuery({
    baseUrl:'http://localhost:5000',
    credentials:'include',
    prepareHeaders:(Headers,{getState})=>{
        const token = getState().auth.token;
        if(token){
            Headers.set("authorization",`Bearer ${token}`)
        }
        
        return Headers
    }
})

const baseQueryWithReauth = async(args,api,extraOptions)=>{
    let result = await baseQuery(args,api,extraOptions)
    console.log(result.data)
    if(result?.error?.originalStatus===403){
        console.log("Sending Refresh Token")
        const refreshResult = await baseQuery("/refresh",api,extraOptions)
        console.log(refreshResult)
        if(refreshResult?.data){
            const user = api.getState().auth.user
            api.dispatch(setCredentials({...refreshResult.data,user}))
            result = await baseQuery(args,api,extraOptions)

        }else{
            api.dispatch(logOut())
        }
    }
    return result;
}

export const apiSlice = createApi({
    baseQuery:baseQueryWithReauth,
    endpoints:builder=>({})
})
